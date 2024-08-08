import {SearchPanel} from "@/features/SearchPanel";
import VideoList from "@/widgets/VideoList/VideoList";
import {ViewSwitch} from "@/features/ViewSwitch";


export default async function Home() {

  return (
      <div>
        <SearchPanel/>
        <ViewSwitch/>
        <VideoList/>
      </div>
  );
}
