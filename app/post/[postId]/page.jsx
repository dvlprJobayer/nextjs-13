import React from "react";

const Page = ({ params }) => {
  return (
    <div>
      <h1 className="text-4xl">Single Post {params.postId}</h1>
    </div>
  );
};

export default Page;
