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
  state = {
    imgName: "",
  };
  handleFormSubmit = (imgName) => {
    console.log(imgName);
    this.setState({ imgName });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgName={this.state.imgName} />
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={3000}
        />
      </>
    );
  }
}
