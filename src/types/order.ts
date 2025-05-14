import { IUser } from "./customer";

export type ShippingStatus = "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export interface IProductItem {
  _id: string;
  productId: string;
  quantity: number;
}

export interface IOrderDB {
  _id: string;
  products: IProductItem[];
  user: IUser;
  totalPrice: number;
  shippingStatus: ShippingStatus;
  paymentStatus: "PAID" | "UNPAID" | "REFUNDED" | string;
  transactionId: string;
  isDeleted: boolean;
  city: string;
  shippingAddress: string;
}
