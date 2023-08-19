import { CardsProps } from '@/types/data/overview';
import TicketsCards from './tickets_cards';
import CardList from '../layouts/card_list';

const Tickets: React.FC<{ data: CardsProps[] }> = (data) => {
  return (
    <CardList
      label="Unresolved tickets"
      caption="Group:"
      subCaption="Support"
      viewDetails
    >
      <TicketsCards data={data.data} />
    </CardList>
  );
};

export default Tickets;
