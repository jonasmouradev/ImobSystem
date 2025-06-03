import React, { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

type AnchorProps = {
  to: string;
};

const Anchor: FC<PropsWithChildren<AnchorProps>> = ({ to }) => {
  return <NavLink to={to} style={{ textDecoration: "none" }} />;
};
export default Anchor;
