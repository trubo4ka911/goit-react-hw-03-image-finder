import { Component } from "react";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import { SearchForm, SearchInput, SearchBtn } from "./Searchbar.styled";
import { FcSearch } from "react-icons/fc";

class Searchbar extends Component {
  state = {
    imgName: "",
  };

  handleNameChange = (e) => {
    this.setState({ imgName: e.target.value.toString().toLowerCase() });
  };
  handleSubmit = (e) => {
    if (this.state.imgName.trim() === "") {
      return toast.error("Write name for searching image!");
    }

    this.props.onSubmit(this.state.imgName);
    this.setState({ imgName: "" });
    e.preventDefault();
  };

  render() {
    return (
      <header className="searchbar">
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <FcSearch />
          </SearchBtn>

          <SearchInput
            className="input"
            type="text"
            name="imgName"
            value={this.state.imgName}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </header>
    );
  }
}

export default Searchbar;
