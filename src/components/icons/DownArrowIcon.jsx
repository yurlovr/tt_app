import React from 'react'

export const DownArrowIcon = ({fill}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.5 6.5C3.22386 6.22386 3.22386 5.77614 3.5 5.5C3.77614 5.22386 4.22386 5.22386 4.5 5.5L8 9L11.5 5.5C11.7761 5.22386 12.2239 5.22386 12.5 5.5C12.7761 5.77614 12.7761 6.22386 12.5 6.5L8 11L3.5 6.5Z"
      fill={getFill()} fillOpacity="0.8"/>
    </svg>
  )
}
