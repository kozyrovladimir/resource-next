import React from 'react';
import styles from './VideoListItemTag.module.scss';

interface VideoListItemTagType {
  color: string;
  children: string;
  onClick: () => void;
}

const VideoListItemTag: React.FC<VideoListItemTagType> = ({
                                                            color,
                                                            children,
                                                            onClick,
                                                          }) => {
  return (
    <button style={{borderColor: `${color}`}} className={styles.tag} onClick={onClick}>
      {children}
    </button>
  );
};

export {VideoListItemTag};
