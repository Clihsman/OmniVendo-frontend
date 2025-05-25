import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Principal',
  },
  {
    displayName: 'Resumen',
    iconName: 'chart-bar',
    route: '/dashboard',
  },
  {
    displayName: 'eCommerce',
    iconName: 'shopping-cart',
    route: '',
  },

  {
    navCap: 'Apps',
  },
  {
    displayName: 'Plataformas',
    iconName: 'binary-tree-2',
    route: '/ui-components/platform/forms-create',
  },
  {
    displayName: 'Chat',
    iconName: 'message-dots',
    route: 'https://modernize-angular-main.netlify.app/apps/chat',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Calendar',
    iconName: 'calendar',
    route: 'https://modernize-angular-main.netlify.app/apps/calendar',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Email',
    iconName: 'mail',
    route: 'https://modernize-angular-main.netlify.app/apps/email/inbox',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Contact List',
    iconName: 'list-details',
    route: 'https://modernize-angular-main.netlify.app/apps/contact-list',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },

  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Badge',
    iconName: 'archive',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'info-circle',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'list-details',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'file-text',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'file-text-ai',
    route: '/ui-components/tooltips',
  },
  {
    displayName: 'Forms',
    iconName: 'clipboard-text',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Tables',
    iconName: 'table',
    route: '/ui-components/tables',
  },

  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'brand-dribbble',
    route: '/extra/sample-page',
  },

  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    route: '/authentication',
    children: [
      {
        displayName: 'Login',
        iconName: 'point',
        route: '/authentication/login',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication',
    children: [
      {
        displayName: 'Register',
        iconName: 'point',
        route: '/authentication/register',
      },
    ],
  },
];
