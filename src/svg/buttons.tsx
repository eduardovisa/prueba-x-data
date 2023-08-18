export const BtnAddIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" rx="8" fill="#F0F1F7" />
      <path
        d="M12 7V17"
        stroke="#9FA2B4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 12L7 12"
        stroke="#9FA2B4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CheckBoxIncompleted = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_584_64)">
        <circle cx="10" cy="10" r="9" stroke="#C5C7CD" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_584_64">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CheckBoxCompleted = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_584_73)">
        <circle cx="10" cy="10" r="10" fill="#3751FF" />
        <path
          d="M5 11L7.92929 13.9293C7.96834 13.9683 8.03166 13.9683 8.07071 13.9293L15 7"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_584_73">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
