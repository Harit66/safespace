import React from "react";

type Props = {
  color: string;
  width: number;
  height: number;
  className: string;
};

const CloseEye = ({ className, width = 24, color, height = 24 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={width}
      height={height}
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon eye-open-icon ${className} `}
    >
      <path d="M17.5,17.5,6.5,6.5"></path>
      <path d="M1,12s4-8,11-8,11,8,11,8-4,8-11,8S1,12,1,12Z"></path>
      <path d="M12,15c-1.66,0-3-1.34-3-3,0-1.66,1.34-3,3-3"></path>
    </svg>
  );
};

export default CloseEye;
