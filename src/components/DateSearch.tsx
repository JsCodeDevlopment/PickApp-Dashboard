import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderContext } from "../context/OrderContext";

const saveDateSchema = z.object({
    initialDate: z.string(),
    finalDate: z.string(),
}).refine(data => new Date(data.initialDate) <= new Date(data.finalDate), {
    message: "A data inicial não pode ser maior que a data final.",
    path: ['initialDate'],
});

type saveDateSchema = z.infer<typeof saveDateSchema>;

export function DataSearch() {
  const { RequestOrdersReport } = useOrderContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<saveDateSchema>({
    resolver: zodResolver(saveDateSchema),
    defaultValues: {
      initialDate: "",
      finalDate: "",
    },
  });

  const handleSave = async (data: saveDateSchema) => {
    await RequestOrdersReport(data.initialDate, data.finalDate);
  };
  return (
    <form
      method="submit"
      onSubmit={handleSubmit(handleSave)}
      className="flex flex-col gap-2 max-lg:w-full"
    >
      <div className="flex w-full gap-2">
        <div className="flex flex-col flex-1 gap-2">
          <label>Data Inicial:</label>
          <input
            type="date"
            {...register("initialDate")}
            required
            className={`input input-bordered ${
              errors.initialDate && "input-error"
            }`}
          />
          {errors.initialDate && (
            <span className="text-error">{errors.initialDate.message}</span>
          )}
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label>Data Final:</label>
          <input
            type="date"
            {...register("finalDate")}
            required
            className={`input input-bordered ${
              errors.finalDate && "input-error"
            }`}
          />
          {errors.finalDate && (
            <span className="text-error">{errors.finalDate.message}</span>
          )}
        </div>
      </div>
      <button className="btn btn-primary">Pesquisar</button>
    </form>
  );
}
