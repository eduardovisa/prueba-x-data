import { CardsProps, TasksProps } from '@/types/data/overview';
import { CheckBoxCompleted, CheckBoxIncompleted } from '@/svg/buttons';
import TaskBadge from './task_badge';

const TasksCards: React.FC<{ data: (CardsProps & TasksProps)[] }> = ({
  data,
}) => {
  return data.map((info, index) => (
    <div
      key={`card-info-tickets-${index}`}
      className="flex justify-between bg-white items-center mb-4 pr-10 pl-10"
    >
      <div className="flex-none mt-6 mr-4 cursor-pointer">
        {info.completed ? <CheckBoxCompleted /> : <CheckBoxIncompleted />}
      </div>
      <div className="flex-auto">
        <h1 className="text-[14px] font-[600] text-primary-black tracking-[0.2px] mt-6 leading-[20px]">
          {info.label}
        </h1>
      </div>
      <div className="flex-none flex justify-end items-center">
        {TaskBadge(info.secondaryLabel)}
      </div>
    </div>
  ));
};

export default TasksCards;
