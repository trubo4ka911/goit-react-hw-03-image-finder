import styled from "@emotion/styled";

export const LoadBtn = styled.button`
  display: block;
  border: none;
  background: rgb(163 208 195 / 25%);
  color: #757575;
  width: 150px;
  height: 42px;
  border-radius: 10px;
  margin: 0 auto;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover,
  &:active {
    background: #a3d0c3;
    color: black;
  }
`;
