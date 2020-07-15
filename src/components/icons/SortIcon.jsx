import React from 'react';

export const SortIcon = ({fill}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 3H14V4H2V3ZM2 6H12V7H2V6ZM10 9H2V10H10V9ZM2 12H7V13H2V12Z"
      fill={getFill()} fillOpacity="0.8"/>
    </svg>
  );
}
