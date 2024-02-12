import { baseURL } from "../servises/BackEndBaseURL";
import Cart from "../assets/images/CartLight.png";
import { useProduct } from "../servises/api/ProductsRequest";
import { useEffect, useState } from "react";
import { ISingleProduct } from "../interfaces/IOrders";
import { useCart } from "../context/CartContext";

interface IProductToBuyProps {
  category: string;
}

export function ProductToBuy({ category, }: IProductToBuyProps) {
  const [searshedProducts, setSearshedProducts] = useState<ISingleProduct[]>([]);

  const { ShowProductsByCategory } = useProduct();
  const { addOrder } = useCart();

  const SearchedProducts = async () => {
    if (!category){
      return
    } else {
      const products = await ShowProductsByCategory(category);
      setSearshedProducts(products);
    }
  };

  useEffect(() => {
    SearchedProducts();
  }, [category]);

  return (
    <div className="flex flex-col gap-3">
      {searshedProducts.length <= 0 ? (
        <h1 className="text-base font-semibold">
          Ainda não existem produtos nesta categoria 😥
        </h1>
      ) : (
        searshedProducts.map((product) => (
          <div
            className="flex bg-base-200 h-auto gap-2 p-1 rounded-md max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap"
            key={product._id}>
            <img
              className="w-1/3 object-cover rounded-md max-lg:w-full max-md:w-1/3 max-sm:w-full"
              src={`${baseURL}/uploads/${product.imagePath}`}
              alt=""/>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{product.name}</p>
              </div>
              <p className="text-sm">Descrição:</p>
              <p className="text-xs text-wrap break-all">
                {product.description}
              </p>
              <p className="text-sm">Ingredientes:</p>
              <div className="flex gap-3 flex-wrap">
                {product.ingredients &&
                  product.ingredients.map((ingredient) => (
                    <p key={ingredient._id} className="text-xs font-extralight">
                      <span>{ingredient.icon}</span>
                      {ingredient.name}
                    </p>
                  ))}
              </div>
              <div className="flex gap-3">
                <p className="font-light">Preço:</p>
                <p>
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end px-3 flex-1">
              <div
                className="flex items-center justify-center w-9 h-9 bg-neutral shadow-md rounded-full cursor-pointer hover:bg-black"
                onClick={() => addOrder(product)}>
                <img className="w-5 h-5" src={Cart} alt="" />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
