import React from 'react';
import Gallery from 'react-photo-gallery';

function MainGridView({ images, photoClick, counterClick, count }) {
  return (
    <div className="gallery" >
      <Gallery
        photos={images}
        onClick={() => photoClick(props.photos.index)}
        columns={5}
      />
      <div className="photo-counter" onClick={() => counterClick()}>
        {count} PHOTOS &#43;
      </div>
    </div>
  );

}

export default MainGridView
