import { ChevronDownIcon } from "lucide-react";

export interface Section {
  key: string;
  title: string;
  href?: string;
  hasTargetBlank?: boolean;
  hasRelNoopener?: boolean;
  sections?: Section[];
  links?: LinkItem[];
  icon?: React.ElementType;
}

export interface LinkItem {
  key: string;
  name: string;
  href?: string;
  hasTargetBlank?: boolean;
  hasRelNoopener?: boolean;
}

export interface HeaderLinksConfig {
  sections: Section[];
}

export const headerLinksConfig: HeaderLinksConfig = {
  sections: [
    {
      key: "platform",
      title: "Platform",
      icon: ChevronDownIcon,
      sections: [
        {
          key: "cloud",
          title: "Athanasa Cloud",
          links: [
            {
              key: "overview",
              name: "Overview",
              href: "/platform",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "deployments",
              name: "Deployments",
              href: "/platform/deployments",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "compute",
              name: "Compute",
              href: "/platform/compute",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "storage",
              name: "Storage",
              href: "/platform/storage",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "databases",
              name: "Databases",
              href: "/platform/databases",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
          ],
        },
        {
          key: "infrastructure",
          title: "Infrastructure",
          links: [
            {
              key: "domains",
              name: "Domains",
              href: "/platform/domains",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "edge-network",
              name: "Edge Network",
              href: "/platform/edge-network",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "observability",
              name: "Observability",
              href: "/platform/observability",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
          ],
        },
      ],
    },

    {
      key: "products",
      title: "Products",
      icon: ChevronDownIcon,
      sections: [
        {
          key: "security",
          title: "Security",
          links: [
            {
              key: "kleisa",
              name: "Kleisa",
              href: "/kleisa",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
          ],
        },
        {
          key: "developer-tools",
          title: "Developer Tools",
          links: [
            {
              key: "sophiajs",
              name: "Sophia.js",
              href: "/sophiajs",
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
        {
          key: "design",
          title: "Design",
          links: [
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
          ],
        },
      ],
    },

    {
      key: "resources",
      title: "Resources",
      icon: ChevronDownIcon,
      sections: [
        {
          key: "learn",
          title: "Learn",
          links: [
            {
              key: "docs",
              name: "Documentation",
              href: "/docs",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "knowledge-base",
              name: "Knowledge Base",
              href: "/knowledge-base",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
            {
              key: "guides",
              name: "Guides",
              href: "/guides",
              hasTargetBlank: false,
              hasRelNoopener: false,
            },
          ],
        },
        {
          key: "company-resources",
          title: "Updates",
          links: [
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
            {
              key: "status",
              name: "Status",
              href: "https://status.athanasa.com",
              hasTargetBlank: true,
              hasRelNoopener: true,
            },
          ],
        },
      ],
    },

    {
      key: "enterprise",
      title: "Enterprise",
      href: "/enterprise",
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
