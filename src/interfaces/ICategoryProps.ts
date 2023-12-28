import { ReactNode } from "react";

export interface ICategoryProps {
  name: string
  quantity: number
  children?: ReactNode
}