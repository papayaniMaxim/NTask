import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GalleryImage from "../../store/gallery/galleryImage";
import { checkToggleImage } from "../../store/gallery/galleryReducer";
import classes from "./ImageCard.module.css";
interface ImageCardProps {
  image: GalleryImage;
}
function ImageCard({ image }: ImageCardProps) {
  const dispatch = useDispatch();
  const { id, imageBase64File, checked } = image;

  return (
    <div
      className={checked ? `${classes.imageCard} ${classes.checked}` : classes.imageCard}
      onClick={() => dispatch(checkToggleImage(id))}
    >
      <img
        className={classes.image}
        src={imageBase64File}
        alt="gallery image"
      />
    </div>
  );
}

export default ImageCard;
