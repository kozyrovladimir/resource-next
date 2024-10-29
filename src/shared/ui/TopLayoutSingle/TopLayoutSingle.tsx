import style from './TopLayoutSingle.module.scss';
import React, {PropsWithChildren} from "react";

const TopLayoutSingle:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={style.topLayout}>
      {children}
    </div>
  );
};

export default TopLayoutSingle;
