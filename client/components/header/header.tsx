import Link from "next/link";

const navItemClass =
  "group relative before:content-[''] before:absolute before:inset-0.5 before:bg-transparent before:rounded-[1.5625rem] before:cursor-pointer hover:before:border hover:before:border-(--border-default) hover:before:opacity-100";

const navLinkClass = "relative py-2 px-3 leading-normal cursor-pointer";

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
              <li className={navItemClass}>
                <button className={navLinkClass}>Products</button>
              </li>
              <li className={navItemClass}>
                <button className={navLinkClass}>Resources</button>
              </li>
              <li className={navItemClass}>
                <button className={navLinkClass}>Solutions</button>
              </li>
              <li className={navItemClass}>
                <Link
                  href={"/pricing"}
                  className={`flex items-center ${navLinkClass}`}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
