import PropTypes from "prop-types";
import GalleryItem from "./ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";

const ImageGallery = ({ items, getItemContent }) => {
  return (
    <GalleryList>
      {items.map(({ id, webformatURL, tags, largeImageURL }) => (
        <GalleryItem
          key={id}
          url={webformatURL}
          id={id}
          tags={tags}
          largeImageURL={largeImageURL}
          getItemContent={getItemContent}
        />
      ))}
    </GalleryList>
  );
};
ImageGallery.propTypes = {
  items: PropTypes.array,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGallery;
