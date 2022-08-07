import Link from "next/link";
import React from "react";
import { ComponentHasChild } from "types";

interface MyLinkProp {
  button?: boolean;
  href: string;
}

const MyLink: React.FC<ComponentHasChild & MyLinkProp> = props => {
  return (
    <Link href={props.href}>
      <a></a>
    </Link>
  );
};

export default MyLink;
