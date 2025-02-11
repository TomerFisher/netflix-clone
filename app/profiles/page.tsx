"use client";

export default function Profiles() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl text-white md:text-6xl">
          Who is watching?
        </h1>
        <div className="mt-10 flex items-center justify-center gap-8">
          <div onClick={() => {}}>
            <div className="group mx-auto w-44 flex-row">
              <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-md border-2 border-transparent group-hover:cursor-pointer group-hover:border-white">
                <img src="/images/profile1.png" alt="profile" />
              </div>
              <div className="mt-4 text-center text-2xl text-gray-400 group-hover:text-white">
                Name
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
