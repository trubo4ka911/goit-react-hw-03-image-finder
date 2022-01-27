import { Component } from "react";
import { ToastContainer } from "react-toastify";
import { getImages } from "./api";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./components/searchbar/Searchbar";
import ImageGallery from "./components/gallery/ImageGallery";
import Modal from "./components/modal/Modal";
import LoadMoreBtn from "./components/button/Button";

export default class App extends Component {
  state = {
    imgName: "",
    images: [],
    page: 1,
    total: 0,
    error: null,
    loading: false,
    showModal: false,
    modalContent: "",
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.state.page !== prevState.page ||
      this.state.imgName !== prevState.imgName
    ) {
      this.fetchImages();
    }
  };

  fetchImages = () => {
    this.setState({ loading: true });
    getImages(this.state.imgName, this.state.page)
      .then((newImages) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...newImages.hits],
          total: newImages.total,
          loading: false,
        }));
      })
      .catch((error) => this.setState({ error, loading: false }));
  };

  loadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleFormSubmit = (imgName) => {
    this.setState({ imgName, page: 1, images: [], total: 0 });
  };
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  getItemContent = (modalContent) => {
    this.setState({ modalContent, showModal: true });
  };
  render() {
    const { loading, images, showModal, modalContent, total, page } =
      this.state;
    return (
      <>
        {showModal && <Modal onClose={this.toggleModal} data={modalContent} />}
        <Searchbar onSubmit={this.handleFormSubmit} />
        {!!images.length && (
          <ImageGallery items={images} getItemContent={this.getItemContent} />
        )}
        {loading && <div>Loading...</div>}
        {!!images.length && total >= page * 12 && (
          <LoadMoreBtn onLoadMore={this.loadMore} />
        )}
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={3000}
        />
      </>
    );
  }
}
