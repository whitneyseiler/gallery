import React from 'react'
import App from '../index';

function MainGridView({ photos, handleClick }) {
  return (
    <div className="grid">
      {photos.map((photo, index) => (
        <div className="photos">
          <img className="cover" src={photo.src} onClick={() => props.handleClick()} key={index} />
        </div>
      ))}
    </div>
  )
}

export default MainGridView
