import { Header } from "../components/Header";
import Burguer from "../assets/images/Hamburger.png";
import Plus from "../assets/images/PlusLight.png";
import Not from "../assets/images/nenhum_prod.png";
import { FormEvent, useState } from "react";
import { useProduct } from "../servises/api/ProductsRequest";
import { toast } from "react-toastify";
import { Product } from "../components/Product";
import { ISingleProduct } from "../interfaces/IOrders";

type ICategories = {
  id: string;
  name: string;
  icon: string;
}[];

export function NewItem() {
  const [productName, setProductName] = useState<string>();
  const [productPrice, setProductPrice] = useState<number>();
  const [productDescription, setProductDescription] = useState<string>();
  const [productImage, setProductImage] = useState<File>();
  const [productCategory, setProductCategory] = useState<string>();
  const [ingredients, setIngredients] = useState<
    { icon: string; name: string }[]
  >([{ icon: "", name: "" }]);
  const [product, setProduct] = useState<ISingleProduct | undefined>(undefined);

  const { CreateProduct } = useProduct();

  const categories: ICategories = [
    { id: "658f9cf3dcbab755ddfa518d", name: "Hamburguer", icon: "🍔" },
    { id: "658f9d07dcbab755ddfa5190", name: "Pizzas", icon: "🍕" },
    { id: "658f9d27dcbab755ddfa5193", name: "Refrigerantes", icon: "🥤" },
  ];

  const handleImageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { type } = event.target;

    if (type === "file" && event.target instanceof HTMLInputElement) {
      const file = event.target.files?.[0];

      if (file) {
        setProductImage(file);
      }
    }
  };

  const handleIngredientChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedIngredients = [...ingredients];
    (updatedIngredients[index] as any)[field] = value;
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { icon: "", name: "" }]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !productName ||
      !productDescription ||
      !productImage ||
      !productPrice ||
      !productCategory ||
      !ingredients
    ) {
      toast.error(`Certifique-se de todos os campos estarem preenchidos.`, {
        autoClose: 1000 * 3,
      });
      return;
    }
    const lastProductCreated: ISingleProduct | undefined = await CreateProduct({
      name: productName,
      description: productDescription,
      image: productImage,
      price: productPrice,
      category: productCategory,
      ingredients: ingredients,
    } as any);

    if (lastProductCreated) {
      setProduct(lastProductCreated);
    }

    (event.target as HTMLFormElement).reset();
    setProductName("");
    setProductDescription("");
    setProductImage(undefined);
    setProductPrice(0);
    setProductCategory("");
    setIngredients([{ icon: "", name: "" }]);
  };

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
            <h1 className="text-lg font-semibold">Criar Categoria</h1>
            <div className="flex w-full items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Ícone da categoria</span>
                </div>
                <input
                  type="text"
                  placeholder="Ex.: 🥤"
                  className="input input-bordered w-2/3 max-w-xs max-lg:w-full max-md:w-2/3 max-sm:w-full"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Name da categoria</span>
                </div>
                <input
                  type="text"
                  placeholder="Ex.: Refrigerantes"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <button className="btn w-full btn-neutral">Criar</button>
          </div>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col items-center justify-center gap-2 p-2 rounded-md bg-base-300 shadow-lg"
          >
            <h1 className="text-lg font-semibold">Criar Produto</h1>
            <div className="flex w-full flex-col items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
              <div className="flex w-full gap-2 items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Nome</span>
                  </div>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Ex.: Pizza de Calabresa"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Preço</span>
                  </div>
                  <input
                    type="number"
                    value={productPrice}
                    onChange={(e) =>
                      setProductPrice(parseFloat(e.target.value))
                    }
                    placeholder="Ex.: 30,50"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Descrição</span>
                </div>
                <input
                  type="text"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  placeholder="Ex.: A melhor pizza de calabresa que você vai provar."
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Imagem do produto</span>
                </div>
                <input
                  type="file"
                  onChange={handleImageInputChange}
                  className="file-input file-input-xs file-input-bordered w-full max-w-xs"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Categoria</span>
                </div>
                <select
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Escolha uma categoria
                  </option>
                  {categories &&
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.icon}
                        {category.name}
                      </option>
                    ))}
                </select>
              </label>
              <h1 className="text-base font-semibold">Ingredientes</h1>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col w-full gap-2 items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
                  {ingredients.map((ingredient, index) => (
                    <div
                      className="flex w-full gap-2 items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap"
                      key={index}
                    >
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">Ícone</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Ex.: 🧀"
                          value={ingredient.icon}
                          onChange={(e) =>
                            handleIngredientChange(
                              index,
                              "icon",
                              e.target.value
                            )
                          }
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">Nome</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Ex.: Queijo"
                          value={ingredient.name}
                          onChange={(e) =>
                            handleIngredientChange(
                              index,
                              "name",
                              e.target.value
                            )
                          }
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleAddIngredient}
                  className="btn btn-outline btn-neutral"
                >
                  Mais Ingredientes
                  <img src={Plus} alt="" />
                </button>
              </div>
            </div>
            <button type="submit" className="btn w-full btn-neutral">
              Criar
            </button>
          </form>
        </div>
        <div className="w-1/2 flex flex-col gap-5 max-md:w-full">
          <div className="flex flex-col w-full h-ful gap-2 shadow-lg rounded-md">
            <div className="flex flex-wrap p-1 gap-2 items-center bg-neutral justify-center rounded-md">
              <img className="w-6 h-6" src={Burguer} />
              <p className="text-xl text-neutral-content font-semibold">
                Último adicionado
              </p>
            </div>
            {!product ? (
              <div className="flex flex-col items-center justify-center bg-base-200 h-auto gap-2 p-1 rounded-md">
                <img src={Not} className="w-24 h-24" alt="" />
                <h1 className="text-xl font-semibold">Nenhum produto criado ainda!</h1>
              </div>
            ) : (
              <Product lastProduct={product as any} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
