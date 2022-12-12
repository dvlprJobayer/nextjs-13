"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts.slice(0, 5)));
  }, []);

  return (
    <div className="flex">
      <aside className="bg-stone-800 w-1/4 h-full fixed text-white">
        <ul className="px-6 mt-5 text-center">
          {posts.map((post) => (
            <li key={post.id} className="mt-2">
              <Link className="text-xl" href={`/post/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="pl-96 mt-4">{children}</div>
    </div>
  );
};

export default Layout;
