import {Products} from "../constants/Products";

export type ProductType = typeof Products.module1;

export interface IStripePaymentDetails {
  pk: string;
  clientSecret: string;
  subscriptionId: string;
}

export interface IPaypalPaymentDetails {
  userId: string;
  planID: string;
}
