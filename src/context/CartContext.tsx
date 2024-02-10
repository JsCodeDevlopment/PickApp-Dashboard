import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ISingleProduct } from "../interfaces/IOrders";
import { Order } from "../pages/NewOrder";

interface ICartContext {
  addOrder: (product: ISingleProduct) => void
  removeOrder: (id: string) => void
  incrementItem: (id: string) => void
  decrementItem: (id: string) => void
  clearAll: () => void
  orders: Order[]
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(()=>{
    const persistedOrders = localStorage.getItem("order")
    return persistedOrders ? JSON.parse(persistedOrders) : []
  });

  const addOrder = (product: ISingleProduct) => {
   
    setOrders((prevOrders) => {
      const index = prevOrders.findIndex((order) => order._id === product._id);
      if (index === -1) {
        const newOrder: Order = {
          _id: product._id,
          name: product.name,
          price: product.price,
          icon: product.imagePath,
          quantity: 1,
        };
        return [...prevOrders, newOrder];
      } else {
        prevOrders[index].quantity += 1;
        return [...prevOrders];
      }
    });
  };

  const removeOrder = (id: string) => {
    setOrders((prevOrders) => {
      return prevOrders.filter(order => order._id !== id)
    })
  }

  const incrementItem = (id: string) => {
    setOrders((prevOrders) => {
      const index = prevOrders.findIndex((order) => order._id === id);
      if (index !== -1) {
        prevOrders[index].quantity += 1;
      }
      return [...prevOrders];
    });
  }

  const decrementItem = (id: string) => {
    setOrders((prevOrders) => {
      const index = prevOrders.findIndex((order) => order._id === id);
      if (index !== -1) {
        prevOrders[index].quantity -= 1
        if (prevOrders[index].quantity <= 0) {
          return prevOrders.filter(order => order._id !== id)
        }
      }
      return [...prevOrders];
    });
  }

  const clearAll = () => {
    setOrders([])
  }

  useEffect(()=>{
    localStorage.setItem("order", JSON.stringify(orders));
  },[orders])

  return <CartContext.Provider value={{orders, addOrder, removeOrder, incrementItem, decrementItem, clearAll}}>
    {children}
    </CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
