import Logo from "../assets/images/logo-for-lightBG.png";

export function Register() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="flex w-full items-center justify-center mt-5">
          <img className="w-36" src={Logo} alt="" />
        </div>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input type="file" className="file-input file-input-xs file-input-bordered file-input-primary w-full max-w-xs" required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required/>
            <label className="label">
              <p className="label-text">Criar como administrador?</p>
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-secondary">
              <a href="/dashboard">Criar</a>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
