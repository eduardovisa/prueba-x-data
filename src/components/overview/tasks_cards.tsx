import { CheckBoxCompleted, CheckBoxIncompleted } from '@/svg/buttons';
import { CardsProps, TasksProps } from '@/types/data/overview';
import TaskBadge from './task_badge';

const TasksCards: React.FC<{ data: (CardsProps & TasksProps)[] }> = (data) => {
  let card_list: JSX.Element[] = [];

  data.data.map((info, index) => {
    card_list.push(
      <div
        key={`card-info-tickets-${index}`}
        className="flex justify-between bg-white items-center mb-4 pr-10 pl-10"
      >
        <div className="flex-none mt-6 mr-4">
          {info.completed ? <CheckBoxCompleted /> : <CheckBoxIncompleted />}
        </div>
        <div className="flex-auto">
          <h1 className="text-[14px] font-[600] text-primary-black tracking-[0.2px] mt-6 leading-[20px]">
            {info.label}
          </h1>
        </div>
        <div className="flex-1 flex justify-end items-center">
          {TaskBadge(info.secondaryLabel)}
        </div>
      </div>
    );
  });

  return card_list;
};

export default TasksCards;
