import React from 'react';

export const TimerIcon = ({fill, small}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width={small ? "14" : "16"} height={small ? "14" : "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 1H10V2H8.5V3.02054C11.5798 3.27461 14 5.85467 14 9C14 12.3137 11.3137 15 8 15C4.68629 15 2 12.3137 2 9C2 5.85467 4.42023 3.27461 7.5 3.02054V2H6V1ZM13 9C13 11.7614 10.7614 14 8 14C5.23858 14 3 11.7614 3 9C3 6.23858 5.23858 4 8 4C10.7614 4 13 6.23858 13 9ZM7.5 5V9V9.23419L7.67991 9.38411L10.3598 11.7682L11 11L8.5 8.76581V5H7.5Z"
      fill={getFill()} fillOpacity="0.6"/>
    </svg>
  );
}
