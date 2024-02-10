import { Header } from "../components/Header";
import Burguer from "../assets/images/Hamburger.png";
import Not from "../assets/images/nenhum_prod.png";
import { Product } from "../components/Product";
import { ItemForm } from "../components/NewItemForm";
import { useState } from "react";
import { ISingleProduct } from "../interfaces/IOrders";

export type ICategories = {
  _id: string;
  name: string;
  icon: string;
}[];

export function NewItem() {
  const [receivedProduct, setReceivedProduct] = useState<ISingleProduct | undefined>(undefined);

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full p-3 gap-3 justify-around max-md:flex-col max-md:items-center max-md:gap-10">
        <div className="flex flex-col gap-5 items-center w-1/2 max-md:w-full">
          <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-md bg-base-300 shadow-lg">
            <h1 className="text-lg font-semibold">Criar Categoria</h1>
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
          <ItemForm onProductSubmit={(product)=>setReceivedProduct(product)} />
        </div>
        <div className="w-1/2 flex flex-col gap-5 max-md:w-full">
          <div className="flex flex-col w-full h-ful gap-2 shadow-lg rounded-md">
            <div className="flex flex-wrap p-1 gap-2 items-center bg-neutral justify-center rounded-md">
              <img className="w-6 h-6" src={Burguer} />
              <p className="text-xl text-neutral-content font-semibold">
                Último adicionado
              </p>
            </div>
            {!receivedProduct ? (
              <div className="flex flex-col items-center justify-center bg-base-200 h-auto gap-2 p-1 rounded-md">
                <img src={Not} className="w-24 h-24" alt="" />
                <h1 className="text-xl font-semibold">
                  Nenhum produto criado ainda!
                </h1>
              </div>
            ) : (
              <Product lastProduct={receivedProduct} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
