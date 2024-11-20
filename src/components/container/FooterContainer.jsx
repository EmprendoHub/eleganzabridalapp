import React, { Children } from "react";

const FooterContainer = ({ children }) => {
  return (
    <div className="grid xsm:grid-cols-1 maxmd:grid-cols-2 grid-cols-4 gap-10">
      {children}
    </div>
  );
};

export default FooterContainer;
