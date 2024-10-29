import React, {PropsWithChildren} from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "YOQI On-Demand Videos - Success Payment | YOQI",
  description: "Thank you for your payment.",
  openGraph: {
    title: "YOQI On-Demand Videos - Success Payment | YOQI",
    description: "Thank you for your payment.",
  },
};

const SuccessPaymentLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

export default SuccessPaymentLayout;
