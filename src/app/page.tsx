import Select from "@/components/Select/Select";

export default async function Home() {

  return (
      <div>
        <span>Main page</span>
        <Select
          placeholder={'Phase'}
          items={['Phase 1', 'Phase 2', 'Phase 3']}
          // onValueChange={(value) => {}}
        />
      </div>
  );
}
