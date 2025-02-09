import { prisma } from "@/lib/prismadb";
import { hash } from "bcrypt";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    const isExists = await prisma.user.findUnique({ where: { email } });
    if (isExists) {
      return new Response("Email already exists", { status: 422 });
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, hashedPassword, emailVerified: new Date() },
    });

    return Response.json({ user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("An error ocuurs", { status: 400 });
  }
}
