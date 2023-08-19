import { BtnAddIcon } from '@/svg/buttons';
import { CardsProps, TasksProps } from '@/types/data/overview';
import TasksCards from './tasks_cards';
import HeaderCard from '../header_card';

const Tasks: React.FC<{ data: (CardsProps & TasksProps)[] }> = (data) => {
  return (
    <div className="flex flex-col border rounded-[8px] bg-white border-primary-gray-light">
      <HeaderCard label="Tasks" caption="Today" viewDetails />
      <div className="flex-none grid grid-cols-1 divide-y gap-0">
        <div className="flex justify-between bg-white items-center mb-4 pr-10 pl-10">
          <div className="flex-1">
            <h1 className="text-[14px] font-[600] text-[#C5C7CD] tracking-[0.2px] mt-6 leading-[20px]">
              Create new task
            </h1>
          </div>
          <div className="flex-none flex justify-end items-center mt-6 cursor-pointer">
            <BtnAddIcon />
          </div>
        </div>
        {TasksCards(data)}
      </div>
    </div>
  );
};

export default Tasks;
