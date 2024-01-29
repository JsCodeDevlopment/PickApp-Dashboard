import { ISingleCategory, ISingleProduct } from "../interfaces/IOrders";
import { baseURL } from "../servises/BackEndBaseURL";

export interface IProductProps {
  lastProduct: {
    product: ISingleProduct
    selectedCategory: ISingleCategory
  } | undefined
}

export function Product({ lastProduct }: IProductProps) {
  return (
    <div className="flex bg-base-200 h-auto gap-2 p-1 rounded-md max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
      <img
        className="w-1/3 object-cover rounded-md max-lg:w-full max-md:w-1/3 max-sm:w-full"
        src={`${baseURL}/uploads/${lastProduct?.product.imagePath}`}
        alt=""/>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <p className="text-xs font-extralight">
            <span>{lastProduct?.selectedCategory.icon}</span>{lastProduct?.selectedCategory.name}
          </p>
          <p className="text-lg font-semibold">{lastProduct?.product.name}</p>
        </div>
        <p className="text-sm">Descrição:</p>
        <p className="text-xs text-wrap break-all">
          {lastProduct?.product.description}
        </p>
        <p className="text-sm">Ingredientes:</p>
        <div className="flex gap-3 flex-wrap">
          {lastProduct?.product.ingredients &&
            lastProduct?.product.ingredients.map((ingredient) => (
              <p key={ingredient._id} className="text-xs font-extralight">
                <span>{ingredient.icon}</span>
                {ingredient.name}
              </p>
            ))}
        </div>
        <div className="flex gap-3">
          <p className="font-light">Preço:</p>
          <p>
            {lastProduct?.product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
