import MobileMenuItem from "./MobileMenuItem";

interface MobileMenuProps {
  visible?: boolean;
}

export default function MobileMenu({ visible }: MobileMenuProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="absolute left-0 top-8 flex w-56 flex-col border-2 border-gray-800 bg-black py-5">
      <div className="flex flex-col gap-4">
        <MobileMenuItem label="Home" />
        <MobileMenuItem label="Series" />
        <MobileMenuItem label="Films" />
        <MobileMenuItem label="New & Popular" />
        <MobileMenuItem label="My List" />
        <MobileMenuItem label="Browse by Languages" />
      </div>
    </div>
  );
}
