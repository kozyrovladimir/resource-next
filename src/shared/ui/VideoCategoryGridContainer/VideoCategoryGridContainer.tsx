import React, {PropsWithChildren} from 'react';
import styles from './VideoCategoryGridContainer.module.scss';

const VideoCategoryGridContainer: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.container}>
        {
          React.Children.map(children, (child) => {
            return (
              <>
                {child}
              </>
            );
          })
        }
    </div>
  );
};

export default VideoCategoryGridContainer;
