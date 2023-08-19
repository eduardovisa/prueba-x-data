import { tasksPriority } from '@/utils/data/overview/tasks';

const TaskBadge = (status: string) => {
  const priority = tasksPriority.filter(
    (t) => t.label.toLowerCase() === status.toLowerCase()
  );

  return (
    <h1 className="text-[11px] font-[700] tracking-[0.5px] mt-6 leading-[20px]">
      <span
        className="rounded-[8px] p-2"
        style={{
          backgroundColor: `${priority[0].secondaryLabel}`,
          color: `${status.toLowerCase() !== 'default' ? 'white' : '#9FA2B4'}`,
        }}
      >
        {status.toUpperCase()}
      </span>
    </h1>
  );
};

export default TaskBadge;
