import React from 'react'

export const AttentionIcon = ({fill}) => {
  const getFill = () => {
    return fill ? fill : '#FC525B'
  }
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.0075 11.04L7 0.960001L0.992464 11.04L13.0075 11.04ZM7.85822 0.480001C7.47679 -0.16 6.52321 -0.16 6.14178 0.48L0.134246 10.56C-0.247185 11.2 0.229602 12 0.992464 12H13.0075C13.7704 12 14.2472 11.2 13.8658 10.56L7.85822 0.480001ZM7 3.5C7.27614 3.5 7.5 3.72386 7.5 4V7.5C7.5 7.77614 7.27614 8 7 8C6.72386 8 6.5 7.77614 6.5 7.5V4C6.5 3.72386 6.72386 3.5 7 3.5ZM7 10C7.27614 10 7.5 9.77614 7.5 9.5C7.5 9.22386 7.27614 9 7 9C6.72386 9 6.5 9.22386 6.5 9.5C6.5 9.77614 6.72386 10 7 10Z"
        fill={getFill()}/>
    </svg>
  );
}
