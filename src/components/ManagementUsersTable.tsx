import { useLogin } from "../context/LoginContext";
import { baseURL } from "../servises/BackEndBaseURL";

export function ManagementUserTable() {
  const { AllUsers } = useLogin();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>
              Cargo
              <div>
                <span className="badge badge-xs badge-ghost">(user/adm)</span>
              </div>
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
                    className="toggle toggle-primary"/>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
