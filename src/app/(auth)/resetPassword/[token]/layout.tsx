import React, {PropsWithChildren} from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "YOQI On-Demand Videos - Reset Password | YOQI",
  description: "Reset your password with YOQI On-Demand Videos.",
  openGraph: {
    title: "YOQI On-Demand Videos - Reset Password | YOQI",
    description: "Reset your password with YOQI On-Demand Videos.",
  },
};

const ResetPasswordLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

export default ResetPasswordLayout;
