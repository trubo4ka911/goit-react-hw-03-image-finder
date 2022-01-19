import "./App.css";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./components/searchbar/Searchbar";
import ImageGallery from "./components/gallery/ImageGallery";
// function App() {
//   return (
//     <>
//       <Container>
//         <Searchbar></Searchbar>
//       </Container>
//     </>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

export default class App extends Component {
  // state = {
  //   imgName: "",
  // };

  state = {
    imgName: "",
    images: [],
    page: 1,
    total: 0,
    error: null,
    loading: false,
  };

  fetchImages = (imgName) => {
    this.setState({ loading: true, page: 1, images: [] });
    fetch(
      `https://pixabay.com/api/?q=${imgName}&page=1&key=24184447-ca4d69a4e7056aa9c5fd9d78f&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`No images with name ${imgName}`));
      })
      .then((newImages) => {
        console.log(newImages);
        this.setState({
          images: newImages.hits,
          total: newImages.total,
          loading: false,
        });
      })
      .catch((error) => this.setState({ error, loading: false }));
  };

  loadMore = () => {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?q=${this.state.imgName}&page=${++this.state
        .page}&key=24184447-ca4d69a4e7056aa9c5fd9d78f&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`No images with name ${this.state.imgName}`)
        );
      })
      .then((newImages) => {
        this.setState({
          images: [...this.state.images, ...newImages.hits],
          total: newImages.total,
          loading: false,
          page: this.state.page + 1,
        });
      })
      .catch((error) => this.setState({ error, loading: false }));
  };

  handleFormSubmit = (imgName) => {
    console.log(imgName);
    this.fetchImages(imgName);
    this.setState({ imgName });
  };

  render() {
    const { loading, images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {!loading && !images.length ? (
          <div>write smt!</div>
        ) : (
          <>
            <ImageGallery items={images} />
            {loading && <div>Loading...</div>}
          </>
        )}
        <button onClick={this.loadMore}>Load More</button>
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={3000}
        />
      </>
    );
  }
}
