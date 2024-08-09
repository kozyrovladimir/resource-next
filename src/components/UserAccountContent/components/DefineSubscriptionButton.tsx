import React from 'react';
import {gatewayType, statusType} from "@/models/SubscriptionStatus";
import {useCancelSubscription} from "@/utils/hooks/useCancelSubscription";
import Typography from "@mui/material/Typography";
import {useDialog} from "@/utils/hooks/useDialog";
import {UserDialog} from "@/shared";
import {Stack} from "@mui/material";
import {Button} from "@/shared";
import {useRouter} from "next/navigation";

interface DefineSubscriptionWrapperProps {
  subscriptionStatus?: statusType;
  gateway?: gatewayType;
}

const DefineSubscriptionButton: React.FC<DefineSubscriptionWrapperProps> = ({subscriptionStatus, gateway}) => {

  const {isOpen, handleOpen, handleClose} = useDialog();

  const router = useRouter();
  const navigateToSubscriptionPlansPage = (): void => {
    router.push('/subscription');
  };

  const navigateToPaypalInstruction = (): void => {
    window.open('https://www.yoqi.com/cancel-paypal-subscription');
  };

  const { cancelSubscription, cancelingError, pending } = useCancelSubscription();

  const cancelSubscriptionHandler = () => {
    void cancelSubscription();
    handleClose();
  }

  if (!subscriptionStatus) {
    return <></>;
  }

  if ((subscriptionStatus === 'active' && gateway === 'stripe') || (subscriptionStatus === 'suspended' && gateway === 'stripe')) {

    return (
      <>
        {/*dialog*/}
        <UserDialog
          title={'Cancel Subscription'}
          text={'Do you want to cancel your subscription?'}
          open={isOpen}
          onClose={handleClose}
        >
          <Stack direction={{xs: 'column' ,sm: 'row'}} spacing={{xs: '12px' ,sm: '22px'}} justifyContent={'center'}>
            <Button variant={'primary'} fullWidth={true} onClick={cancelSubscriptionHandler}>
              YES
            </Button>
            <Button variant={'outlined'} fullWidth={true} onClick={handleClose}>
              NO
            </Button>
          </Stack>
        </UserDialog>
        {/*main content*/}
        {cancelingError && <Typography
          sx={{ fontWeight: '400', pb: '20px', color: 'red' }}
        >
          {cancelingError}
        </Typography>}
        <Button
          style={{maxWidth: '400px'}}
          variant={'outlined'}
          onClick={handleOpen}
          fullWidth={true}
        >
          {pending ? 'Processing...' : 'Cancel Subscription'}
        </Button>
      </>
    )
  }

  if ((subscriptionStatus === 'active' && gateway === 'paypal') || (subscriptionStatus === 'suspended' && gateway === 'paypal')) {
    return (
      <>
        {/*dialog*/}
        <UserDialog
          title={'Cancel Subscription'}
          text={'Do you want to cancel your subscription?'}
          open={isOpen}
          onClose={handleClose}
        >
          <Stack direction={{xs: 'column' ,sm: 'row'}} spacing={{xs: '12px' ,sm: '22px'}} justifyContent={'center'}>
            <Button variant={'primary'} fullWidth={true} onClick={navigateToPaypalInstruction}>
              YES
            </Button>
            <Button variant={'outlined'} fullWidth={true} onClick={handleClose}>
              NO
            </Button>
          </Stack>
        </UserDialog>
        {/*main content*/}
        <Button
          style={{maxWidth: '400px'}}
          variant={'outlined'}
          onClick={handleOpen}
          fullWidth={true}
        >
          Cancel Subscription
        </Button>
      </>
    )
  }

  if (subscriptionStatus === 'cancelled' || subscriptionStatus === 'new') {
    return (
      <Button
        style={{maxWidth: '400px'}}
        variant={'primary'}
        onClick={navigateToSubscriptionPlansPage}
        fullWidth={true}
      >
        Subscribe
      </Button>
    )
  }

  if (subscriptionStatus === 'scheduled_to_cancel') {
    return (
      <>
      </>
    );
  }

  return <></>;
};

export default DefineSubscriptionButton;
