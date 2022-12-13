"use client";

import { useState, useEffect } from "react";

const Page = ({ params }) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${params.postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [params.postId]);

  if (!post) {
    throw new Error("Post could not found!");
  }

  return (
    <div>
      <h1 className="text-4xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Page;
