import { FormEvent, useEffect, useState } from "react";
import Plus from "../../assets/images/PlusLight.png";
import Trash from "../../assets/images/Trash.png";
import Wind from '../../assets/images/WindowsLogo.png'
import { useProduct } from "../../servises/api/ProductsRequest";
import { toast } from "react-toastify";
import { ISingleChangeProduct, ISingleProduct } from "../../interfaces/IOrders";
import { useCategory } from "../../servises/api/CategoryRequest";
import { IItemFormProps } from "../../interfaces/IItemFormProps";
import { ICategories } from "../../interfaces/ICategory";

export function NewItemForm({ onProductSubmit, setIsClosed, useRequestProducts, product }: IItemFormProps) {
  const [productName, setProductName] = useState<string>(product?.name || "");
  const [productPrice, setProductPrice] = useState<number>(product?.price || 0);
  const [productDescription, setProductDescription] = useState<string>(product?.description || "");
  const [productImage, setProductImage] = useState<File>();
  const [productCategory, setProductCategory] = useState(product?.category || "");
  const [ingredients, setIngredients] = useState<{ icon: string; name: string }[]>(product?.ingredients || [{ icon: "", name: "" }]);
  const [categories, setCategories] = useState<ICategories>([{ _id: "", name: "", icon: "" },]);

  const { CreateProduct, ChangeProduct } = useProduct();
  const { ShowCategories } = useCategory();

  const getCategories = async () => {
    const allCategories = await ShowCategories();
    allCategories && setCategories(allCategories);
  };
  
  useEffect(() => {
    getCategories();
  }, []);

  const handleImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = event.target;

    if (type === "file" && event.target instanceof HTMLInputElement) {
      const file = event.target.files?.[0];

      if (file) {
        setProductImage(file);
      }
    }
  };

  const handleIngredientChange = ( index: number, field: string, value: string ) => {
    const updatedIngredients = [...ingredients];
    (updatedIngredients[index] as any)[field] = value;
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { icon: "", name: "" }]);
  };

  const handleDeleteIngredient = (index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(product) {
      const changeItem: ISingleChangeProduct = {
        _id: product._id,
        name: productName,
        description: productDescription,
        image: productImage,
        price: productPrice,
        categoryId: productCategory as string,
        ingredients: ingredients,
      }
      await ChangeProduct(changeItem)
      setIsClosed(true);
      useRequestProducts()
    } else {
      if (!productName || !productImage || !productPrice || !productCategory) {
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
        category: productCategory as string,
        ingredients: ingredients,
      });
  
      if (lastProductCreated) {
        onProductSubmit(lastProductCreated);
        useRequestProducts()
        setIsClosed(true);
      }
  
      (event.target as HTMLFormElement).reset();
      setProductName("");
      setProductDescription("");
      setProductImage(undefined);
      setProductPrice(0);
      setProductCategory("");
      setIngredients([{ icon: "", name: "" }]);
    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="flex flex-col items-center justify-center gap-2 p-2 rounded-md bg-base-300 shadow-lg">
      <h1 className="text-lg font-semibold">{product ? "Editar Produto" : "Criar Produto"}</h1>
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
              className="input input-bordered w-full max-w-xs"/>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Preço</span>
            </div>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(parseFloat(e.target.value))}
              placeholder="Ex.: 30,50"
              className="input input-bordered w-full max-w-xs"/>
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
            className="input input-bordered w-full max-w-xs"/>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Imagem do produto</span>
          </div>
          <input
            type="file"
            onChange={handleImageInputChange}
            className="file-input file-input-xs file-input-bordered w-full max-w-xs"
            required={!product}/>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Categoria</span>
          </div>
          <select
            value={productCategory as string}
            onChange={(e) => setProductCategory(e.target.value)}
            className="select select-bordered w-full max-w-xs">
            <option disabled value="">
              Escolha uma categoria
            </option>
            {categories &&
              categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.icon}
                  {category.name}
                </option>
              ))}
          </select>
        </label>
        <h1 className="text-base font-semibold">Ingredientes</h1>
        <p className="flex items-center justify-center">Tecle<kbd className="kbd"><img src={Wind} alt="" /></kbd> + <kbd className="kbd">.</kbd> Para adicionar um ícone.</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full gap-2 items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
            {ingredients.map((ingredient, index) => (
              <div
                className="flex items-end justify-center max-lg:items-center max-md:items-end max-sm:items-center"
                key={index}>
                <div className="flex w-full gap-2 items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Ícone</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Ex.: 🧀"
                      value={ingredient.icon}
                      onChange={(e) => handleIngredientChange(index, "icon", e.target.value)}
                      className="input input-bordered w-full max-w-xs"/>
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Nome</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Ex.: Queijo"
                      value={ingredient.name}
                      onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                      className="input input-bordered w-full max-w-xs"/>
                  </label>
                </div>
                <div
                  onClick={() => handleDeleteIngredient(index)}
                  className="flex items-center justify-center p-3 cursor-pointer">
                  <img className="w-6 h-6" src={Trash} alt="" />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddIngredient}
            className="btn btn-outline btn-neutral">
            Mais Ingredientes
            <img src={Plus} alt="" />
          </button>
        </div>
      </div>
      <button type="submit" className="btn w-full btn-neutral">
        {product ? "Editar" : "Criar"}
      </button>
    </form>
  );
}
