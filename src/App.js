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
    if (this.state.page !== prevState.page) {
      this.setState({ loading: true });
      getImages(this.state.imgName, this.state.page)
        .then((newImages) => {
          this.setState({
            images: [...this.state.images, ...newImages.hits],
            total: newImages.total,
            loading: false,
          });
        })
        .catch((error) => this.setState({ error, loading: false }));
    }
    if (this.state.imgName !== prevState.imgName) {
      this.fetchImages(this.state.imgName);
    }
  };

  fetchImages = (imgName) => {
    this.setState({ loading: true, page: 1, images: [] });
    getImages(imgName, 1)
      .then((newImages) => {
        this.setState({
          images: newImages.hits,
          total: newImages.total,
          loading: false,
        });
      })
      .catch((error) => this.setState({ error, loading: false }));
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleFormSubmit = (imgName) => {
    this.setState({ imgName });
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
          <ImageGallery
            items={images}
            onOpen={this.toggleModal}
            getItemContent={this.getItemContent}
          />
        )}
        {loading && <div>Loading...</div>}
        {!!images.length && total >= page * 12 && (
          <LoadMoreBtn onLoadMore={this.loadMore} />
        )}
        {/* <button onClick={this.loadMore}>Load More</button> */}
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={3000}
        />
      </>
    );
  }
}
