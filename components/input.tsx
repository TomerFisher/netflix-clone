"use client";

import { ChangeEventHandler } from "react";

interface InputProps {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  type?: string;
}

export default function Input({
  id,
  onChange,
  value,
  label,
  type,
}: InputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className="peer block w-full appearance-none rounded-md bg-neutral-700 px-6 pb-1 pt-6 text-base text-white focus:outline-none focus:ring-0"
        placeholder=""
      />
      <label
        htmlFor={id}
        className="absolute left-6 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-base text-zinc-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  );
}
