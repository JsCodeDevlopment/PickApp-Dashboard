import icon from "../assets/images/AModaDaCasa.jpg";

export function Product() {
  return (
    <div className="flex bg-base-200 h-auto gap-2 p-1 rounded-md max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
      <img
        className="w-1/3 object-cover rounded-md max-lg:w-full max-md:w-1/3 max-sm:w-full"
        src={icon}
        alt=""/>
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
  );
}
