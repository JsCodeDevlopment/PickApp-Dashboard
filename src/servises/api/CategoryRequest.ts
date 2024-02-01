import { ICategories } from "../../pages/NewItems";
import { baseURL } from "../BackEndBaseURL";

export function useCategory() {
  const ShowCategories = async (): Promise<ICategories | undefined> => {
    try {
      const response = await fetch(`${baseURL}/categories`, {
        method: "GET",
      });
      const data: ICategories = await response.json()

      return data
    } catch (error) {
      console.error(error, "Erro ao buscar categortias.");
    }
  };

  return { ShowCategories };
}
