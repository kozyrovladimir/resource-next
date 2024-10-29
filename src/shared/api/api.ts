import axios, {type AxiosResponse} from 'axios';
import {StripePaymentInfoI} from "@/models/StripePaymentInfo";
import {SubscriptionStatus} from "@/models/SubscriptionStatus";
import {VideoDetailsI, VideoListItemI} from "@/shared/models";
import {DiscountInfoI} from "@/store/reducers/discount.slice";
import {NewStripeSubscrResI} from "@/models/NewStripeSubscription";
import {PurchaseInfo} from "@/models/PurchaseInfo";
import {PurchaseHistoryItem} from "@/models/PurchaseHistory";

const projectID = 3; // This is the project ID for UNIVERSITY
const baseURL = process.env.API_PATH;

const instance = axios.create({
  // baseURL: 'https://videos.yoqi-test.com/api/',
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Cache-Control': 'max-age=3600',
  }
});

export const getVideos = async (): Promise<AxiosResponse<VideoListItemI[]>> => {
  console.log('getVideos');
  return await instance.get<VideoListItemI[]>('movements');
};

export const getVideo = async (
  videoID: string,
): Promise<AxiosResponse<VideoDetailsI>> => {
  return await instance.get<any>(`movements/${videoID}`);
};

export const getVideoServerSide = async (videoID: string): Promise<VideoDetailsI> => {
  const response = await fetch(`${baseURL}/movements/${videoID}`);
  const data = await response.json();
  return data;
};

export const login = async (
  email: string,
  password: string,
): Promise<AxiosResponse<void>> => {
  return await instance.post('login', {email, password});
};

export const logout = async (): Promise<AxiosResponse<void>> => {
  return await instance.post('logout');
}

export const signUp = async (
  email: string,
  name: string,
  password: string,
): Promise<AxiosResponse<void>> => {
  return await instance.post('signUp', {email, name, password});
};

export const getUserAccess = async (): Promise<AxiosResponse<{ access: boolean }>> => {
  return await instance.get<{ access: boolean }>('courses/1/user_access');
}

export const forgotPassword = async (
  email: string,
): Promise<AxiosResponse<void>> => {
  return await instance.post('forgot-password', {email});
}

export const resetPassword = async (
  password: string,
  token: string,
): Promise<AxiosResponse<void>> => {
  return await instance.post('update-password', {password, token});
}
export const getUserData = async (): Promise<AxiosResponse<any>> => {
  return await instance.get<any>('user');
};

export const changeUserName = async (newName: string): Promise<AxiosResponse<void>> => {
  return await instance.post('new-name', {name: newName});
};

export const changeUserPassword = async (
  oldPassword: string,
  newPassword: string,
): Promise<AxiosResponse<void>> => {
  return await instance.post('new-password', {
    old_password: oldPassword,
    new_password: newPassword,
  });
};

export const changeMusicOption = async (
  withMusic: boolean,
): Promise<AxiosResponse<void>> => {
  return await instance.post('set-music-option', {with_music: withMusic});
}

export const addDiscount = async (
  discount_code: string,
): Promise<AxiosResponse<DiscountInfoI>> => {
  return await instance.post<DiscountInfoI>('apply_discount', {
    discount_code,
    type: 'course',
    course_id: '1',
  });
};

export const requestStripePaymentDetailsForTeacherTrainingCourse = async (): Promise<AxiosResponse<StripePaymentInfoI>> => {
  return await instance.post<StripePaymentInfoI>('request_stripe_payment_info');
};

export const newStripeCoursePurchase = async (payment_method_id: string): Promise<AxiosResponse<NewStripeSubscrResI>> => {
  return await instance.post<NewStripeSubscrResI>('courses/new_stripe_course_purchase', {
    course_id: '1',
    payment_method_id,
  });
};

export const requestPaypalPaymentDetails = async (
  plan: any,
): Promise<AxiosResponse<any>> => {
  return await instance.post<any>('request_paypal_payment_info', {
    plan,
  });
};

export const userSubscribed = async (): Promise<AxiosResponse<any>> => {
  return await instance.post<any>('user_subscribed');
}

export const successTeacherTrainingCoursePayment = async (): Promise<AxiosResponse<any>> => {
  return await instance.post<any>('courses/1/purchased');
}

export const getPaymentHistory = async (): Promise<
  AxiosResponse<any[]>
> => {
  return await instance.get<any[]>('payment_data');
};

export const getPurchaseHistory = async (): Promise<AxiosResponse<PurchaseHistoryItem[]>> => {
  return await instance.get<PurchaseHistoryItem[]>('purchases_data');
}

export const getSubscriptionStatus = async (): Promise<
  AxiosResponse<SubscriptionStatus>
> => {
  return await instance.get<SubscriptionStatus>('subscription_data');
};

export const cancelSubscription = async (): Promise<AxiosResponse<void>> => {
  return await instance.post('cancel_subscription');
};

export const preparePurchase = async (
  payment_required: boolean = true,
  product_code: string,
  payment_method_id: string,
  discount_applied: boolean = false,
  discount_code?: string,
  new_user: boolean = false,
  name?: string,
  email?: string,
  password?: string,
): Promise<AxiosResponse<NewStripeSubscrResI>> => {
  return await instance.post<NewStripeSubscrResI>('prepare_purchase', {
    payment_required,
    product_code,
    payment_method_id,
    discount_applied,
    discount_code,
    new_user,
    name,
    email,
    password,
  });
}

export const newPurchase = async (purchaseInfo: PurchaseInfo): Promise<AxiosResponse<any>> => {
  return await instance.post<any>('new_purchase', {
    product_code: purchaseInfo.product_code,
    discount_code: purchaseInfo.discount_code,
    payment_info: purchaseInfo.payment_info,
  });
}

export const applyDiscount = async (
  discount_code: string,
  product_code: string,
): Promise<AxiosResponse<DiscountInfoI>> => {
  return await instance.post<DiscountInfoI>('apply_discount', {
    discount_code,
    product_code
  });
};

export const subscribeHere = async (name: string, email: string): Promise<AxiosResponse<{message: string}>> => {
  return await instance.post('subscribe_to_newsletter',
    {
      name: name,
      email: email,
    }
  );
}

export const addFavorite = async (videoID: number): Promise<AxiosResponse<void>> => {
  return await instance.post(`addFavourite`, {
    id: videoID,
    project_id: projectID,
  });
};

export const deleteFavorite = async (videoID: number): Promise<AxiosResponse<void>> => {
  return await instance.post(`deleteFavourite`, {
    id: videoID,
    project_id: projectID,
  });
};

export const getFavourites = async (): Promise<AxiosResponse<VideoListItemI[]>> => {
  return await instance.get<any[]>('videos/favourites');
};
