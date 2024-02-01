import { Header } from "../components/Header";
import Cart from "../assets/images/CartLight.png";
import Trash from "../assets/images/Trash.png";
import EmptyCart from "../assets/images/emptyCart.png";
import { Select } from "../components/Select";
import { ITables } from "../interfaces/ISelectProps";
import { QuantityButton } from "../components/QuantityButton";
import { useOrderContext } from "../context/OrderContext";
import { useEffect, useState } from "react";
import { ISingleProduct } from "../interfaces/IOrders";
import { baseURL } from "../servises/BackEndBaseURL";
import { useChangeOrderStatus } from "../servises/api/OrdersRequest";
import { toast } from "react-toastify";
import { ProductsPerCategory } from "../components/ProductsPerCategory";

export type Order = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  icon: string;
};

export function NewOrder() {
  const { useRequestProducts, products } = useOrderContext();
  const { CreateOrder } = useChangeOrderStatus();
  const [table, setTable] = useState<string>("");
  const [newSelectedOrder, setNewSelectedOrder] = useState<ISingleProduct | null>();
  const [quantity, setQuantity] = useState<number>(1);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    useRequestProducts();
  }, []);

  const tables: ITables = [
    { id: "1", name: "01" },
    { id: "2", name: "02" },
    { id: "3", name: "03" },
    { id: "4", name: "04" },
    { id: "5", name: "05" },
    { id: "6", name: "06" },
    { id: "7", name: "07" },
    { id: "8", name: "08" },
    { id: "9", name: "09" },
    { id: "10", name: "10" },
  ];

  const handleTableChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex - 1;
    const selectedOption = tables[selectedIndex].id;

    setTable(selectedOption);
  };

  const handleSelectChange = (selectedOption: ISingleProduct) => {
    setNewSelectedOrder(selectedOption);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  function handleAddToCart() {
    if (newSelectedOrder) {
      const newOrder: Order = {
        id: newSelectedOrder._id,
        name: newSelectedOrder.name,
        price: newSelectedOrder.price,
        icon: newSelectedOrder.imagePath,
        quantity: quantity,
      }

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

  const formattedOrders = orders.map((order) => ({
    product: order.id,
    quantity: order.quantity,
  }));

  const handleFinishOrder = async ( table: string, products: { product: string; quantity: number }[]) => {
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
    const parsedOrders = JSON.parse(savedOrders) as Order[]
    localStorage.setItem("order", JSON.stringify(parsedOrders.filter((order) => order.id !== id)))
  };

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full py-3 justify-around max-md:flex-col max-md:items-center max-md:gap-10">
        <div className="flex flex-col gap-5 items-center w-1/2 max-md:w-3/4">
          <ProductsPerCategory/>
          <div className="flex flex-col w-full items-center justify-center gap-2 p-2 rounded-md bg-base-300 shadow-lg">
          <h1 className="text-lg font-semibold">Escolher Produto</h1>
          <Select
            title="Produto"
            options={products}
            onSelectChange={handleSelectChange}/>
          <QuantityButton onChange={handleQuantityChange} />
          <button
            onClick={handleAddToCart}
            className="btn btn-block btn-primary text-danger">
            Selecionar Produto
          </button>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-5 max-md:w-3/4">
          <div className="bg-neutral flex gap-2 rounded-md items-center justify-center">
            <img className="w-6 h-6" src={Cart} />
            <p className="text-xl text-neutral-content font-semibold">Carrinho</p>
          </div>
          {orders.length <= 0 ? (
            <div className="flex w-full flex-col p-2 items-center justify-center rounded-md shadow-md bg-base-300">
              <img className="w-56 rounded-md" src={EmptyCart} alt="" />
              <p className="text-xl font-semibold">Your cart is empty!</p>
            </div>
          ) : (
            <>
              {orders &&
                orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex w-full p-2 gap-5 items-center justify-between rounded-md bg-base-300 shadow-md max-sm:flex-col">
                    <div className="flex gap-5 max-sm:flex-wrap max-sm:w-full max-sm:items-center max-sm:flex-col max-sm:gap-2">
                      <img
                        className="w-20 h-16 rounded-md object-cover max-sm:w-full max-sm:h-36"
                        src={`${baseURL}/uploads/${order.icon}`}
                        alt=""/>
                      <p className="text-sm font-light">x{order.quantity}</p>
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-semibold">{order.name}</p>
                        <p className="text-sm font-light">
                          {order.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => handleDelete(order.id)}
                      className="flex items-center justify-center cursor-pointer">
                      <img className="w-5 h-5" src={Trash} alt="" />
                    </div>
                  </div>
                ))}
              <div className="flex w-full bg-neutral rounded-md px-2 justify-between">
                <p className="text-md text-neutral-content font-semibold">Total</p>
                <p className="text-md text-neutral-content font-semibold">
                  {orders
                    .reduce((acc, order) => acc + order.price * order.quantity, 0)
                    .toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </div>
              <div className="flex w-full items-center justify-center">
                <select
                  onChange={handleTableChange}
                  className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Escolha uma mesa
                  </option>
                  {tables &&
                    tables.map((table) => (
                      <option key={table.id}>Mesa: {table.name}</option>
                    ))}
                </select>
              </div>
              <button
                onClick={() => handleFinishOrder(table, formattedOrders)}
                className="btn btn-block btn-primary text-danger">
                Finalizar Pedido
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
