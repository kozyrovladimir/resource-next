// import React, { useEffect } from 'react';
//
// import { Box } from '@mui/material';
// import {
//   PayPalScriptProvider,
//   PayPalButtons,
//   usePayPalScriptReducer,
// } from '@paypal/react-paypal-js';
// import { ErrorBoundary } from 'react-error-boundary';
//
// import Loader from 'components/Loader/Loader';
//
// import { useDispatch, useSelector } from 'react-redux';
//
// import PageContentError from 'components/PageContentError/PageContentError';
//
// import { useNavigate } from 'react-router-dom';
//
// import { RouterPaths } from 'constants/routerPaths';
// import { fetchPaypalPaymentDetails } from 'store/actionCreators/fetchPaypalPaymentDetails';
// import { PaypalPaymentDetailsAPII } from 'store/reducers/paypal-payment-details.slice';
//
// import { PaymentPeriodT } from '../OrderSubscription';
//
// import { AppDispatch, AppRootStateType } from 'store/store';
//
// // my sandbox credentials
// const SUBSCRIPTION_PLAN_ID = 'P-4RA4255987908835AMQFTXGI';
// const CLIENT_ID =
//   'AZWDJkGC9dDJQwuEADDm7E4xFlDCvg3R2JoQTBfGIsAGdKOwLqs4x1nJnVWQ570Gn9oMhwrDk0-0Mt30';
//
// // Pavel's sandbox credentials
// // const SUBSCRIPTION_PLAN_ID = 'P-6XA64347KB382912RMRKNR4A';
// // const CLIENT_ID =
// //   'ARmR3MAdD2Y7EvPsTOIAIDoOcn4swRnEKI-vRbeFG8FgwY0V1tMyp1kIzYjjkj7SVQO3t-QXJWyuMzSm';
//
// interface ButtonWrapperProps {
//   type: string;
//   subscriptionPlanId: string;
// }
//
// const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ type, subscriptionPlanId }) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [{ options }, dispatch] = usePayPalScriptReducer();
//   const navigate = useNavigate();
//
//   useEffect(() => {
//     dispatch({
//       type: 'resetOptions',
//       value: {
//         ...options,
//         'client-id': CLIENT_ID,
//         intent: 'subscription',
//       },
//     });
//   }, [type]);
//
//   const onCancel = (): void => {
//     console.log('cancel subscription');
//   };
//
//   const onApprove = (details: any, data: any): void => {
//     console.log('subscription is success');
//     console.log('details: ', details);
//     console.log('data: ', data);
//     navigate(RouterPaths.paymentIntentSuccess, { replace: true });
//   };
//
//   const createSubscription = (data: any, actions: any): any => {
//     return actions.subscription
//       .create({
//         plan_id: SUBSCRIPTION_PLAN_ID,
//         custom_id: 'vovan9680@gmail.com',
//       })
//       .then((orderId: any) => {
//         // Your code here after create the order
//         return orderId;
//       });
//   };
//
//   const buttonProps: any = {
//     onCancel,
//     onApprove,
//     createSubscription,
//     style: {
//       label: 'subscribe',
//     },
//   };
//
//   return <PayPalButtons {...buttonProps} />;
// };
//
// interface IPaypalSubscription {
//   period: PaymentPeriodT;
// }
// const PaypalSubscription: React.FC<IPaypalSubscription> = ({ period }) => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { paypalPaymentDetails, isLoading, error } = useSelector<
//     AppRootStateType,
//     PaypalPaymentDetailsAPII
//   >(state => state.paypalPaymentDetails);
//
//   useEffect(() => {
//     void dispatch(fetchPaypalPaymentDetails(period));
//   }, [period]);
//
//   if (isLoading) {
//     return (
//       <Box
//         display={'flex'}
//         sx={{ minHeight: '300px' }}
//         justifyContent={'center'}
//         alignItems={'center'}
//       >
//         <Loader />
//       </Box>
//     );
//   }
//
//   if (error !== undefined) {
//     return <PageContentError>{error}</PageContentError>;
//   }
//
//   return (
//     <ErrorBoundary fallback={<PageContentError>Something went wrong</PageContentError>}>
//       <PayPalScriptProvider
//         options={{
//           'client-id': paypalPaymentDetails.userId,
//           components: 'buttons',
//           intent: 'subscription',
//           'disable-funding': 'card',
//           vault: true,
//         }}
//       >
//         <ButtonWrapper
//           type="subscription"
//           subscriptionPlanId={paypalPaymentDetails.planID}
//         />
//       </PayPalScriptProvider>
//     </ErrorBoundary>
//   );
// };
//
// export default PaypalSubscription;
 export default null;
