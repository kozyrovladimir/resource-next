

export type statusType = 'new' | 'active' | 'suspended' | 'cancelled' | 'scheduled_to_cancel';
export type gatewayType = 'stripe' | 'paypal';

export interface SubscriptionStatus {
  status: statusType;
  next_payment: string;
  autorecurring: boolean;
  id?: number;
  type?: string;
  gateway?: gatewayType;
  external_id?: string;
  date_start?: string;
  date_end?: string;
  user_id?: number;
}
