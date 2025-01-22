import React from 'react';
import './style.scss'

export const Button = ({className, text, children}) => {
  return (
    <>
    <button className={`btn ${className}`}>{text ? text : children}</button>
    </>
  )
}
