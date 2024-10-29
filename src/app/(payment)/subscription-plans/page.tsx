import dynamic from "next/dynamic";

const DynamicSubscriptionPlansPageContent = dynamic(() => import('@/components/SubscriptionPlansPageContent/SubscriptionPlansPageContent'), {ssr: false});

export default function SubscriptionPlans() {
  return (
    <>
      <DynamicSubscriptionPlansPageContent/>
    </>
  );
}
