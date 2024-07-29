import React from 'react';
import styles from './PageInfoComponent.module.scss';
import PageInfoLayout from "@/components/PageInfoLayout/PageInfoLayout";

interface PageErrorComponentProps {
  title: string;
  text: string;
  children?: React.ReactNode;
}

const PageInfoComponent: React.FC<PageErrorComponentProps> = ({children,title,text}) => {
  return (
    <PageInfoLayout>
      <h2 className={styles.pageInfoTitle}>{title}</h2>
      <p className={styles.pageInfoSubtitle}>{text}</p>
      {children}
    </PageInfoLayout>
  );
};

export default PageInfoComponent;
