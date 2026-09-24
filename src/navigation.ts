export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Solutions & Services', href: '/#solutions' },
    { text: 'Why Minde', href: '/#why-us' },
    { text: 'About Us', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ],
  actions: [
    { text: 'Contact Us', href: 'mailto:info@mindetech.ch' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about/' },
        { text: 'Solutions & Services', href: '/#solutions' },
        { text: 'Why Minde', href: '/#why-us' },
      ],
    },

    {
      title: 'Tools',
      links: [
        {
          text: 'H3C CAS vs VMware vSphere Calculator',
          href: "javascript:window.open('/cas_vsphere_calculator/', 'casVsphereCalculator', 'width=1000,height=800,resizable=yes,scrollbars=yes');void(0);",
        },
        {
          text: 'Request a Consultation',
          href: "javascript:window.open('/cas_contact/', 'casContact', 'width=700,height=500,resizable=yes,scrollbars=yes');void(0);",
        },
      ],
    },

    {
      title: 'Contact',
      links: [
        {
          text: 'Contact Us',
          href: '/contact/',
        },
      ],
    },
  ],

  secondaryLinks: [
    { text: 'Impressum', href: '/impressum/' },
    { text: 'Privacy Policy', href: '/privacy/' },
  ],

  footNote: `
    © ${new Date().getFullYear()} Minde Technologies GmbH. All rights reserved.
  `,
};
