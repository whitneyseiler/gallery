import React from 'react';
import Gallery from '../../../lib/react-photo-gallery';
import { Container, Header, Portal } from '../../../lib/react-images';

function GridView(props) {
	return (
		<Portal>
	    <Container key="open">
	      <div>
	        <div className="grid-container">
	          <Header customControls={customControls} onClose={onClose} />
						<Gallery
							photos={props.images}
							onClick={props.toggleLightbox}
							isLightboxOpen={props.isOpen}
							gridviewIsOpen={props.gridviewIsOpen}
							columns={5}
						/>
	        </div>
	      </div>
	    </Container>
		</Portal>
  );
}

export default GridView;
