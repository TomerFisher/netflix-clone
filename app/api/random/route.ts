import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prismadb";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json(
        { message: "You must be logged in." },
        { status: 401 },
      );
    }

    const moviesCount = await prisma.movie.count();
    const randomIndex = Math.floor(Math.random() * moviesCount);
    const randomMovie = await prisma.movie.findFirst({
      skip: randomIndex,
    });

    return Response.json(randomMovie || {}, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(null, { status: 400 });
  }
}
