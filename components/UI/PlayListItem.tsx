import React from 'react'

function PlayListItem(props) {
  return (
    <p onClick={props.onClick} className="cursor-pointer hover:text-white">
      {props.playListName}
    </p>
  )
}

export default PlayListItem
