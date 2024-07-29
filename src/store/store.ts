import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import paymentHistoryReducer from './reducers/payment-history.slice';
import stripePaymentDetailsReducer from './reducers/stripe-payment-details.slice';
import subscriptionStatusReducer from './reducers/subscription-status.slice';
import userDataReducer from './reducers/user-data.slice';
import userState from './reducers/user-reducer.slice';
import videoDetailAPIReducer from './reducers/video-details-api-reducer';
import videoListAPIReducer from './reducers/video-list-api.slice';
import favoriteVideoListReducer from './reducers/favorite-video-list.slice';
import discount from './reducers/discount.slice';
import successPaymentReducer from './reducers/success-payment.slice';
import purchaseHistoryReducer from "./reducers/purchase_history.slice";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
  videoListAPI: videoListAPIReducer,
  favoriteVideos: favoriteVideoListReducer,
  videoDetailsAPI: videoDetailAPIReducer,
  subscriptionStatus: subscriptionStatusReducer,
  stripePaymentDetails: stripePaymentDetailsReducer,
  userData: userDataReducer,
  userState,
  paymentHistory: paymentHistoryReducer,
  purchaseHistory: purchaseHistoryReducer,
  discount,
  successPayment: successPaymentReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

// непосредственно создаём store
// export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
