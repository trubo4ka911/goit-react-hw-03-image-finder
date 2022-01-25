export const getImages = (imgName, page) =>
  fetch(
    `https://pixabay.com/api/?q=${imgName}&page=${page}&key=24184447-ca4d69a4e7056aa9c5fd9d78f&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No images with name ${imgName}`));
  });
