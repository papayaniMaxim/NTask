import { useRef } from "react";
import { useDispatch } from "react-redux";
import GalleryImage from "../../store/gallery/galleryImage";
import { addImage } from "../../store/gallery/galleryReducer";
import Button from "../../UI/Button";
import classes from "./ImageInputButton.module.css";

function ImageInputButton() {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Image = reader?.result as string;
      dispatch(addImage(new GalleryImage(base64Image)));
    };
  };

  return (
    <>
      <Button onClick={() => ref.current?.click()} backgroundcolor="blue">
        Добавить фото
      </Button>
      <input
        className={classes.input}
        onChange={handleImageChange}
        accept="image/*"
        ref={ref}
        type="file"
        name="image file"
      />
    </>
  );
}

export default ImageInputButton;
