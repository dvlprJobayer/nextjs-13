import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-black text-white py-6">
      <ul className="flex gap-x-2 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/post">Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
