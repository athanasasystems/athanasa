import Link from "next/link";
import { headerLinksConfig } from "@/configs/header-links-config";

const navItemClass =
  "group relative text-(--muted-foreground) hover:text-(--foreground) transition-colors duration-200";

const navLinkClass =
  "relative flex items-center gap-0.75 py-1.5 pl-3 pr-2 leading-normal cursor-pointer";

export const Header = () => {
  return (
    <header className="h-(--header-height) w-full transition-all duration-300 bg-background sticky top-0 z-40">
      <div className="flex items-center h-full max-w-360 mx-auto px-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Link href={"/"}>{/* Add logo or brand name here */}</Link>
          </div>
          <nav className="flex w-full">
            <ul className="flex items-center flex-1 list-none p-0 m-0 gap-4">
              {headerLinksConfig.map((link) => (
                <li key={link.name} className={navItemClass}>
                  {link.sections ? (
                    <button className={navLinkClass}>{link.name}</button>
                  ) : link.href ? (
                    <Link href={link.href} className={navLinkClass}>
                      {link.name}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
