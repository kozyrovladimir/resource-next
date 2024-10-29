import dynamic from "next/dynamic";

const DynamicSuccessPaymentPageContent = dynamic(() => import('@/components/SuccessPaymentPageContent/SuccessPaymentPageContent'), {ssr: false})

export default function SuccessPayment() {
  return (
    <>
      <DynamicSuccessPaymentPageContent/>
    </>
  );
}
