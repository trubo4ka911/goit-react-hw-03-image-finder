import styled from "@emotion/styled";
export const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 0;
  margin: 0 auto 30px;
  list-style: none;
  max-width: calc(100vw - 80px);
`;
export const ImageItem = styled.li`
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
