import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import axios from 'axios'
// import MainGridView from './components/MainGridView.js'
// import GridView from './components/GridView.js'
// import SlideshowView from './components/SlideshowView.js'

// var photolinks =     '',    'https://lh3.ggpht.com/p/AF1QipMO_ylP9BAirkXfFpy18WFzQQrhl4-6uJICGnmL=w1400']


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentImage: 0,
      photos: [
        {
          src: 'https://lh3.ggpht.com/p/AF1QipMO_ylP9BAirkXfFpy18WFzQQrhl4-6uJICGnmL=w1400', caption: 'whitneyseiler', title: 'Cavalier', width: 4, height: 3,
        },
        { src: 'https://lh3.ggpht.com/p/AF1QipPIeC9RHwUnc3qqExtiFmwBKFhTWsn8S2YHh7mh=w1400', width: 4, height: 5 },
        { src: 'https://lh3.ggpht.com/p/AF1QipNahLqRuVD5r6oABCOSwC6QXVhPrgd3CE49W_r6=w1400', width: 4, height: 3 },
        { src: 'https://lh3.ggpht.com/p/AF1QipOE3gzwQNa0h3HrrtzitYf0Rtu9V1TYDeUXhOSZ=w1400', width: 3, height: 4 },
        { src: 'https://lh3.ggpht.com/p/AF1QipMqYkI9Trl30tBwaqJiaijGzqVdxj5FM0eQRE3y=w1400', width: 5, height: 3 },
        { src: 'https://lh3.ggpht.com/p/AF1QipNdx7C-wLscfWo0bie9k_dOSeLTZcUNAJhqmvyt=w1400', width: 4, height: 3 },
        { src: 'https://lh3.ggpht.com/p/AF1QipMNPXB-MH2Jb6-s4IopD0zSYSYy8lHDmZcy4fKR=w1400', width: 3, height: 4 },
        { src: 'https://lh3.ggpht.com/p/AF1QipMUlpjPM3gwMRFbC3t8MfPNyjOpGrLAiNqnCSsJ=w216-h384-n', width: 3, height: 4 },
        { src: 'https://lh3.ggpht.com/p/AF1QipPie_rmjp5d4lqLAGIom5F4ruuD4m8Y2jAljxOo=w1400', width: 4, height: 3 },
      ],
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  // send GET request to server on page load
  componentDidMount() {
    const context = this;
    axios.get('/api/photo')
      .then((response) => {
        context.setState({
          data: response.data,
        });
        this.getPhotos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getPhotos(data) {
    console.log(data)
  }

  getFirstFivePhotos() {
    const firstFive = [];
    for (let i = 0; i < 5; i += 1) {
      firstFive.push(this.state.photos[i]);
    }
    return firstFive;
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }


  render() {
    const firstFive = this.getFirstFivePhotos();

    return (
      <div>
        <div className="grid">
          <Gallery photos={firstFive} onClick={this.openLightbox} className="grid" columns={5} rows={1} />
        </div>
        <div>
          <Lightbox
            images={this.state.photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
