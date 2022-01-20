import styled from "@emotion/styled";
export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 0.4s ease;
  z-index: 1000;
  will-change: opacity;
`;
export const ModalContent = styled.div`
  transform: scale(1);
  width: 100%;
  height: 100%;
  pointer-events: none;
  max-width: 100%;
  transition: transform 0.4s ease;
  z-index: 1;
  will-change: transform;
`;
export const ModalImg = styled.img`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 85%;
  max-height: 80%;
  border-radius: 10px;
`;
export const ModalBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: transparent;
  border: none;
  color: white;
  font-size: 35px;
  cursor: pointer;
`;
