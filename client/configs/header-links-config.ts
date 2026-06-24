export interface Section {
  key: string;
  title: string;
  href?: string;
  hasTargetBlank?: boolean; // Optional property to indicate if the link should open in a new tab
  hasRelNoopener?: boolean; // Optional property to indicate if the link should have rel="noopener"
  sections?: Section[];
  links?: LinkItem[];
}

export interface LinkItem {
  key: string;
  name: string;
  href?: string;
  hasTargetBlank?: boolean; // Optional property to indicate if the link should open in a new tab
  hasRelNoopener?: boolean; // Optional property to indicate if the link should have rel="noopener"
}

export interface HeaderLinksConfig {
  sections: Section[];
}

export const headerLinksConfig: HeaderLinksConfig = {
  sections: [
    {
      key: "products",
      title: "Products",
      sections: [
        {
          key: "design-system",
          title: "Design System",
          links: [
            {
              key: "sophiajs",
              name: "Sophia.js",
              href: "/sophiajs",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "omeliaui",
              name: "Omelia UI",
              href: "/omeliaui",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "eleganticons",
              name: "Elegant Icons",
              href: "/eleganticons",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "loftycharts",
              name: "Lofty Charts",
              href: "/loftycharts",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
          ],
        },
      ],
    },
    {
      key: "resources",
      title: "Resources",
      sections: [
        {
          key: "learn",
          title: "Learn",
          links: [
            {
              key: "docs",
              name: "Docs",
              href: "/docs",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "about",
              name: "About",
              href: "/about",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "blog",
              name: "Blog",
              href: "/blog",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "changelog",
              name: "Changelog",
              href: "/changelog",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
          ],
        },
      ],
    },
    {
      key: "solutions",
      title: "Solutions",
      href: "/solutions",
      hasTargetBlank: false,
      hasRelNoopener: false,
    },
    {
      key: "pricing",
      title: "Pricing",
      href: "/pricing",
      hasTargetBlank: false,
      hasRelNoopener: false,
    },
  ],
};
