import { Header } from "../components/Header";
import pizza from "../assets/images/pizza.png";
import Cart from "../assets/images/CartLight.png";
import EmptyCart from "../assets/images/emptyCart.png";
import Select from "react-select";
import { QuantityButton } from "../components/QuantityButton";

const options = [
  { value: 40, label: "Pizza 4 queijos" },
  { value: 12, label: "X-TUDO" },
  { value: 22, label: "A MODA DA CASA" },
];

export function NewOrder() {
  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full h-screen py-10 justify-around">
        <div className="flex flex-col gap-5 items-center w-1/3">
          fazendo meu pedido aqui
          <Select options={options} isClearable={true} className="w-full text-black" />
          <QuantityButton />
          <button className="btn btn-block btn-primary text-danger">
            Selecionar Produto
          </button>
        </div>
        <div className="w-1/3 flex flex-col gap-5">
          <div className="bg-base-300 flex gap-2 items-center justify-center">
            <img className="w-4 h-4" src={Cart} />
            <p className="text-md font-semibold">Carrinho</p>
          </div>
          <div className="flex w-full flex-col p-2 items-center justify-center rounded-md bg-base-200">
            <img className="w-56 rounded-md" src={EmptyCart} alt="" />
            <p className="text-xl font-semibold">Your cart is empty!</p>
          </div>
          <div className="flex w-full h-20 p-2 items-start justify-between rounded-md bg-base-200">
            <img className="w-20 h-16 rounded-md" src={pizza} alt="" />
            <p className="text-sm font-light">5x</p>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold">
                pizzazinha de peitu de peru
              </p>
              <p className="text-sm font-light">R$ 30,00</p>
            </div>
          </div>
          <div className="flex w-full bg-base-300 px-2 justify-between">
            <p className="text-md font-semibold">Total</p>
            <p className="text-md font-semibold">R$ 30,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
