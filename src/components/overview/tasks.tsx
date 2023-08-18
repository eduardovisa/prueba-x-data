import { CardsProps, TasksProps } from '@/types/data/overview';
import { BtnAddIcon } from '@/svg/buttons';
import TasksCards from './tasks_cards';

const Tasks: React.FC<{ data: (CardsProps & TasksProps)[] }> = (data) => {
  return (
    <div className="flex flex-col border rounded-[8px] bg-white border-primary-gray-light">
      <div className="flex-1 p-10 pb-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex-1">
            <h1 className="text-[19px] font-[700] text-primary-black mb-2 tracking-[0.4px] leading-normal">
              Tasks
            </h1>
          </div>
          <div className="flex-none flex justify-end">
            <h1 className="text-[14px] font-[600] text-primary-blue mb-2 tracking-[0.2px] leading-[20px] cursor-pointer">
              View details
            </h1>
          </div>
        </div>
        <h1 className="text-[12px] font-[400] text-secondary-gray-light tracking-[0.1px] leading-[16px]">
          Today
        </h1>
      </div>
      <div className="flex-none grid grid-cols-1 divide-y gap-0">
        <div className="flex justify-between bg-white items-center mb-4 pr-10 pl-10">
          <div className="flex-1">
            <h1 className="text-[14px] font-[600] text-[#C5C7CD] tracking-[0.2px] mt-6 leading-[20px]">
              Create new task
            </h1>
          </div>
          <div className="flex-1 flex justify-end items-center mt-6 cursor-pointer">
            <BtnAddIcon />
          </div>
        </div>
        {TasksCards(data)}
      </div>
    </div>
  );
};

export default Tasks;
