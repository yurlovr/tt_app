import React from 'react'
import { PersonIcon } from '../icons/PersonIcon'
import './AuthBlock.scss'

export const AuthBlock = () => {
  const clickExitBtn = () => {
    console.log("EXIT")
  }
  return (
    <>
      <div className="auth">
        <span className="anticon">
          <PersonIcon />
        </span>
        <span className="auth_user">Username@yandex.ru</span>
      </div>
      <p className="company_auth block">
        УК «Лесные озёра»
      </p>
      <div className="block">
        <button className="exit_auth"
                onClick={clickExitBtn}>
          Выход из системы
        </button>
      </div>
    </>
  )
}