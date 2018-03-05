import Lightbox from 'react-images';
import React from 'react';

function SlideShowView(props) {
  const gridViewButton = <button className="grid-view-button"><i class="fa fa-th fa-2x"></i></button>;
  const name = props.placeName.toUpperCase();
  const placeName = <div className="place-name">{name}</div>;

  return (
    <div id="slideshow">
      <Lightbox
        images={props.photos}
        onClose={() => props.closeLightbox()}
        onClickPrev={() => props.clickPrev()}
        onClickNext={() => props.clickNext()}
        currentImage={props.current}
        isOpen={props.isLightboxOpen}
        height={400}
        width={1600}
        customControls={[gridViewButton, placeName]}
        className="image"
      />
    </div>
  );
}

export default SlideShowView
