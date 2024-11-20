import React from "react";

const SectionContainer = ({ children, className }) => {
  return (
    <div className={`${className} mx-auto px-20 maxmd:px-5 `}>{children}</div>
  );
};

export default SectionContainer;
