import React from "react";

const Navbar = () => {
  const menu = () => {
    return (
      <div className="flex justify-between w-[60%] mx-auto">
        <p>home</p>
        <p>post</p>
      </div>
    );
  };
  return <div className="mt-10">{menu()}</div>;
};

export default Navbar;
