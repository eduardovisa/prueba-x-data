import { CardsProps } from '@/types/data/overview';

const TrendsCards: React.FC<{ data: CardsProps[] }> = (data) => {
  let card_list: JSX.Element[] = [];

  data.data.map((info, index) => {
    card_list.push(
      <div
        key={`card-info-overview-${index}`}
        className="flex item-center justify-center flex-col items-center border bg-white border-primary-gray-light"
      >
        <div className="flex-1">
          <h1 className="text-[16px] font-[600] text-secondary-gray-light tracking-[0.3px] mt-6 leading-[22px]">
            {info.label}
          </h1>
        </div>
        <div className="flex-1">
          <h1 className="text-[24px] font-[700] text-primary-black tracking-[0.3px] mb-6 leading-normal">
            {info.secondaryLabel}
          </h1>
        </div>
      </div>
    );
  });

  return card_list;
};

export default TrendsCards;
