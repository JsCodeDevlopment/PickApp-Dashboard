import { Header } from "../components/Header";
import Burguer from "../assets/images/Hamburger.png";
import icon from "../assets/images/AModaDaCasa.jpg";

export function NewItem() {
  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full p-10 gap-3 justify-around max-md:flex-col max-md:items-center max-md:gap-10">
        <div className="flex flex-col gap-5 items-center w-1/2 max-md:w-full">
          <h1 className="text-2xl font-semibold">
            Hora de criar nossos produtos!
          </h1>
          <p>Aqui vamos criar categorias e produtos para nosso negócio.</p>
          <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-md bg-base-300 shadow-lg">
            <h1 className="text-lg font-semibold">Criar categoria</h1>
            <div className="flex w-full items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Ícone da categoria</span>
              </div>
              <input
                type="text"
                placeholder="Ex.: 🥤"
                className="input input-bordered w-2/3 max-w-xs max-lg:w-full max-md:w-2/3 max-sm:w-full"/>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name da categoria</span>
              </div>
              <input
                type="text"
                placeholder="Ex.: Refrigerantes"
                className="input input-bordered w-full max-w-xs"/>
            </label>
            </div>
            <button className="btn w-full btn-neutral">Criar</button>
          </div>
          <p>criar produto</p>
          <p>nome</p>
          <p>descrição</p>
          <p>imagem</p>
          <p>preço</p>
          <p>categoria</p>
          <p>ingredientes</p>
        </div>
        <div className="w-1/2 flex flex-col gap-5 max-md:w-full">
          <div className="flex flex-col w-full h-ful gap-2 shadow-lg rounded-md">
            <div className="flex flex-wrap p-1 gap-2 items-center bg-neutral justify-center rounded-md">
              <img className="w-6 h-6" src={Burguer} />
              <p className="text-xl text-neutral-content font-semibold">
                Ultimos adicionados
              </p>
            </div>

            <div className="flex bg-base-200 h-auto gap-2 p-1 rounded-md max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
              <img
                className="w-1/3 object-cover rounded-md max-lg:w-full max-md:w-1/3 max-sm:w-full"
                src={icon}
                alt=""
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <p className="text-xs font-extralight">
                    <span>🍔</span>Hamburguer
                  </p>
                  <p className="text-lg font-semibold">A Moda da Casa</p>
                </div>
                <p className="text-sm">Descrição:</p>
                <p className="text-xs text-wrap break-all">
                  Coma em dupla, pão em dobro para você e seu acompanhante.
                </p>
                <p className="text-sm">Ingredientes:</p>
                <div className="flex gap-3 flex-wrap">
                  <p className="text-xs font-extralight">
                    <span>🍔</span>ingrediente 1
                  </p>
                  <p className="text-xs font-extralight">
                    <span>🍔</span>ingrediente 2
                  </p>
                  <p className="text-xs font-extralight">
                    <span>🍔</span>ingrediente 3
                  </p>
                  <p className="text-xs font-extralight">
                    <span>🍔</span>ingrediente 4
                  </p>
                </div>
                <div className="flex gap-3">
                  <p className="font-light">Preço:</p>
                  <p>R$ 24,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
