class GalleryImage {
  constructor(imageBase64File: string) {
    this.imageBase64File = imageBase64File;
    this.id = (Math.random() * Date.now()).toFixed().toString();
  }
  checked = false;
  imageBase64File;
  id;
}
export default GalleryImage;
