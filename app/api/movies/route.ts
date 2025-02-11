import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prismadb";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json(
      { message: "You must be logged in." },
      { status: 401 },
    );
  }

  try {
    const movies = await prisma.movie.findMany();
    return Response.json(movies, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(null, { status: 400 });
  }
}
