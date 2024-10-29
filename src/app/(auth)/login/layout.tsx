import React, {PropsWithChildren} from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "YOQI On-Demand Videos - Log In | YOQI",
  description: "Log in to your YOQI On-Demand Videos account to access a wide range of on-demand videos on Qigong, Yoga, and Meditation. Enhance your practice and well-being with expert instructors.",
  openGraph: {
    title: "YOQI On-Demand Videos - Log In | YOQI",
    description: "Log in to your YOQI On-Demand Videos account to access a wide range of on-demand videos on Qigong, Yoga, and Meditation. Enhance your practice and well-being with expert instructors.",
  },
};

const LoginLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

export default LoginLayout;
