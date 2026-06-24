export interface Section {
  key: string;
  title: string;
  links: LinkItem[];
}

export interface LinkItem {
  key: string;
  name: string;
  href: string;
  hasTargetBlank?: boolean; // Optional property to indicate if the link should open in a new tab
  hasRelNoopener?: boolean; // Optional property to indicate if the link should have rel="noopener"
}

export interface FooterLinksConfig {
  sections: Section[];
}

export const footerLinksConfig: FooterLinksConfig = {
  sections: [
    {
      key: "products",
      title: "Products",
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
};
