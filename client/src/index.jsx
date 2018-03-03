import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-photo-gallery';
import axios from 'axios';
import GridView from './components/GridView.jsx';
import SlideShowView from './components/SlideShowView.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentSite: 'a9dbcfebeadf2c2e488dd47116305abb181a0cbb',
      siteName: '',
      reviews: [],
      photos: [],
      currentImage: 0,
      lightboxIsOpen: false,
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
          siteName: response.data[0].place_name,
        });
      })
      .then(() => {
        this.getReviews();
        this.getPhotos();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getReviews() {
    const siteReviews = this.state.data.reviews;
    this.setState({
      reviews: siteReviews,
    });
  }

  getRandomCaption() {
    const reviews = this.state.reviews;
    const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
    const name = randomReview.name.toUpperCase();
    const randomCaption = (
      <div className="author-details">
        <img src={randomReview.avatar} alt="" className="avatar" />
        <div className="name">{name}</div>
      </div>);
    return randomCaption;
  }

  getPhotos() {
    const urls = [];
    const pics = this.state.data.photos;

    for (let i = 0; i < pics.length; i += 1) {
      const url = {
        src: pics[i].url,
        width: pics[i].width,
        height: pics[i].height,
        caption: this.getRandomCaption(),
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
    const isOpen = this.state.lightboxIsOpen;
    
    return (
      <div>
        <div className="gallery" >
          <Gallery
            photos={this.state.mainGridImages}
            onClick={this.openLightbox}
            columns={5}
          />
          <div className="photo-counter" onClick={this.counterClick}>
            {photoCount} PHOTOS &#43;
          </div>
        </div>
        <SlideShowView
          photos={this.state.photos}
          closeLightbox={this.closeLightbox}
          clickPrev={this.gotoPrevious}
          clickNext={this.gotoNext}
          current={this.state.currentImage}
          isLightboxOpen={this.state.lightboxIsOpen}
          placeName={this.state.siteName}
        />
        <GridView
          photos={this.state.photos}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
