import { CardsProps, TasksProps } from '@/types/data/overview';

export const tasksPriority: CardsProps[] = [
  {
    label: 'urgent',
    secondaryLabel: '#FEC400',
  },
  {
    label: 'new',
    secondaryLabel: '#29CC97',
  },
  {
    label: 'default',
    secondaryLabel: '#F0F1F7',
  },
];

export const tasksData: (CardsProps & TasksProps)[] = [
  {
    label: 'Finish ticket update',
    secondaryLabel: 'urgent',
    completed: false,
  },
  {
    label: 'Awaiting Customer Response',
    secondaryLabel: 'new',
    completed: false,
  },
  {
    label: 'Awaiting Developer Fix',
    secondaryLabel: 'default',
    completed: true,
  },
];
