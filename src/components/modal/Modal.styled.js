import styled from "@emotion/styled";
export const ModalBackdrop = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 0.4s ease;
  z-index: 5;
  will-change: opacity;
`;

export const ModalImg = styled.img`
  position: absolute;
  z-index: 10;
  top: 10%;
  left: 7.5%;
  width: 85%;
  height: 80%;
  border-radius: 10px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
`;
