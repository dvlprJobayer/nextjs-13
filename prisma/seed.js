const { PrismaClient } = require("@prisma/client");

async function seed() {
  const prisma = new PrismaClient();
  await prisma.post.create({
    data: {
      title: "This test title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  });
  await prisma.post.create({
    data: {
      title: "This test title two",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    },
  });
}

seed();
