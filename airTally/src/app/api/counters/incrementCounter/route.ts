import { prisma } from "../../../lib/prisma/prisma";


export async function POST(req: Request) {
  const { id, count } = await req.json();
  const counter = await prisma.counters.findUnique({
    where: { id: id },
  });

  if (!counter) return new Response('Counter not found', { status: 404 });

  const updatedCounter = await prisma.counters.update({
    where: { id: id },
    data: { count: count },
  });
  

  return new Response(JSON.stringify(updatedCounter), { status: 200 });
}