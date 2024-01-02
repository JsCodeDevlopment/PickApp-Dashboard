import { useEffect, useState } from "react";
import { baseURL } from "./BaseURL";

export function useRequestProducts() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const Orders = async () => {
      try {
        const response = await fetch(`${baseURL}/orders`);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    Orders();
  }, []);

  return { orders };
}
