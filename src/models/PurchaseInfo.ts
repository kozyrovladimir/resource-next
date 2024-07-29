import {ProductType} from "./PaymentDetails";


export enum PaymentType {
  setup = 'setup',
  payment = 'payment',
  free = 'free',
}

export type PurchaseInfo = {
  payment_info: {
    id: string;
    type: PaymentType;
  },
  product_code: ProductType;
  discount_code: string;
}
