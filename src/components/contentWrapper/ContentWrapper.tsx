import React, { ReactNode } from 'react';
import './style.scss';

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className='contentWrapper'>{children}</div>
  );
}

export default ContentWrapper;
