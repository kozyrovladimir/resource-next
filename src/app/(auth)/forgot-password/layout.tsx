import React, {PropsWithChildren} from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "YOQI On-Demand Videos - Forgot Password | YOQI",
  description: "Forgot your password? No worries! Reset your password with YOQI On-Demand Videos.",
  openGraph: {
    title: "YOQI On-Demand Videos - Forgot Password | YOQI",
    description: "Forgot your password? No worries! Reset your password with YOQI On-Demand Videos.",
  },
};

const ForgotPasswordLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

export default ForgotPasswordLayout;
