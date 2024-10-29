import dynamic from "next/dynamic";

const DynamicOrderSubscriptionWithAuth = dynamic(() => import('@/components/OrderSubscriptionPageContent/OrderSubscriptionWithAuth'), {ssr: false});

export default function SubscriptionPlan() {
  return (
    <>
      <DynamicOrderSubscriptionWithAuth/>
    </>
  );
}
