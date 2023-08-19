import { CardsProps } from '@/types/data/overview';
import TicketsCards from './tickets_cards';
import HeaderCard from '../header_card';

const Tickets: React.FC<{ data: CardsProps[] }> = (data) => {
  return (
    <div className="flex flex-col border rounded-[8px] bg-white border-primary-gray-light">
      <HeaderCard
        label="Unresolved tickets"
        caption="Group:"
        subCaption="Support"
        viewDetails
      />
      <div className="flex-none grid grid-cols-1 divide-y gap-0">
        {TicketsCards(data)}
      </div>
    </div>
  );
};

export default Tickets;
