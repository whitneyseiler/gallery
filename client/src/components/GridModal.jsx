import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import Gallery from '../../../lib/react-photo-gallery';

function ModalGridView(props) {
  const { open } = props.gridviewOpen;
  return (
    <div>
      <button onClick={this.onOpenModal}>Open modal</button>
      <Modal open={open} onClose={props.onModalClose} slowCloseIcon closeOnEsc>
        <Gallery
          photos={props.photos}
          onClick={props.toggleLightbox}
          columns={5}
        />
      </Modal>
    </div>
  );
}

ModalGridView.propTypes = {
  photos: PropTypes.shape.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
  gridviewOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default ModalGridView;
