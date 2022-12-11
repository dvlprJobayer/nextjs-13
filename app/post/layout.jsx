import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const Layout = async ({ children }) => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return (
    <div className="flex">
      <aside className="bg-stone-800 h-full fixed text-white">
        <ul className="px-12 mt-5">
          {posts.map((post) => (
            <li key={post.id}>
              <Link className="text-xl" href={`/post/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="pl-64 mt-4">{children}</div>
    </div>
  );
};

export default Layout;
