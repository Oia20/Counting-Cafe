import { prisma } from "../../../lib/prisma/prisma";

export async function POST(req: Request) {
  const { title, userId } = await req.json();

  // Validate input data
  if (!title || !userId) {
    return new Response(JSON.stringify({ error: "Title and userId are required." }), { status: 400 });
  }

  const folder = await prisma.folder.create({
    data: {
      title,
      userId: userId,
    },
  });
  return new Response(JSON.stringify(folder), { status: 201 });
}
