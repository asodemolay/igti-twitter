import React from 'react'
import './tweet.css'

export default function Tweet({ tweet, onDelete }) {

  const handleDeleteClick = () => {
    onDelete(tweet.id);
  }

  return (
    <div className="boxShadow tweet flexRow flexMiddle">
      <blockquote>{tweet.value}</blockquote>
      <span className="material-icons" style={{ cursor: 'pointer', marginLeft: '16px' }} onClick={handleDeleteClick}>delete</span>
    </div>
  )
}
