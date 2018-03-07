import React from 'react';
import Gallery from '../../../lib/react-photo-gallery';
import { Container, Header, Portal } from '../../../lib/react-images';

function GridView(props) {
	const gallery = (
		<Gallery
			photos={props.images}
			onClick={props.toggleLightbox}
			isLightboxOpen={props.isOpen}
			gridviewIsOpen={props.gridviewIsOpen}
			columns={5}
		/>);

	const header = (
		<Header customControls={customControls} onClose={onClose} />
	);

  const renderDialog = () => (
    <Container key="open">
      <div>
        <div className="grid-container">
          {header}
          {gallery}
        </div>
      </div>
    </Container>
  );


  return (
		<Portal>
    	{renderDialog()}
  	</Portal>);
}

export default GridView;
