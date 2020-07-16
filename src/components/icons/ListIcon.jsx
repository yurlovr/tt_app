import React from 'react'

export const ListIcon = ({fill}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 2.5C3 2.77614 2.77614 3 2.5 3C2.22386 3 2 2.77614 2 2.5C2 2.22386 2.22386 2 2.5 2C2.77614 2 3 2.22386 3 2.5ZM4 2.5C4 3.32843 3.32843 4 2.5 4C1.67157 4 1 3.32843 1 2.5C1 1.67157 1.67157 1 2.5 1C3.32843 1 4 1.67157 4 2.5ZM15 2H5V3H15V2ZM2.5 8C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7C2.22386 7 2 7.22386 2 7.5C2 7.77614 2.22386 8 2.5 8ZM2.5 9C3.32843 9 4 8.32843 4 7.5C4 6.67157 3.32843 6 2.5 6C1.67157 6 1 6.67157 1 7.5C1 8.32843 1.67157 9 2.5 9ZM15 7H5V8H15V7ZM2.5 13C2.77614 13 3 12.7761 3 12.5C3 12.2239 2.77614 12 2.5 12C2.22386 12 2 12.2239 2 12.5C2 12.7761 2.22386 13 2.5 13ZM2.5 14C3.32843 14 4 13.3284 4 12.5C4 11.6716 3.32843 11 2.5 11C1.67157 11 1 11.6716 1 12.5C1 13.3284 1.67157 14 2.5 14ZM15 12H5V13H15V12Z"
      fill={getFill()}/>
    </svg>
  )
}
