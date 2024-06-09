import { Icon } from '@iconify/react';

// import { SideNavItem } from './types';

export const SIDENAV_ITEMS = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <Icon icon="lucide:user" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/profile/account' },
      { title: 'Voice Settings', path: '/profile/voice-settings' },
      { title: 'Give Feedback', path: '/profile/give-feedback' },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Option 1', path: '/settings/option1' },
      { title: 'Option 2', path: '/settings/option2' },
      { title: 'Option 3', path: '/settings/option3' },
      { title: 'Option 4', path: '/settings/option4' },
    ],
  },
];
