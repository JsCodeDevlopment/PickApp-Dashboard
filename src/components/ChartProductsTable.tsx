import { useState } from "react";
import { IOrdersReport } from "../interfaces/IOrderContext";
import Up from "../assets/images/CaretUp.png";
import Down from "../assets/images/CaretDown.png";

interface IChartProductsTableProps {
  ordersReport: IOrdersReport[];
}

export function ChartProductsTable({ ordersReport }: IChartProductsTableProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedOrdersReport = [...ordersReport].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.quantityDone - b.quantityDone;
    } else {
      return b.quantityDone - a.quantityDone;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <table className="table table-sm table-zebra w-full">
      <thead className="bg-neutral text-neutral-content">
        <tr>
          <th>Produtos</th>
          <th>
            <button
              className="flex gap-1 items-center"
              onClick={toggleSortOrder}>
              Qtd. Vendida{" "}
              <img
                className="w-5"
                src={sortOrder === "asc" ? Down : Up}
                alt=""/>
            </button>
          </th>
          <th>Qtd. Cancelada</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {sortedOrdersReport &&
          sortedOrdersReport.map((prod) => (
            <tr key={prod.productId}>
              <td className="flex w-48 max-sm:w-auto">{prod.productName.name}</td>
              <td className="w-20">{prod.quantityDone}</td>
              <td className="w-20">{prod.quantityCanceled}</td>
              <td className="w-20">{prod.quantityTotal}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
