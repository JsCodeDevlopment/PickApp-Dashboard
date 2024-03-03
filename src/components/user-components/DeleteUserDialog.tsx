import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Trash from "../../assets/images/Trash.png";
import { useRegister } from "../../servises/api/RegisterRequest";
import { useLogin } from "../../context/LoginContext";

interface IDeleteCategoryDialogProps {
  id: string;
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
}

export function DeleteUserDialog({ id, isClosed, setIsClosed }: IDeleteCategoryDialogProps) {
  const modalBtn = useRef(null) as React.MutableRefObject<null | HTMLDialogElement>;
  const { DeleteUser } = useRegister();
  const { getAllUsers } = useLogin();

  const updateUsers = async () => {
    await getAllUsers()
  }

  useEffect(()=>{
    updateUsers()
  },[isClosed])

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

  const handleDeleteUser = async (id: string) => {
    setIsClosed(true);
    await DeleteUser(id);
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
                Ao excluir esse perfil, o usuário perderá permanentemente o acesso a essa conta.
              </p>
              <div className="flex w-full gap-3 items-center justify-around">
                <button
                  className="btn btn-outline btn-primary w-28"
                  onClick={() => handleDeleteUser(id)}>
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
