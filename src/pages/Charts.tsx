import { useEffect } from "react";
import { Header } from "../components/Header";
import { useOrderContext } from "../context/OrderContext";

// interface IProduct {
//   name: string;
//   quantity: number;
// }

export function Charts() {
  const { orders, RequestOrdersReport, ordersReport } = useOrderContext();

  useEffect(() => {
    RequestOrdersReport(new Date("2024-03-01") , new Date());
  }, []);
  console.log(ordersReport);

  
  

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
