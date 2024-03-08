import { Dispatch, SetStateAction } from "react";
import { useCategory } from "../../servises/api/CategoryRequest";
import { ISingleCategory } from "../../interfaces/IOrders";
import Wind from "../../assets/images/WindowsLogo.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ISaveCategoryFormProps {
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  category?: ISingleCategory;
  getCategories: () => Promise<void>;
}

const saveCategorySchema = z.object({
  _id: z.string().optional(),
  icon: z.string(),
  name: z.string().min(4, "Insira no mínimo 4 caracteres."),
});

type saveCategorySchema = z.infer<typeof saveCategorySchema>;

export function SaveCategoryForm({ setIsClosed, category, getCategories }: ISaveCategoryFormProps) {
  const { CreateCategory, ChangeCategory } = useCategory();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<saveCategorySchema>({
    resolver: zodResolver(saveCategorySchema),
    defaultValues: {
      icon: category?.icon ?? "",
      name: category?.name ?? "",
    },
  });

  const handleSave = async (data: saveCategorySchema) => {
    if (category) {
      const changeCategory = {
        id: category._id,
        icon: data.icon,
        name: data.name,
      };
      await ChangeCategory(changeCategory);
      getCategories();
      reset()
    } else {
      if (data.icon === "" || data.name === "") {
        return;
      }
      await CreateCategory(data.icon, data.name);
      getCategories();
      reset()
    }
    setIsClosed(true);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-md bg-base-300 shadow-lg">
      <h1 className="text-lg font-semibold text-base-content">
        {category ? `Editar Categoria ${category.name}` : "Criar Categoria"}
      </h1>
      <p className="flex items-center justify-center text-base-content">
        Tecle
        <kbd className="kbd">
          <img src={Wind} alt="" />
        </kbd>{" "}
        + <kbd className="kbd">.</kbd> Para adicionar um ícone.
      </p>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleSave)}>
        <div className="flex w-full items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ícone da categoria</span>
            </div>
            <input
              {...register("icon")}
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
              {...register("name")}
              placeholder="Ex.: Refrigerantes"
              className={`input input-bordered w-full max-w-xs ${errors.name && "input-error"}`}/>
            {errors.name && <span>{errors.name.message}</span>}
          </label>
        </div>
        <button type="submit" className="btn w-full btn-neutral">
          Salvar
        </button>
      </form>
    </div>
  );
}
