import { CardsProps } from '@/types/data/overview';
import TrendsCards from './trends_cards';
import { DividerMini } from '@/svg/divider';
import imgGraph from '@/assets/trends_graph.png';
import Image from 'next/image';
import HeaderCard from '../header_card';

const Trends: React.FC<{ data: CardsProps[] }> = (data) => {
  return (
    <div className="flex mt-10 border rounded-[8px] bg-white border-primary-gray-light justify-center">
      <div className="flex-1 flex flex-col">
        <div className="flex-none">
          <HeaderCard
            label="Today’s trends"
            caption="as of 25 May 2019, 09:41 PM"
          />
        </div>
        <div className="flex flex-none mb-6 justify-center lg:justify-end lg:mr-10">
          <div className="flex items-center mr-10">
            <DividerMini color="#3751FF" />
            <h1 className="ml-2 text-[12px] font-[600] text-secondary-gray-light tracking-[0.1px] leading-normal">
              Today
            </h1>
          </div>
          <div className="flex items-center">
            <DividerMini color="#DFE0EB" />
            <h1 className="ml-2 text-[12px] font-[600] text-secondary-gray-light tracking-[0.1px] leading-normal">
              Yesterday
            </h1>
          </div>
        </div>
        <div
          className={`mb-5 flex-1 h-full w-full bg-center bg-contain bg-no-repeat`}
          style={{ backgroundImage: `url(${imgGraph.src})`, width: '100%' }}
        >
          <Image
            className="sm:hidden"
            src={imgGraph}
            alt=""
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex-none">
        <div className="hidden sm:block grid grid-cols-1 divide-y w-[250px] lg:w-[342px] text-center gap-0">
          {TrendsCards(data)}
        </div>
      </div>
    </div>
  );
};

export default Trends;
