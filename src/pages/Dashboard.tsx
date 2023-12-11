import { Category } from "../components/Category";
import { Header } from "../components/Header";

export function Dashboard() {
  return (
    <div className="bg-base-100 w-full h-full">
      <Header />
      <div className="flex w-full h-auto pt-5 items-center justify-center">
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1">
          <Category category="⏱ Fila de espera" table="Mesa 2" itens="5 Itens" quantity={1} />
          <Category category="⏱ Fila de espera" table="Mesa 2" itens="5 Itens" quantity={1} />
          <Category category="⏱ Fila de espera" table="Mesa 2" itens="5 Itens" quantity={1} />
        </div>
      </div>
    </div>
  );
}
