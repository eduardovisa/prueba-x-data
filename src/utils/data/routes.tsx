import {
  AgentsIcon,
  ArticlesIcon,
  ContactsIcon,
  IdeasIcon,
  OverviewIcon,
  SettingsIcon,
  SubscriptionIcon,
  TicketsIcon,
} from '@/svg/routes_icons';
import RoutesProps from '@/types/routes_types';

const routes: RoutesProps[] = [
  {
    label: 'Overview',
    icon: <OverviewIcon />,
    path: '/overview',
  },
  {
    label: 'Tickets',
    icon: <TicketsIcon />,
    path: '#',
  },
  {
    label: 'Ideas',
    icon: <IdeasIcon />,
    path: '#',
  },
  {
    label: 'Contacts',
    icon: <ContactsIcon />,
    path: '#',
  },
  {
    label: 'Agents',
    icon: <AgentsIcon />,
    path: '#',
  },
  {
    label: 'Articles',
    icon: <ArticlesIcon />,
    path: '#',
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    path: '#',
    isExtra: true,
  },
  {
    label: 'Subscription',
    icon: <SubscriptionIcon />,
    path: '#',
    isExtra: true,
  },
];

export default routes;
