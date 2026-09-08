import Link from "next/link";
import { headerLinksConfig } from "@/configs/header-links-config";

const navItemClass =
  "text-(--foreground) transition-colors duration-100 hover:text-(--muted-foreground)";

const navButtonClass =
  "flex h-8 cursor-pointer items-center gap-0.75 px-3 text-(--foreground) transition-colors duration-100 hover:text-(--muted-foreground)";

const navLinkClass =
  "flex h-8 cursor-pointer items-center gap-0.75 px-3 leading-normal";

const loginLinkClass =
  "flex h-9 cursor-pointer items-center gap-0.75 rounded-full bg-(--muted) px-3 leading-normal text-(--foreground) font-medium transition-colors duration-100 hover:bg-(--muted)/90";

const signupLinkClass =
  "flex h-9 cursor-pointer items-center gap-0.75 rounded-full bg-(--primary) px-3 leading-normal text-(--primary-foreground) font-medium transition-colors duration-100 hover:bg-(--primary)/90";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 h-(--header-height) w-full bg-background transition-all duration-300">
      <div className="mx-auto flex h-full max-w-360 items-center justify-between px-8">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Link href={"/"}>{/* Add logo or brand name here */}</Link>
          </div>
          <nav className="hidden lg:flex">
            <ul className="m-0 flex flex-1 list-none items-center gap-2 p-0">
              {headerLinksConfig.sections.map((section) => (
                <li key={section.key} className={navItemClass}>
                  {section.sections ? (
                    <button className={navButtonClass}>{section.title}</button>
                  ) : section.href ? (
                    <Link href={section.href} className={navLinkClass}>
                      {section.title}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login" className={loginLinkClass}>
            Login
          </Link>
          <Link href="/signup" className={signupLinkClass}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};
