import React from 'react'
import { BackButton } from '../BackButton/BackButton'

export const NoFound = () => {
  return (
  <div className="max_height">
    <BackButton home />
    <h2>Страницы не найдено</h2>
  </div>
  )
}