import { useState } from "react";
import { IFullCategory } from "../../interfaces/ICategory";
import { baseURL } from "../../servises/BackEndBaseURL";

interface ICategoryInfoProps {
  item: IFullCategory | undefined;
}

export function CategoryInfo({ item }: ICategoryInfoProps) {
  const [showAllProducts, setShowAllProducts] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full gap-2 p-2 rounded-md bg-base-300 items-center">
      {!item ? (
        <h1>Clique em uma categoria para obter informações</h1>
      ) : (
        <div className="flex w-full items-center justify-center flex-col gap-3">
          <h1 className="text-2xl font-semibold">Informações da Categoria</h1>
          <h1 className="text-2xl font-semibold">{`${item?.category.icon} ${item?.category.name}`}</h1>
          <div className="flex w-full items-start flex-col">
            {item.products.length === 0 ? (
              <p>Essa categoria ainda não possui nenhum produto cadastrado.</p>
            ) : (
              <>
                <p>{`Existem ${item?.productCount} produtos cadastrados nessa categoria.`}</p>
                <p>{`Abaixo todos os produtos cadastrados na categoria ${item.category.icon} ${item.category.name}.`}</p>
              </>
            )}
          </div>
          {item.products
            .slice(0, showAllProducts ? item.products.length : 5)
            .map((product) => (
              <div key={product.id} className="flex w-full p-2 gap-5 items-center justify-between rounded-md bg-neutral shadow-md">
                <div className="flex gap-5 items-center justify-center">
                  <img
                    className="w-16 h-14 object-cover rounded-md"
                    src={`${baseURL}/uploads/${product.imagePath}`}
                    alt=""/>
                  <div className="flex flex-col">
                    <p className="text-lg font-medium text-neutral-content">
                      {product.name}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2"></div>
              </div>
            ))}
          <div className="flex w-full items-center justify-center">
            {item.products.length <= 5 ? (
              <></>
            ) : (
              <button
                className="btn btn-neutral"
                onClick={() => setShowAllProducts(!showAllProducts)}>
                {showAllProducts ? "Mostrar menos" : "Mostrar mais"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
