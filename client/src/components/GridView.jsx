import React from 'react';
import PropTypes from 'prop-types';
import Gallery from '../../../lib/react-photo-gallery';

function GridView({
  images, isOpen, toggleLightbox, gridviewIsOpen,
}) {
  return (
    <div className="grid-view">
      <Gallery
        photos={images}
        onClick={toggleLightbox}
        isLightboxOpen={isOpen}
        gridviewIsOpen={gridviewIsOpen}
        columns={5}
      />
    </div>
  );
}

GridView.propTypes = {
  images: PropTypes.shape.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
  gridviewIsOpen: PropTypes.bool.isRequired,
};

export default GridView;
