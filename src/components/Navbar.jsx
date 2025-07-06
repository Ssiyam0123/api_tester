import Link from "next/link";
import React from "react";

const Navbar = () => {
  const menu = () => {
    return (
      <div className="flex justify-between w-[60%] mx-auto">
        <Link href={'/'}>home</Link>
        <Link href={'/'}>post</Link>
      </div>
    );
  };
  return <div className="mt-10">{menu()}</div>;
};

export default Navbar;
