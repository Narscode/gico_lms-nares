import React from "react";

type Props = {
  children: React.ReactNode;
};
const Content: React.FC<Props> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default Content;
