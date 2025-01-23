"use client";

import Input from "@/components/input";
import { ChangeEvent, useCallback, useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("password");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "password" ? "code" : "password",
    );
  }, []);

  return (
    <div className="h-full w-full bg-cover bg-fixed bg-center bg-no-repeat sm:bg-[url('/images/background.jpg')]">
      <div className="h-full w-full bg-black sm:bg-opacity-50">
        <header className="px-5 py-1 xl:px-36">
          <img src="/images/logo.png" alt="Logo" className="h-20" />
        </header>
        <main className="flex justify-center">
          <div className="mt-2 w-full min-w-96 rounded bg-black bg-opacity-70 px-16 py-16 sm:w-2/5 sm:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">Sign In</h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Email or mobile number"
                id="email"
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.currentTarget.value)
                }
              />
              {variant === "password" && (
                <Input
                  label="Password"
                  id="password"
                  value={password}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setPassword(event.currentTarget.value)
                  }
                />
              )}
              <button className="mt-2 block w-full rounded-md bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 active:bg-red-900">
                {variant === "password" ? "Sign In" : "Send Sign-In Code"}
              </button>
              <p className="w-full text-center text-white">OR</p>
              <button
                className="block w-full rounded-md bg-gray-500 py-3 font-semibold text-white opacity-80 transition hover:opacity-50 active:opacity-40"
                onClick={toggleVariant}
              >
                {variant === "password" ? "Use a Sign-In Code" : "Use Password"}
              </button>
              <p className="text-neutral-400">
                New to Netflix?{" "}
                <span className="cursor-pointer font-bold text-white hover:underline">
                  Sign up now
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
