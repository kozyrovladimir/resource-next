import type {Metadata} from "next";
import styles from "./layout.module.scss";
import React from "react";
import '@/shared/styles/index.scss';
import Providers from "@/components/Providers/Providers";
import InitLogic from "@/components/InitLogic/InitLogic";
import { GoogleTagManager } from '@next/third-parties/google';
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import {Header} from "@/widgets/heder";
import NextTopLoader from 'nextjs-toploader';
import {Footer} from "@/widgets/footer";


export const metadata: Metadata = {
  title: "YOQI University - Qigong, Neidan, Daoist Yoga, and Meditation Training | YOQI",
  description: "Enroll in YOQI University for comprehensive training programs in Qigong, Neidan, Daoist Yoga, and Meditation. Learn from expert instructors and deepen your practice for health, balance, and spiritual insight.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM as string} />
    <body>
    <Providers>
      <InitLogic/>
      <div className={styles.containerWrapper}>
        <NextTopLoader
          color={'#FFD700'}
          showSpinner={false}
        />
        <Header/>
        <main className={styles.contentWrapper}>
          {children}
        </main>
        <CookieConsent/>
        <Footer/>
      </div>
    </Providers>
    </body>
    </html>
  );
}
