import React from "react";

const Card = (props) => {
  const { children } = props;

  return <div className="pt-16 pb-2 px-20">{children}</div>;
};

export default Card;
