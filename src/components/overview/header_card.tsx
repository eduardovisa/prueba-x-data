import { HeaderCardProps } from '@/types/components/overview';

const HeaderCard = ({
  label,
  caption,
  subCaption,
  viewDetails,
}: HeaderCardProps) => {
  return (
    <div className="flex-1 p-10 pb-3">
      <div className="flex w-full items-center justify-between">
        <div className="flex-1">
          <h1 className="text-[19px] font-[700] text-primary-black mb-2 tracking-[0.4px] leading-normal">
            {label}
          </h1>
        </div>
        {viewDetails && (
          <div className="flex-none flex justify-end">
            <h1 className="text-[14px] font-[600] text-primary-blue mb-2 tracking-[0.2px] leading-[20px] cursor-pointer">
              View details
            </h1>
          </div>
        )}
      </div>
      <h1 className="text-[12px] font-[400] text-secondary-gray-light tracking-[0.1px] leading-[16px]">
        {caption}{' '}
        {subCaption && (
          <span className="text-input-placeholder leading-normal font-[600]">
            {subCaption}
          </span>
        )}
      </h1>
    </div>
  );
};
export default HeaderCard;
