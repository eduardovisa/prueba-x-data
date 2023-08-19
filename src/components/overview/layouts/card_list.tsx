import { HeaderCardProps } from '@/types/components/overview';
import { LayoutProps } from '@/types/components/content_layout';
import HeaderCard from '../header_card';

const CardList = ({
  children,
  label,
  caption,
  subCaption,
  viewDetails,
}: LayoutProps & HeaderCardProps) => {
  return (
    <div className="flex flex-col border rounded-[8px] bg-white border-primary-gray-light">
      <HeaderCard
        label={label}
        caption={caption}
        subCaption={subCaption}
        viewDetails={viewDetails}
      />
      <div className="flex-none grid grid-cols-1 divide-y gap-0">
        {children}
      </div>
    </div>
  );
};

export default CardList;
