import PropTypes from "prop-types";
import {} from "./ImageGallery.styled";
const GalleryItem = ({ url, tags, onImageOpen, id }) => {
  return (
    <li>
      <img src={url} alt={tags || "photo"} onClick={onImageOpen} id={id} />
    </li>
  );
};
GalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
};
export default GalleryItem;
