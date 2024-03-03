import { useLogin } from "../context/LoginContext";
import { baseURL } from "../servises/BackEndBaseURL";
import { useEffect, useState } from "react";
import { DeleteUserDialog } from "./user-components/DeleteUserDialog";
import { useRegister } from "../servises/api/RegisterRequest";
import { toast } from "react-toastify";

export function ManagementUserTable() {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const { AllUsers, logedUser, getAllUsers } = useLogin();
  const { UpdateUserRule } = useRegister();

  const update = async () => {
    await getAllUsers()
  }

  useEffect(()=>{
    update()
  },[isSubmit])

  const handleRoleChange = async (id: string) => {
    setIsSubmit(true)
    if (logedUser?.user._id === id && logedUser.user.rule !== "ADM") {
      toast.error(`Alteração não finalizada por você não ter permição para isso.`, {
        autoClose: 1000 * 3,
      });
      return
    }
    const updateRule = await UpdateUserRule(id)
    updateRule && setIsSubmit(false)
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Email</th>
            <th>
              Cargo
              <div>
                <span className="badge badge-xs badge-ghost">(user/adm)</span>
              </div>
            </th>
            <th>
              Deletar
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {AllUsers &&
            AllUsers.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={`${baseURL}/uploads/${user.imagePath}`}
                          alt=""/>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <th>
                  <input
                    type="checkbox"
                    name="rule"
                    value={user.rule}
                    onClick={()=>handleRoleChange(user._id)}
                    defaultChecked={user.rule === "ADM"}                    
                    className="toggle toggle-primary"/>
                </th>
                <th>
                  <DeleteUserDialog id={user._id} isClosed={isClosed} setIsClosed={setIsClosed} />
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
