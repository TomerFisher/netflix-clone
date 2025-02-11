interface MobileMenuItemProps {
  label: string;
}

export default function MobileMenuItem({ label }: MobileMenuItemProps) {
  return (
    <div className="px-3 text-center text-white hover:underline">{label}</div>
  );
}
