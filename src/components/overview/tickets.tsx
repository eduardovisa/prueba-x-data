import { CardsProps } from '@/types/data/overview';
import TicketsCards from './tickets_cards';

const Tickets: React.FC<{ data: CardsProps[] }> = (data) => {
  return (
    <div className="flex flex-col border rounded-[8px] bg-white border-primary-gray-light">
      <div className="flex-1 p-10 pb-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex-1">
            <h1 className="text-[19px] font-[700] text-primary-black mb-2 tracking-[0.4px] leading-normal">
              Unresolved tickets
            </h1>
          </div>
          <div className="flex-none flex justify-end">
            <h1 className="text-[14px] font-[600] text-primary-blue mb-2 tracking-[0.2px] leading-[20px] cursor-pointer">
              View details
            </h1>
          </div>
        </div>
        <h1 className="text-[12px] font-[400] text-secondary-gray-light tracking-[0.1px] leading-[16px]">
          Group:{' '}
          <span className="text-input-placeholder leading-normal font-[600]">
            Support
          </span>
        </h1>
      </div>
      <div className="flex-none grid grid-cols-1 divide-y gap-0">
        {TicketsCards(data)}
      </div>
    </div>
  );
};

export default Tickets;
