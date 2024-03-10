import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ISingleProduct, OrderItem } from "../interfaces/IOrders";

interface ICartContext {
  addOrder: (product: ISingleProduct) => void
  removeOrder: (id: string) => void
  incrementItem: (id: string) => void
  decrementItem: (id: string) => void
  clearAll: () => void
  cartItem: OrderItem[]
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItem, setCartItem] = useState<OrderItem[]>(()=>{
    const persistedOrders = localStorage.getItem("order")
    return persistedOrders ? JSON.parse(persistedOrders) : []
  });

  const addOrder = (product: ISingleProduct) => {
   
    setCartItem((prevOrders) => {
      const index = prevOrders.findIndex((order) => order._id === product._id);
      if (index === -1) {
        const newOrder: OrderItem = {
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
    setCartItem((prevOrders) => {
      return prevOrders.filter(order => order._id !== id)
    })
  }

  const incrementItem = (id: string) => {
    setCartItem((prevOrders) => {
      const index = prevOrders.findIndex((order) => order._id === id);
      if (index !== -1) {
        prevOrders[index].quantity += 1;
      }
      return [...prevOrders];
    });
  }

  const decrementItem = (id: string) => {
    setCartItem((prevOrders) => {
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
    setCartItem([])
  }

  useEffect(()=>{
    localStorage.setItem("order", JSON.stringify(cartItem));
  },[cartItem])

  return <CartContext.Provider value={{cartItem, addOrder, removeOrder, incrementItem, decrementItem, clearAll}}>
    {children}
    </CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
