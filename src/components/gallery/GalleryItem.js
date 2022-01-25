import PropTypes from "prop-types";
import { ImageItem, Image } from "./ImageGallery.styled";
const GalleryItem = ({ url, tags, id, largeImageURL, getItemContent }) => {
  return (
    <ImageItem>
      <Image
        src={url}
        alt={tags || "photo"}
        id={id}
        onClick={() => getItemContent(largeImageURL)}
      />
    </ImageItem>
  );
};
GalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  id: PropTypes.number.isRequired,
  getItemContent: PropTypes.func.isRequired,
};
export default GalleryItem;
