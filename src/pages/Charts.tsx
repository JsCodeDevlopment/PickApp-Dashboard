import { useState } from "react";
import { Header } from "../components/Header";
import { useOrderContext } from "../context/OrderContext";

interface IProduct {
  name: string;
  quantity: number;
}

export function Charts() {
  const { orders } = useOrderContext();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [allSell, setAllSell] = useState<string>("[]");
  
  console.log(orders);

  const logicaTeste = orders.map((order) => {
    order.products.reduce((acc, product) => {
      console.log(product.product.name, product.quantity);
      return acc;
    })

  })

    console.log(logicaTeste)

  // orders.map((order) =>
  //   order.products.map((product) => {
  //     console.log(product.product.name, product.quantity);
  //     // if (product.product.name)
  //     setProducts([...products, { name: product.product.name, quantity: product.quantity }]);
  //   })
  // );
  // console.log(products);

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full p-3 gap-3 justify-between max-md:flex-col max-md:items-center max-md:gap-10">
        {orders.map((order) => (
          <div key={order._id} className="bg-base-200 p-3 rounded-md w-96">
            <h1>produtos vendidos</h1>
            {order.products.map((product) => (
              <div key={product._id} className="flex justify-between">
                <p>{product.product.name}</p>
                <p>{product.quantity}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
