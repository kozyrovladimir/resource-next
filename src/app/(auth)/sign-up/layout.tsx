import React, {PropsWithChildren} from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "YOQI On-Demand Videos - Sign Up | Yoqi",
  description: "Sign up for YOQI On-Demand Videos to access a wide range of on-demand videos on Qigong, Yoga, and Meditation. Enhance your practice and well-being with expert instructors.",
  openGraph: {
    title: "YOQI On-Demand Videos - Sign Up | Yoqi",
    description: "Sign up for YOQI On-Demand Videos to access a wide range of on-demand videos on Qigong, Yoga, and Meditation. Enhance your practice and well-being with expert instructors.",
  },
};

const SignUpLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

export default SignUpLayout;
