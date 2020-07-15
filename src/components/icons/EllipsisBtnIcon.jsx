import React from 'react'

export const EllipsisBtnIcon = ({fill, width, height}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width={width ? width : '32'} height={height ? height : '32'} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#DCDEE4"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12ZM17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16ZM16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21Z"
      fill={getFill()}/>
    </svg>
  );
}
