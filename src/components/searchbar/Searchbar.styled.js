import styled from "@emotion/styled";
export const SearchForm = styled.form`
  position: fixed;
  z-index: 1;
  top: 20px;
  right: 20px;
  border-radius: 10px;
  width: 300px;
  background: rgb(163 208 195 / 25%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover,
  &:active {
    background: #a3d0c3;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  height: 42px;
  padding-left: 15px;
`;

export const SearchBtn = styled.button`
  border: none;
  outline: none;
  background: transparent;
  height: 42px;
  width: 42px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 16px;
  color: #f9f0da;
`;
