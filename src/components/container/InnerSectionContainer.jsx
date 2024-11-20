import React from "react";

const InnerSectionContainer = ({ children }) => {
  return (
    <div className={` mx-auto px-40 maxmd:px-2 py-40 maxmd:py-10`}>
      {children}
    </div>
  );
};

export default InnerSectionContainer;
