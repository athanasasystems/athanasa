import Link from "next/link";
import { footerLinksConfig } from "@/configs/footer-links-config";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

const sectionTitleClass = "mb-3 font-medium text-(--muted-foreground)";

const linkClass =
  "text-(--foreground) transition-colors duration-100 hover:text-(--muted-foreground)";

export const Footer = () => {
  return (
    <footer className="mt-30 mb-8 w-full bg-background text-(--muted-foreground)">
      <div className="mx-auto max-w-360 px-8 pt-12">
        <div className="grid grid-cols-1 gap-8 min-[420px]:grid-cols-2 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-5">
          {footerLinksConfig.sections.map((section) => (
            <div key={section.key}>
              <h3 className={sectionTitleClass}>{section.title}</h3>
              <ul className="m-0 flex list-none flex-col gap-4 p-0">
                {section.links.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={linkClass}
                      target={link.hasTargetBlank ? "_blank" : undefined}
                      rel={
                        link.hasRelNoopener ? "noopener noreferrer" : undefined
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-(--foreground)">
            Athanasa &copy; 2025-{new Date().getFullYear()}
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};
