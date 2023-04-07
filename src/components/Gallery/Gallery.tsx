import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ImageCard from "../ImageCard";
import Message from "../Message";
import classes from "./Gallery.module.css";

function Gallery() {
  const images = useSelector((state: RootState) => state.gallery.images);
  if (images.length){
    return (
      <div className={classes.gallery}>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    );}
  return <Message>Галерея пуста</Message>;
}

export default Gallery;
