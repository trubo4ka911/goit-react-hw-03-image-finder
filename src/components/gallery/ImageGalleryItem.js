import PropTypes from "prop-types";
import {} from "./ImageGallery.styled";
const GalleryItem = ({ url, tags, onImageOpen, id }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={url}
        alt={tags || "photo"}
        loading="lazy"
        onClick={onImageOpen}
        id={id}
      />
    </li>
  );
};
GalleryItem.propTypes = {};
export default GalleryItem;

// <li className="ImageGalleryItem">
//   <img
//     className="ImageGalleryItem-image"
//     src={url}
//     alt={tags || "wonderfull photo"}
//     loading="lazy"
//     onClick={onImageOpen}
//     id={id}
//   />
// </li>;
