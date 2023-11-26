import React from 'react';

const InnerSectionContainer = ({ children }) => {
  return (
    <div className={` mx-auto px-40 md:px-2 py-40 md:py-10`}>{children}</div>
  );
};

export default InnerSectionContainer;
