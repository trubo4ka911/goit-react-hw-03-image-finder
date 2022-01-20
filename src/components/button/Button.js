import PropTypes from "prop-types";
import { LoadBtn } from "./Button.styled";

const LoadMoreBtn = ({ onLoadMore }) => {
  return <LoadBtn onClick={onLoadMore}>Load More</LoadBtn>;
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default LoadMoreBtn;
