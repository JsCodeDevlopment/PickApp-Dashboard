import { Header } from "../components/Header";
import Cart from "../assets/images/CartLight.png";
import EmptyCart from "../assets/images/emptyCart.png";
import { Select } from "../components/Select";
import { ITables } from "../interfaces/ISelectProps";
import { QuantityButton } from "../components/QuantityButton";
import { useOrderContext } from "../context/OrderContext";
import { useEffect, useState } from "react";
import { ISingleProduct } from "../interfaces/IOrders";
import { baseURL } from "../servises/BackEndBaseURL";

type Order = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  icon: string;
};

export function NewOrder() {
  const { useRequestProducts, products } = useOrderContext();
  const [table, setTable] = useState<string>();
  const [newSelectedOrder, setNewSelectedOrder] = useState<ISingleProduct | null>();
  const [quantity, setQuantity] = useState<number>(1);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isActiveSelectTable, setIsActiveSelectTable] = useState<boolean>(false);

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
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = tables[selectedIndex].id;
    setTable(selectedOption);
  };

  const handleSelectChange = (selectedOption: ISingleProduct) => {
    setNewSelectedOrder(selectedOption);
    console.log(selectedOption);
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
      };

      setOrders((prevOrders) => [...prevOrders, newOrder]);
      setIsActiveSelectTable(false);
      console.log("orders on handleADD →", orders);
    }
  }
  console.log("orders outside handleADD →", orders);

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full py-10 justify-around">
        <div className="flex flex-col gap-5 items-center w-1/3">
          <h1 className="text-2xl font-semibold">Vamos fazer nosso pedido!?</h1>
          <p>
            Vamos escolher nossos pedidos, encher o carrinho para finalizar o
            pedido.
          </p>
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
        <div className="w-1/3 flex flex-col gap-5">
          <div className="bg-base-300 flex gap-2 items-center justify-center">
            <img className="w-4 h-4" src={Cart} />
            <p className="text-md font-semibold">Carrinho</p>
          </div>
          {orders.length <= 0 ? (
            <div className="flex w-full flex-col p-2 items-center justify-center rounded-md bg-base-200">
              <img className="w-56 rounded-md" src={EmptyCart} alt="" />
              <p className="text-xl font-semibold">Your cart is empty!</p>
            </div>
          ) : (
            <>
              {orders &&
                orders.map((order) => (
                  <div className="flex w-full h-20 p-2 gap-5 items-start justify-start rounded-md bg-base-200">
                    <img
                      className="w-20 h-16 rounded-md"
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
                ))}
              <div className="flex w-full bg-base-300 px-2 justify-between">
                <p className="text-md font-semibold">Total</p>
                <p className="text-md font-semibold">
                  {orders
                    .reduce((acc, order) => acc + order.price * order.quantity,0)
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
                    Escolha a mesa
                  </option>
                  {tables &&
                    tables.map((table) => (
                      <option disabled={isActiveSelectTable} key={table.id}>
                        Mesa: {table.name}
                      </option>
                    ))}
                </select>
              </div>
              <button className="btn btn-block btn-primary text-danger">
                Finalizar Pedido
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
