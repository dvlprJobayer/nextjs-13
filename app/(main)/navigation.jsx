import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-black text-white py-4 flex items-center">
      <ul className="text-white ml-16 flex justify-center gap-x-4 flex-1 text-xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/post">Posts</Link>
        </li>
      </ul>
      <p className="font-bold bg-gray-500 py-2 px-6 rounded-full mr-4">
        <Link href="/login">Login</Link>
      </p>
    </nav>
  );
};

export default Navigation;
