import React from "react";
import {IconProps} from "../types";

export function ArrowIcon(props: IconProps) {
  const {className = "", height = "20", width = "20"} = props;
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
      <path d="M12.1 6L13.5885 7.52667L10.4165 10.78L7.8165 8.11333L3 13.06L3.9165 14L7.8165 10L10.4165 12.6667L14.5115 8.47333L16 10V6H12.1Z" fill="white"/>
    </svg>
  )
}