import React, {PropsWithChildren} from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "YOQI On-Demand Videos - Subscription Plans | YOQI",
  description: "Choose a subscription plan that works for you and access a wide range of on-demand videos on Qigong, Yoga, and Meditation. Enhance your practice and well-being with expert instructors.",
  openGraph: {
    title: "YOQI On-Demand Videos - Subscription Plans | YOQI",
    description: "Choose a subscription plan that works for you and access a wide range of on-demand videos on Qigong, Yoga, and Meditation. Enhance your practice and well-being with expert instructors.",
  },
};

const SubscriptionPlansLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

export default SubscriptionPlansLayout;
