export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Solutions', href: '/#solutions' },
    { text: 'Services', href: '/#services' },
    { text: 'About Us', href: '/#about' },
    { text: 'Contact', href: '/#contact' },
  ],
  actions: [{ text: 'Contact Us', href: 'mailto:business@mindetech.ch' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/#about' },
        { text: 'Solutions', href: '/#solutions' },
        { text: 'Services', href: '/#services' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Email: business@mindetech.ch', href: 'mailto:business@mindetech.ch' },
        { text: 'Mülistrasse 5, 8320 Fehraltorf, Switzerland', href: '#' },
      ],
    },
  ],
  footNote: `
    © ${new Date().getFullYear()} Minde Technologies GmbH. All rights reserved.
  `,
};
