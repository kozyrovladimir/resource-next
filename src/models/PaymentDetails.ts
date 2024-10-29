import {Products} from "@/shared";

export type ProductType = typeof Products.month | typeof Products.month6 | typeof Products.year;

export interface IStripePaymentDetails {
  pk: string;
  clientSecret: string;
  subscriptionId: string;
}

export interface IPaypalPaymentDetails {
  userId: string;
  planID: string;
}
