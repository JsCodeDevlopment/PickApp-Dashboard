import { Header } from "../components/Header";
import EmptyCart from "../assets/images/emptyCart.png";
import CartImg from "../assets/images/CartLight.png";
import { useOrderContext } from "../context/OrderContext";
import { useEffect, useState } from "react";
import { ISingleProduct } from "../interfaces/IOrders";
import { useChangeOrderStatus } from "../servises/api/OrdersRequest";
import { toast } from "react-toastify";
import { ProductsPerCategory } from "../components/ProductsPerCategory";
import { Cart } from "../components/Cart";

export type Order = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  icon: string;
};

export function NewOrder() {
  const { useRequestProducts } = useOrderContext();
  const { CreateOrder } = useChangeOrderStatus();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    useRequestProducts();
  }, []);

  const handleQuantityChange = (id: string, quantity: number) => {
    setOrders((orders) =>
      orders.map((order) => {
        if (order.id === id) {
          return { ...order, quantity };
        }
        return order;
      })
    );
  };

  function handleAddToCart(product: ISingleProduct) {
    if (product) {
      const newOrder: Order = {
        id: product._id,
        name: product.name,
        price: product.price,
        icon: product.imagePath,
        quantity: 1,
      };

      setOrders((prevOrders) => {
        const updatedOrders = [...prevOrders, newOrder];
        localStorage.setItem("order", JSON.stringify(updatedOrders));
        return updatedOrders;
      });
    } else {
      toast.error("Nenhum item selecionado.", {
        autoClose: 1000 * 3,
      });
      return;
    }
  }

  useEffect(() => {
    const savedOrders = localStorage.getItem("order") as string;
    const parsedOrders = JSON.parse(savedOrders);
    if (parsedOrders) {
      setOrders(parsedOrders);
    }
  }, []);

  const handleFinishOrder = async (
    table: string,
    products: { product: string; quantity: number }[]
  ) => {
    if (!table) {
      toast.error("Nenhuma mesa selecionada.", {
        autoClose: 1000 * 3,
      });
      return;
    }
    await CreateOrder(table, products);
    setOrders([]);
    localStorage.removeItem("order");
  };

  const handleDelete = (id: string) => {
    setOrders(orders.filter((order) => order.id !== id));
    const savedOrders = localStorage.getItem("order") as string;
    const parsedOrders = JSON.parse(savedOrders) as Order[];
    localStorage.setItem( "order", JSON.stringify(
      parsedOrders
      .filter((order) => order.id !== id)));
  };

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full py-3 justify-around max-md:flex-col max-md:items-center max-md:gap-10">
        <div className="flex flex-col gap-5 items-center w-1/2 max-md:w-3/4">
          <ProductsPerCategory add={handleAddToCart} />
        </div>
        <div className="w-1/3 flex flex-col gap-5 max-md:w-3/4">
          <div className="bg-neutral flex gap-2 rounded-md items-center justify-center">
            <img className="w-6 h-6" src={CartImg} />
            <p className="text-xl text-neutral-content font-semibold">
              Carrinho
            </p>
          </div>
          {orders.length <= 0 ? (
            <div className="flex w-full flex-col p-2 items-center justify-center rounded-md shadow-md bg-base-300">
              <img className="w-56 rounded-md" src={EmptyCart} alt="" />
              <p className="text-xl font-semibold">Your cart is empty!</p>
            </div>
          ) : (
            <Cart
              handleDelete={handleDelete}
              handleFinishOrder={handleFinishOrder}
              handleQuantityChange={handleQuantityChange}
              orders={orders}/>
          )}
        </div>
      </div>
    </div>
  );
}
