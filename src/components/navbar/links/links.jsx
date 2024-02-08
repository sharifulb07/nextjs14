import React from "react";
import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
