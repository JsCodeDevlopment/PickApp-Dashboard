import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTable } from "../../servises/api/TableRequest";
import { Dispatch, SetStateAction } from "react";

const tableSchema = z.object({
  name: z
    .string()
    .min(1, "Esse campo deve ter no mínimo 1 caracteres")
    .transform((val) => parseInt(val))
    .transform((val) => (val < 10 ? `0${val}` : `${val}`)),
});

type saveTableSchema = z.infer<typeof tableSchema>;

interface ITableFormProps {
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  getTables: () => Promise<void>;
}

export function TableForm({ getTables, setIsClosed }: ITableFormProps) {
  const { CreateTable } = useTable();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<saveTableSchema>({
    resolver: zodResolver(tableSchema),
  });

  const handleSave = async (data: saveTableSchema) => {
    data && (await CreateTable(data.name));
    getTables && getTables();
    setIsClosed(true);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-2 items-center"
      onSubmit={handleSubmit(handleSave)}>
      <label className="form-control w-full max-w-xs">
        <div className="label w-full">
          <span className="label-text">Número da mesa</span>
        </div>
        <input
          type="number"
          {...register("name")}
          placeholder="Ex.: 1"
          className={`input input-bordered w-full max-w-xs max-lg:w-full max-md:w-2/3 max-sm:w-full ${
            errors.name && "input-error"
          }`}/>
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <button type="submit" className="btn w-80 btn-neutral">
        Adicionar
      </button>
    </form>
  );
}
