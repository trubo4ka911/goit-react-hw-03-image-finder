import { Component } from "react";
import propTypes from "prop-types";
import { toast } from "react-toastify";

class Searchbar extends Component {
  state = {
    imgName: "",
  };

  handleNameChange = (e) => {
    this.setState({ imgName: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.imgName.trim() === "") {
      return toast.error("Write name for searching image!");
    }

    this.props.onSubmit(this.state.imgName);
    this.setState({ imgName: "" });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="imgName"
            value={this.state.imgName}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
