import { Category } from "../components/Category";
import { Header } from "../components/Header";

export function Dashboard() {
  return (
    <div className="bg-base-100 w-full h-screen overflow-scroll overflow-x-hidden">
      <Header />
      <div className="flex w-full h-screen py-10 items-start justify-center">
        <div className="grid grid-cols-3 mb-5 gap-10 max-lg:grid-cols-1">
          <Category category="⏱ Fila de espera" table="Mesa 2" itens="5 Itens" quantity={1} />
          <Category category="⏱ Fila de espera" table="Mesa 2" itens="5 Itens" quantity={1} />
          <Category category="⏱ Fila de espera" table="Mesa 2" itens="5 Itens" quantity={1} />
        </div>
      </div>
    </div>
  );
}
