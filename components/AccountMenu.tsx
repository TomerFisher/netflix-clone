import { signOut } from "next-auth/react";

interface AccountMenuProps {
  visible?: boolean;
}

export default function AccountMenu({ visible }: AccountMenuProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="border-grap-800 absolute right-0 top-14 flex w-56 flex-col border-2 bg-black py-5">
      <div className="flex flex-col gap-3">
        <div className="group/item flex w-full flex-row items-center gap-3 px-3">
          <img src="/images/profile1.png" alt="" className="w-8 rounded-md" />
          <p className="text-sm text-white group-hover/item:underline">
            Username
          </p>
        </div>
        <hr className="my-4 h-px border-0 bg-gray-600" />
        <div
          className="px-3 text-center text-sm text-white hover:underline"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
}
