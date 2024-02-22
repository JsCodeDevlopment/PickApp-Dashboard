import { Dispatch, SetStateAction, useRef } from "react";
import Trash from "../../assets/images/Trash.png";
import { useCategory } from "../../servises/api/CategoryRequest";

interface IDeleteCategoryDialogProps {
  id: string;
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  getCategories: () => Promise<void>;
  productCount: number;
}

export function DeleteCategoryDialog({ id, isClosed, setIsClosed, getCategories, productCount,}: IDeleteCategoryDialogProps) {
  const modalBtn = useRef(null) as React.MutableRefObject<null | HTMLDialogElement>;
  const { DeleteCategory } = useCategory();

  const handleClick = () => {
    modalBtn.current && modalBtn.current.showModal()
  };

  if (isClosed) {
    setIsClosed(false);
    modalBtn.current?.close();
  }

  const handleReject = () => {
    setIsClosed(true);
  };

  const handleDeleteCategory = async (id: string) => {
    setIsClosed(true);
    await DeleteCategory(id);
    getCategories();
  };

  return (
    <div
      className="flex flex-col btn btn-square btn-ghost btn-sm rounded-md items-center justify-center cursor-pointer"
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
              <p className="text-sm font-light">
                {productCount > 0
                  ? `Existem ${productCount} produtos cadastrados nessa categoria. Caso clique em SIM, todos serão deletados.`
                  : `Essa categoria não possui nenhum produto, portanto nenhum produto será perdido.`}
              </p>
              <div className="flex w-full gap-3 items-center justify-around">
                <button
                  className="btn btn-outline btn-primary w-28"
                  onClick={() => handleDeleteCategory(id)}>
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
