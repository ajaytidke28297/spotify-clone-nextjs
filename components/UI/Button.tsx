import React from 'react'

function Button(props) {
  return (
    <button className="flex items-center space-x-2 hover:text-white">
      {props.children}
      <p>{props.label}</p>
    </button>
  )
}

export default Button
