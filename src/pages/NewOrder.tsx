import { Header } from "../components/Header";
import EmptyCart from "../assets/images/emptyCart.png";
import CartImg from "../assets/images/CartLight.png";
import { useOrderContext } from "../context/OrderContext";
import { useEffect } from "react";
import { ProductsPerCategory } from "../components/ProductsPerCategory";
import { Cart } from "../components/Cart";
import { useCart } from "../context/CartContext";

export type Order = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  icon: string;
};

export function NewOrder() {
  const { useRequestProducts } = useOrderContext();
  const { orders } = useCart()

  useEffect(() => {
    useRequestProducts();
  }, []);

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full py-3 justify-around max-md:flex-col max-md:items-center max-md:gap-10">
        <div className="flex flex-col gap-5 items-center w-1/2 max-md:w-3/4">
          <ProductsPerCategory />
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
            <Cart />
          )}
        </div>
      </div>
    </div>
  );
}
