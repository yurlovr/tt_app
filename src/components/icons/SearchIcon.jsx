import React from 'react'

export const SearchIcon = ({fill}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7ZM10.2767 10.7767C9.3992 11.5388 8.25346 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 8.25346 11.5388 9.3992 10.7767 10.2767L11.5 11H12L14 13C14.2761 13.2761 14.2761 13.7239 14 14C13.7239 14.2761 13.2761 14.2761 13 14L11 12V11.5L10.2767 10.7767Z"
      fill={getFill()} fillOpacity="0.6"/>
    </svg>
  );
}
