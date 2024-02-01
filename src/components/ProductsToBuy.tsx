import { baseURL } from "../servises/BackEndBaseURL";
import Cart from "../assets/images/CartLight.png";

export function ProductToBuy() {
  const teste = {
    product: {
      name: "Pizza Portuguesa",
      description: "A melhor pizza portuguesa que você poderá provar",
      imagePath: "1704292936890-portuguesa.jpg",
      price: 36,
      ingredients: [
        {
          name: "Molho de Tomate",
          icon: "🍛",
          _id: "65957248362457501509dd01",
        },
        {
          name: "Queijo",
          icon: "🧀",
          _id: "65957248362457501509dd02",
        },
        {
          name: "Ovo",
          icon: "🥚",
          _id: "65957248362457501509dd03",
        },
        {
          name: "Presunto",
          icon: "🥓",
          _id: "65957248362457501509dd04",
        },
      ],
      category: "658f9d07dcbab755ddfa5190",
      _id: "65957248362457501509dd00",
      __v: 0,
    },
    selectedCategory: {
      _id: "658f9cf3dcbab755ddfa518d",
      name: "Hamburguer",
      icon: "🍔",
      __v: 0,
    },
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex bg-base-200 h-auto gap-2 p-1 rounded-md max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
        <img
          className="w-1/3 object-cover rounded-md max-lg:w-full max-md:w-1/3 max-sm:w-full"
          src={`${baseURL}/uploads/${teste.product.imagePath}`}
          alt=""/>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-xs font-extralight">
              <span>{teste.selectedCategory.icon}</span>
              {teste.selectedCategory.name}
            </p>
            <p className="text-lg font-semibold">{teste.product.name}</p>
          </div>
          <p className="text-sm">Descrição:</p>
          <p className="text-xs text-wrap break-all">
            {teste.product.description}
          </p>
          <p className="text-sm">Ingredientes:</p>
          <div className="flex gap-3 flex-wrap">
            {teste.product.ingredients &&
              teste.product.ingredients.map((ingredient) => (
                <p key={ingredient._id} className="text-xs font-extralight">
                  <span>{ingredient.icon}</span>
                  {ingredient.name}
                </p>
              ))}
          </div>
          <div className="flex gap-3">
            <p className="font-light">Preço:</p>
            <p>
              {teste.product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end px-3 flex-1">
          <div className="flex items-center justify-center w-9 h-9 bg-neutral shadow-md rounded-full cursor-pointer hover:bg-black">
            <img className="w-5 h-5" src={Cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
