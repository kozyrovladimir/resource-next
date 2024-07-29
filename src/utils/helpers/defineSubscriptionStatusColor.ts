import {statusType} from "../../models/SubscriptionStatus";

export const defineSubscriptionStatusColor = (status: statusType | undefined) => {
  switch (status) {
    case "new":
      return 'gray';
    case 'active':
      return 'green';
    case 'suspended':
      return '#ffbf00';
    case 'cancelled':
      return 'red';
    case 'scheduled_to_cancel':
      return '#ffbf00';
    default:
      return 'gray';
  }
}
