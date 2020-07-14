import React from 'react'

export const CheckIcon = ({fill}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 1H2C1.44772 1 1 1.44772 1 2V10C1 10.5523 1.44772 11 2 11H10C10.5523 11 11 10.5523 11 10V5L12 4V10C12 11.1046 11.1046 12 10 12H2C0.895431 12 0 11.1046 0 10V2C0 0.895431 0.895431 0 2 0H9L8 1ZM5.50006 8.56066L12.0304 2.03033L10.9697 0.969666L5.50006 6.43934L3.53039 4.46967L2.46973 5.53033L5.50006 8.56066Z"
      fill={getFill()}/>
    </svg>
  );
}
