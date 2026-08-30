export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Solutions', href: '/#solutions' },
    { text: 'Services', href: '/#services' },
    { text: 'Why Minde', href: '/#why-us' },
    { text: 'About Us', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ],
  actions: [{ text: 'Contact Us', href: 'mailto:info@mindetech.ch' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Solutions', href: '/#solutions' },
        { text: 'Services', href: '/#services' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Email: info@mindetech.ch', href: 'mailto:info@mindetech.ch' },
        { text: 'Mülistrasse 5, 8320 Fehraltorf, Switzerland', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: '/impressum' },
    { text: 'Privacy Policy', href: '/privacy' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Minde Technologies GmbH. All rights reserved.
  `,
};
