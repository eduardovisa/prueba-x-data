import { DividerProps } from '@/types/components/divider';

export const DividerHorizontalIcon = () => {
  return (
    <svg
      key={`divider-nav`}
      xmlns="http://www.w3.org/2000/svg"
      width="255"
      height="2"
      viewBox="0 0 255 2"
      fill="none"
      className="mt-6 hidden sm:block mb-6"
    >
      <g opacity="0.06">
        <path d="M0 1H255" stroke="#DFE0EB" />
      </g>
    </svg>
  );
};

export const DividerVerticalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="32"
      viewBox="0 0 2 32"
      fill="none"
    >
      <path d="M1 0V32" stroke="#DFE0EB" />
    </svg>
  );
};

export const DividerMini = ({ color }: DividerProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="2"
      viewBox="0 0 18 2"
      fill="none"
    >
      <path d="M1 1H17" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
