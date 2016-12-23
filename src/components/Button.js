import React from 'react'
import '../styles/forms/form.css'

const Button = ( props ) => {
  const { type, children } = props

  return (
      <button className={`button button__${type}`}>{children}</button>
  )
}

export default Button
