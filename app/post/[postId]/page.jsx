import { PrismaClient } from "@prisma/client";

const Page = async ({ params }) => {
  const prisma = new PrismaClient();
  const post = await prisma.post.findFirst({ where: { id: +params.postId } });

  if (!post) {
    throw new Error("Post could not found!");
  }

  return (
    <div>
      <h1 className="text-4xl">{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
};

export default Page;
