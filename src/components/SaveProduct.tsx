import { Dispatch, useEffect, useState } from "react";
import Create from "../assets/images/create.png";
import { NewItemDialog } from "./NewItemDialog";
import { NewItemForm } from "./NewItemForm";
import { ISingleProduct } from "../interfaces/IOrders";
import { ProductDialog } from "./ProductDialog";
import { DeleteProductDialog } from "./DeleteProductDialog";
import { useOrderContext } from "../context/OrderContext";

interface ISaveProductProps {
  setReceivedProduct: Dispatch<React.SetStateAction<ISingleProduct | undefined>>;
  receveivedProduct: ISingleProduct | undefined
}

export function SaveProduct({ setReceivedProduct, receveivedProduct }: ISaveProductProps) {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const { products, useRequestProducts } = useOrderContext();

  useEffect(() => {
    useRequestProducts()
  },[])

  return (
    <div className="flex flex-col w-full gap-2 p-2 rounded-md bg-base-300 items-end">
      <div className="flex justify-center items-center gap-2 w-full">
        <img className="w-6 h-6" src={Create} />
        <h1 className="text-2xl font-semibold">Produtos</h1>
      </div>
      <NewItemDialog isClosed={isClosed} setIsClosed={setIsClosed}>
        <NewItemForm
          setIsClosed={setIsClosed}
          useRequestProducts={useRequestProducts}
          onProductSubmit={(product) => setReceivedProduct(product)}/>
      </NewItemDialog>
      {products &&
        products.map((product) => (
          <div className="relative flex w-full" key={product._id}>
            <DeleteProductDialog
              setIsClosed={setIsClosed}
              setReceivedProduct={setReceivedProduct}
              receivedProduct={receveivedProduct}
              isClosed={isClosed}
              id={product._id}
              useRequestProducts={useRequestProducts}/>
            <ProductDialog isClosed={isClosed} setIsClosed={setIsClosed} product={product} />
          </div>
        ))}
    </div>
  );
}
