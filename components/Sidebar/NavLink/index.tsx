import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";

type Props = {
  href: string;
  title: string;
  icon: string;
  onClick?: () => void; // optional onClick prop
};

const NavLink = ({ href, title, icon, onClick }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick} // pass it here
      className={`group relative flex items-center shrink-0 gap-2 h-10 px-3 text-label-sm transition-colors hover:text-strong-950 not-last:mb-2 ${
        isActive ? "!text-blue-500" : "text-sub-600"
      }`}
    >
      <Icon
        className={`transition-colors group-hover:fill-strong-950 ${
          isActive ? "!fill-blue-500" : "fill-sub-600"
        }`}
        name={icon}
      />
      <div>{title}</div>
      {title === "Templates" && (
        <div className="ml-auto px-2 py-0.5 bg-strong-950 rounded-md text-[0.6875rem] leading-[1rem] text-white-0">
          Beta
        </div>
      )}
    </Link>
  );
};

export default NavLink;
