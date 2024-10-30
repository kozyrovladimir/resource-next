"use client";

import React from 'react';
import {SearchPanel} from "@/features/SearchPanel";
import {ViewSwitch} from "@/features/ViewSwitch";
import VideoList from "@/widgets/VideoList/VideoList";
import {useValidateSearchParams} from "@/utils/hooks/useValidateSearchParams";

const HomePage = () => {
  useValidateSearchParams();

  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <SearchPanel/>
      <ViewSwitch
        checked={checked}
        setChecked={setChecked}
      />
      <VideoList
        isTableView={checked}
      />
    </div>
  );
};

export {HomePage};
