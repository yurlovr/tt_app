import React from 'react'

export const SearchBtnIcon = ({fill}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#DCDEE4"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 11.5C11 11.2239 11.2239 11 11.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H11.5C11.2239 12 11 11.7761 11 11.5ZM10 11C10 10.4477 10.4477 10 11 10H21C21.5523 10 22 10.4477 22 11V12C22 12.3785 21.7897 12.708 21.4795 12.8778C21.2034 13.0289 20.8889 13.1482 20.7 13.4L18 17L18 20.8604L14 22L14 17L11.3 13.4C11.1111 13.1482 10.7966 13.0289 10.5205 12.8778C10.2103 12.708 10 12.3785 10 12V11ZM12.375 13L15 16.5V20.5L17 20V16.5L19.625 13H12.375Z"
      fill={getFill()}/>
    </svg>
  );
}
