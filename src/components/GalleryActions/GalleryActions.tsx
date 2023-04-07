import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ClearChecksButton from "../ClearChecksButton";
import DeleteCheckedButton from "../DeleteCheckedButton";
import ImageInputButton from "../ImageInputButton";
import classes from "./GalleryActions.module.css";

function GalleryActions() {
  const images = useSelector((state: RootState) => state.gallery.images);

  return (
    <div className={classes.actions}>
      {images.find((image) => image.checked) ? (
        <>
          <DeleteCheckedButton />
          <ClearChecksButton />
        </>
      ) : (
        <ImageInputButton />
      )}
    </div>
  );
}

export default GalleryActions;
