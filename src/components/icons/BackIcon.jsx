import React from 'react'

export const BackIcon = ({fill}) => {
  const getFill = () => {
    return fill ? fill : '#272F5A'
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.5 3.49994C9.77614 3.2238 10.2239 3.2238 10.5 3.49994C10.7761 3.77608 10.7761 4.2238 10.5 4.49994L7 7.99994L10.5 11.4999C10.7761 11.7761 10.7761 12.2238 10.5 12.4999C10.2239 12.7761 9.77614 12.7761 9.5 12.4999L5 7.99994L9.5 3.49994Z"
      fill={getFill()}/>
    </svg>
  )
}
