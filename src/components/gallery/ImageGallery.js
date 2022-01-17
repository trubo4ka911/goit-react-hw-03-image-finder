// import PropTypes from "prop-types";
// import GalleryItem from "./ImageGalleryItem";

// const ImageGallery = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item) => (
//         <GalleryItem />
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;

import { Component } from "react";
import GalleryItem from "./ImageGalleryItem";

export default class ImageGallery extends Component {
  state = {
    imageItem: null,

    error: null,
    status: "idle",
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imgName;
    const nextName = this.props.imgName;
    if (prevName !== nextName) {
      this.setState({ loading: true, imageItem: null });
      fetch(
        `https://pixabay.com/api/?key=24184447-ca4d69a4e7056aa9c5fd9d78f/${nextName}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`No images with name ${nextName}`));
        })
        .then((image) => this.setState({ image }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { imageItem, error, status } = this.state;

    if (status === "idle") {
      return <div>write smt!</div>;
    }
    if (status === "pending") {
      return <div>Loading...</div>;
    }
    if (status === "rejected") {
      return <h1>{error.message}</h1>;
    }
    if (status === "resolved") {
      return (
        <ul className="ImageGallery">
          {imageItem.map(({ id, webformatURL, tags }) => (
            <GalleryItem key={id} url={webformatURL} id={id} tags={tags} />
          ))}
        </ul>
      );
    }
  }
}
