import { Dispatch, SetStateAction, useRef } from "react";
import Trash from "../assets/images/Trash.png";
import { useProduct } from "../servises/api/ProductsRequest";
import { ISingleProduct } from "../interfaces/IOrders";

interface IDeleteCategoryDialogProps {
  id: string;
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  useRequestProducts: () => Promise<void>
  setReceivedProduct: Dispatch<React.SetStateAction<ISingleProduct | undefined>>;
  receivedProduct: ISingleProduct | undefined
}

export function DeleteProductDialog({ id, isClosed, setIsClosed, useRequestProducts, setReceivedProduct, receivedProduct }: IDeleteCategoryDialogProps) {
  const modalBtn = useRef(null) as React.MutableRefObject<null | HTMLDialogElement>;
  const { DeleteProduct } = useProduct();

  const handleClick = () => {
    if (modalBtn.current) {
      modalBtn.current.showModal();
    }
  };

  if (isClosed) {
    setIsClosed(false);
    modalBtn.current?.close();
  }

  const handleReject = () => {
    setIsClosed(true);
  };

  const handleDeleteCategory = async (id: string) => {
    setIsClosed(true)

    if (receivedProduct?._id === id) {
      setReceivedProduct(undefined)
    }

    await DeleteProduct(id)
    useRequestProducts()
  }

  return (
    <div
      className="flex flex-col btn btn-square btn-ghost btn-sm rounded-md items-center justify-center cursor-pointer z-10 absolute top-[1.3rem] right-2"
      onClick={handleClick}>
      <img src={Trash} alt="" />
      <dialog ref={modalBtn} className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center justify-end">
              <p className="text-sm font-light">
                Press ESC key or click outside to close
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5 p-2 rounded-md bg-base-300 shadow-lg">
              <h1 className="text-lg font-semibold">Está certo disso?</h1>
              <p className="text-sm font-light">Após o SIM todos os dados desse produtos serão perdidos.</p>
              <div className="flex w-full gap-3 items-center justify-around">
                <button className="btn btn-outline btn-primary w-28" onClick={() => handleDeleteCategory(id)}>
                  Sim!
                </button>
                <button className="btn btn-outline w-28" onClick={handleReject}>
                  Não
                </button>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
