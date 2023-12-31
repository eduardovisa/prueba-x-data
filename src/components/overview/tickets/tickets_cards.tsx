import { CardsProps } from '@/types/data/overview';

const TicketsCards: React.FC<{ data: CardsProps[] }> = ({ data }) => {
  return data.map((info, index) => (
    <div
      key={`card-info-tickets-${index}`}
      className="flex justify-between bg-white items-center mb-4 pr-10 pl-10"
    >
      <div className="flex-1">
        <h1 className="text-[14px] font-[600] text-primary-black tracking-[0.2px] mt-6 leading-[20px]">
          {info.label}
        </h1>
      </div>
      <div className="flex-none flex justify-end items-center">
        <h1 className="text-[14px] font-[600] text-secondary-gray-light tracking-[0.2px] mt-6 leading-[20px]">
          {info.secondaryLabel}
        </h1>
      </div>
    </div>
  ));
};

export default TicketsCards;
