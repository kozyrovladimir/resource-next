import React, {PropsWithChildren} from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "YOQI University - User Account",
  description: "User Account. Explore your account settings and preferences.",
  openGraph: {
    title: " YOQI University - User Account",
    description: "User Account. Explore your account settings and preferences.",
  },
};

const PrivacyPolicyLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

export default PrivacyPolicyLayout;
