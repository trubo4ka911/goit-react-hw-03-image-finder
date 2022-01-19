import PropTypes from "prop-types";
import GalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ items }) => {
  return (
    <ul className="ImageGallery">
      {items.map(({ id, previewURL, tags }) => (
        <GalleryItem key={id} url={previewURL} id={id} tags={tags} />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  items: PropTypes.array,
};
export default ImageGallery;
