import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <nav className="my-6">
        <ul className="flex gap-5">
          <Link href={"/about/mission"}>Mission</Link>
          <Link href={"/about/vission"}>Vission</Link>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default layout;
