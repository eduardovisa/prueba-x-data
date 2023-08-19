import { CardsProps } from '@/types/data/overview';
import React from 'react';

const SimpleCards: React.FC<{ data: CardsProps[] }> = (data) => {
  let card_list: JSX.Element[] = [];

  data.data.map((cardInfo, index) => {
    card_list.push(
      <div
        key={`card-info-overview-${index}`}
        className="flex justify-center  h-134 cursor-pointer flex-col items-center border rounded-[8px] bg-white border-primary-gray-light hover:border-primary-blue hover:border-2 group"
      >
        <div className="flex-1">
          <h1 className="text-[19px] font-[700] text-secondary-gray-light tracking-[0.4px] mt-6 leading-normal group-hover:text-primary-blue">
            {cardInfo.label}
          </h1>
        </div>
        <div className="flex-1">
          <h1 className="text-[40px] font-[700] text-primary-black tracking-[1px] mb-6 leading-normal group-hover:text-primary-blue">
            {cardInfo.secondaryLabel}
          </h1>
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-between w-full mt-10 grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-4 justify-items-stretch">
      {card_list}
    </div>
  );
};

export default SimpleCards;
