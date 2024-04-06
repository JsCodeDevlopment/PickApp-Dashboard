import { IOrdersReport } from "../interfaces/IOrderContext";

interface IBestSellersProps {
  ordersReport: IOrdersReport[];
}

export function BestSellers({ ordersReport }: IBestSellersProps) {
  return (
    <div className="flex gap-5 bg-neutral p-1 flex-wrap rounded-md items-center justify-center">
      <h2 className="text-base font-bold text-neutral-content">+ Vendido:</h2>
      <div className="flex gap-1">
        <p className="text-sm text-green-500">
          {
            ordersReport.reduce(
              (prev, current) =>
                prev.quantityDone > current.quantityDone ? prev : current,
              ordersReport[0]
            )?.productName.name
          }
          :
        </p>
        <p className="text-sm text-green-500">
          {
            ordersReport.reduce(
              (prev, current) =>
                prev.quantityDone > current.quantityDone ? prev : current,
              ordersReport[0]
            )?.quantityDone
          }
        </p>
      </div>

      <h2 className="text-base font-bold text-neutral-content">+ Cancelado:</h2>
      <div className="flex gap-1">
        <p className="text-sm text-red-500">
          {
            ordersReport.reduce(
              (prev, current) =>
                prev.quantityCanceled > current.quantityCanceled
                  ? prev
                  : current,
              ordersReport[0]
            )?.productName.name
          }
          :
        </p>
        <p className="text-sm text-red-500">
          {
            ordersReport.reduce(
              (prev, current) =>
                prev.quantityCanceled > current.quantityCanceled
                  ? prev
                  : current,
              ordersReport[0]
            )?.quantityCanceled
          }
        </p>
      </div>
    </div>
  );
}
