import React from 'react'
import './Button.scss'

const classNames = require('classnames');

export const Button = (props) => {
  const {type, onClick, disabled, className} = props
  return (
    <button className={classNames(type, {className})}
            onClick={onClick ? onClick : () => {}}
            disabled={disabled}
    >
      {props.children}
    </button>
  )
}