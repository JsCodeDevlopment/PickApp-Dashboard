import { useOrderContext } from "../../context/OrderContext";
import { DataSearch } from "../../components/DateSearch";
import { useEffect } from "react";
import { ChartProductsTable } from "../../components/ChartProductsTable";
import { BestSellers } from "../../components/BestSellers";

export function AllOrders() {
  const { ordersReport, RequestOrdersReport } = useOrderContext();

  useEffect(() => {
    RequestOrdersReport();
  }, []);

  return (
    <div className="flex w-full p-3 gap-10 justify-between max-lg:flex-col">
      <div className="flex flex-col gap-5 max-lg:items-center">
        <h1 className="text-2xl">Todos os Pedidos</h1>
        <DataSearch />
      </div>
      <div className="flex gap-3 w-full justify-center flex-col">
        <BestSellers ordersReport={ordersReport} />
        <div className="flex w-full">
          <ChartProductsTable ordersReport={ordersReport} />
        </div>
      </div>
    </div>
  );
}
