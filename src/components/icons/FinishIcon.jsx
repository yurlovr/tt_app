import React from 'react'

export const FinishIcon = ({fill}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.1751 1.61284L6.00001 15H7L5.33334 9.16667L7 10V9H9V10L11 11V9H13V11H15V9H13V7H15V5H13V4L11 3V5H9V3H7V5H5.00001V3H3.57143L3.09963 1.34869C3.04066 1.1423 2.85202 1 2.63737 1C2.31796 1 2.08735 1.30572 2.1751 1.61284ZM4.14286 5H5.00001V7H4.71429L4.14286 5ZM5.00001 8V7H7V9H5.28572L5.00001 8ZM9 7H7V5H9V7ZM11 7V9H9V7H11ZM11 7V5H13V7H11Z"
      fill={getFill()} fillOpacity="0.6"/>
    </svg>
  );
}
