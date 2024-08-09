import dynamic from 'next/dynamic';
import RequireAuth from "@/components/RequireAuth/RequireAuth";

const DynamicUserAccountContent = dynamic(() => import('@/components/UserAccountContent/UserAccountContent'), {
  loading: () => <p>Loading...</p>,
})

export default function UserAccount() {
  return (
    <RequireAuth>
      <DynamicUserAccountContent/>
    </RequireAuth>
  );
}
