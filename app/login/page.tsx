"use client";

import Input from "@/components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login",
    );
  }, []);

  const signin = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const signup = useCallback(async () => {
    try {
      await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      signin();
    } catch (error) {
      console.log(error);
    }
  }, [name, email, password, signin]);

  return (
    <div className="h-full w-full bg-cover bg-fixed bg-center bg-no-repeat sm:bg-[url('/images/background.jpg')]">
      <div className="h-full w-full bg-black sm:bg-opacity-50">
        <header className="px-5 py-1 xl:px-36">
          <div className="relative h-20">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              objectFit="contain"
              className="object-left"
            />
          </div>
        </header>
        <main className="flex justify-center">
          <div className="mt-2 w-full min-w-96 rounded bg-black bg-opacity-70 px-16 py-16 sm:w-2/5 sm:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">Sign In</h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setName(event.currentTarget.value)
                  }
                />
              )}
              <Input
                label="Email"
                id="email"
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.currentTarget.value)
                }
              />
              <Input
                label="Password"
                id="password"
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setPassword(event.currentTarget.value)
                }
              />
              <button
                className="mt-2 block w-full rounded-md bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 active:bg-red-900"
                onClick={variant === "login" ? signin : signup}
              >
                {variant === "login" ? "Sign In" : "Sign Up"}
              </button>
              <div className="mt-8 flex flex-row items-center justify-center gap-4">
                <div
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                  <FcGoogle size={30} />
                </div>
                <div
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
                  onClick={() => signIn("github", { callbackUrl: "/" })}
                >
                  <FaGithub size={30} />
                </div>
              </div>
              <p className="text-neutral-400">
                {variant === "login"
                  ? "New to Netflix?"
                  : "Already Have an Account?"}{" "}
                <span
                  className="cursor-pointer font-bold text-white hover:underline"
                  onClick={toggleVariant}
                >
                  {variant === "login" ? "Sign up now" : "Login"}
                </span>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
