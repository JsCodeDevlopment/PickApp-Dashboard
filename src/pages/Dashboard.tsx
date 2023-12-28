import { Category } from "../components/Category";
import { Header } from "../components/Header";
import { OrderPopUp } from "../components/OrderPopUp";
import { MockOrders } from "../data/MockOrders";

export function Dashboard() {
  const { Orders } = MockOrders();

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full h-screen py-10 items-start justify-center">
        <div className="grid grid-cols-4 mb-5 gap-10 max-lg:grid-cols-1">
          <Category name="⏱ Fila de Espera" quantity={Orders.length}>
            {Orders.map((orders) => (
              <OrderPopUp
                key={orders._id}
                table={orders.table}
                itens={orders.products.length}
              />
            ))}
          </Category>
          <Category name="👨‍🍳 Em produção" quantity={Orders.length}></Category>
          <Category name="✔ Pronto!" quantity={Orders.length}></Category>
          <Category name="❌ Cancelados" quantity={Orders.length}></Category>
        </div>
      </div>
    </div>
  );
}
