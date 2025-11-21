// Site-wide configuration
export const siteConfig = {
  name: "Market Sniper",
  tagline: "Trade Smarter, Not Harder",
  logo: "/src/assets/images/logo.jpg",

  // Navigation
  navigation: [
    { name: "Features", href: "/features.html" },
    { name: "Pricing", href: "/pricing.html" },
    { name: "Contact", href: "/contact.html" }
  ],

  // Footer
  footer: {
    description: "Advanced trading bots and strategies for consistent, automated trading.",
    links: [
      {
        title: "Product",
        items: [
          { name: "Features", href: "/features.html" },
          { name: "Pricing", href: "/pricing.html" },
          { name: "FAQ", href: "/#faq" }
        ]
      },
      {
        title: "Support",
        items: [
          { name: "Contact", href: "/contact.html" },
          { name: "Discord", href: "#" }
        ]
      }
    ],
    copyright: `© ${new Date().getFullYear()} Market Sniper. All rights reserved.`
  }
};
