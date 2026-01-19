export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Services',
    links: [
      { href: '/services/bookkeeping', title: 'Bookkeeping & Accounting' },
      { href: '/services/tax', title: 'Tax Services' },
      { href: '/services/cfo', title: 'Fractional CFO' },
      { href: '/services/hr', title: 'People Operations' },
    ],
  },
  {
    columnName: 'Company',
    links: [
      { href: '/about', title: 'About Us' },
      { href: '/testimonials', title: 'Testimonials' },
      { href: '/articles', title: 'Articles' },
      { href: '/work-here', title: 'Careers' },
    ],
  },
  {
    columnName: 'Legal',
    links: [
      { href: '/privacy', title: 'Privacy Policy' },
      { href: '/terms', title: 'Terms of Use' },
    ],
  },
];
