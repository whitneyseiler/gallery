import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import axios from 'axios';
import MainGridView from './components/MainGridView';
import GridView from './components/GridView';
// import SlideshowView from './components/SlideshowView.js'

// var photolinks =     '',    'https://lh3.ggpht.com/p/AF1QipMO_ylP9BAirkXfFpy18WFzQQrhl4-6uJICGnmL=w1400']


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSite: 'a9dbcfebeadf2c2e488dd47116305abb181a0cbb',
      currentImage: 0,
      data: [],
      photos: [],
      mainGridImages: [],
    };
    this.counterClick = this.counterClick.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  // send GET request to server on page load
  componentDidMount() {
    const context = this;
    const id = this.state.currentSite;

    axios.get('/api/photo', {
      params: {
        place_id: id,
      },
    })
      .then((response) => {
        context.setState({
          data: response.data[0],
        });
      })
      .then(() => {
        this.getPhotos();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getPhotos() {
    const urls = [];
    const pics = this.state.data.photos;

    for (let i = 0; i < pics.length; i += 1) {
      const url = {
        src: pics[i].url,
        width: pics[i].width,
        height: pics[i].height,
        caption: null,
      };
      urls.push(url);
    }
    this.setState({
      photos: urls,
    });
    this.populateMainGrid();
  }

  populateMainGrid() {
    const display = [];
    for (let i = 0; i < 8; i += 1) {
      display.push(this.state.photos[i]);
    }
    this.setState({ mainGridImages: display });
  }

  counterClick() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true,
    });
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
    const photoCount = this.state.photos.length;

    return (
      <div>
        <div className="gallery" >
          <Gallery
            photos={this.state.mainGridImages}
            onClick={this.openLightbox}
            columns={5}
            rows={2}
          />
          <div className="photo-counter" onClick={this.counterClick}>
            {photoCount} PHOTOS &#43;
          </div>
        </div>
        <div>
          <Lightbox
            // images={this.state.photos.map(x => ({ caption: x.caption }))}
            images={this.state.photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            className="image"
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
