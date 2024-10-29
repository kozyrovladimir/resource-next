import React from 'react';

import loader from '../../assets/images/logo-loader-svg.svg';
import Image from 'next/image';

interface LoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Loader: React.FC<LoaderProps> = ({ size = 'md' }) => {
  const loaderSize = {
    xs: '50px',
    sm: '100px',
    md: '150px',
    lg: '200px',
  };

  return (
    <div>
      <Image
        src={loader}
        alt="loader"
        style={{ width: loaderSize[size], aspectRatio: '1' }}
      />
    </div>
  );
};

export default Loader;
