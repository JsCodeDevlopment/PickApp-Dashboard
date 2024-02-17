import { Dispatch, useState } from "react";
import Create from "../assets/images/create.png";
import { NewItemDialog } from "./NewItemDialog";
import { NewItemForm } from "./NewItemForm";
import { ISingleProduct } from "../interfaces/IOrders";
import { ProductDialog } from "./ProductDialog";

interface ISaveProductProps {
  setReceivedProduct: Dispatch<React.SetStateAction<ISingleProduct | undefined>>;
}

export function SaveProduct({ setReceivedProduct }: ISaveProductProps) {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full gap-2 p-2 rounded-md bg-base-300 items-end">
      <div className="flex justify-center items-center gap-2 w-full">
        <img className="w-6 h-6" src={Create} />
        <h1 className="text-2xl font-semibold">Produtos</h1>
      </div>
      <NewItemDialog isClosed={isClosed} setIsClosed={setIsClosed}>
        <NewItemForm
          setIsClosed={setIsClosed}
          onProductSubmit={(product) => setReceivedProduct(product)}/>
      </NewItemDialog>
      <ProductDialog isClosed={isClosed} setIsClosed={setIsClosed}/>
    </div>
  );
}
