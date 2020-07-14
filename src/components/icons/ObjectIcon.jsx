import React from 'react';

export const ObjectIcon = ({fill}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5 1C4.44772 1 4 1.44772 4 2V7H2C1.44772 7 1 7.44772 1 8V14H15V5.5C15 4.94772 14.5523 4.5 14 4.5H12V2C12 1.44772 11.5523 1 11 1H5ZM12 5.5V13H14V5.5H12ZM2 8H4V13H2V8ZM11 2H5V13H7V11H9V13H11V2ZM9 6H7V7H9V6ZM7 4H9V5H7V4ZM9 8H7V9H9V8Z"
      fill={getFill()}/>
    </svg>
  );
}
