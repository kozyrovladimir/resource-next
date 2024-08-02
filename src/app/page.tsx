import {SearchPanel} from "@/features/SearchPanel";
import VideoList from "@/widgets/VideoList/VideoList";


export default async function Home() {

  return (
      <div>
        <SearchPanel/>
        <VideoList/>
      </div>
  );
}
