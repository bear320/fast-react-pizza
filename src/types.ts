export interface IPizza {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

export interface IOrder {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: IPizza[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
}

export interface IItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface IUser {
  username: string;
  status: "idle" | "loading" | "error";
  position: IPosition | null;
  address: string;
  error: string;
}

export interface ICart {
  cart: IItem[];
}

export interface IPosition {
  latitude: number;
  longitude: number;
}
