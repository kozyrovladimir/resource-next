import Link from 'next/link'
import PageInfoComponent from "@/components/PageInfoComponent/PageInfoComponent";

export default function NotFound() {
  return (
    <PageInfoComponent
      title="Page not found"
      text="Sorry, but the page you are looking for does not exist."
    >
      <Link href={'/'}>Go to home page</Link>
    </PageInfoComponent>
  )
}
