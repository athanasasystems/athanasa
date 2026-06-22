import { ChevronDown } from "lucide-react";

interface LinkItem {
  name: string;
  href: string;
}

interface Section {
  title: string;
  links: LinkItem[];
}

interface HeaderLink {
  name: string;
  icon?: React.ElementType; // Optional icon for the link
  href?: string;
  sections?: Section[];
}

export const headerLinksConfig: HeaderLink[] = [
  {
    name: "Products",
    sections: [
      {
        title: "Design System",
        links: [
          {
            name: "Sophia.js",
            href: "/sophiajs",
          },
          {
            name: "Omelia UI",
            href: "/omeliaui",
          },
          {
            name: "Elegant Icons",
            href: "/eleganticons",
          },
          {
            name: "Lofty Charts",
            href: "/loftycharts",
          },
        ],
      },
    ],
  },
  {
    name: "Resources",
    sections: [
      {
        title: "Learn",
        links: [
          {
            name: "Docs",
            href: "/docs",
          },
          {
            name: "About",
            href: "/about",
          },
          {
            name: "Blog",
            href: "/blog",
          },
          {
            name: "Changelog",
            href: "/changelog",
          },
        ],
      },
    ],
  },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
];
