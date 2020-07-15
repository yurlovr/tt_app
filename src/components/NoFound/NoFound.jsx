import React from 'react'
import { BackButton } from '../BackButton/BackButton'

export const NoFound = () => {
  return (
  <>
    <BackButton prevPage={"/"} />
    <h2>Страницы не найдено</h2>
  </>
  )
}