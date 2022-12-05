import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <ul className="pl-5 mt-5">
          <li>
            <Link className="text-xl" href="/post/p1">
              Post 1
            </Link>
          </li>
          <li className="mt-2">
            <Link className="text-xl" href="/post/p2">
              Post 2
            </Link>
          </li>
          <li className="mt-2">
            <Link className="text-xl" href="/post/p3">
              Post 3
            </Link>
          </li>
        </ul>
      </div>
      <div className="pl-6 mt-4">{children}</div>
    </div>
  );
};

export default Layout;
