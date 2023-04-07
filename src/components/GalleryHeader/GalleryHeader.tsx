import GalleryActions from "../GalleryActions";
import classes from "./GalleryHeader.module.css";

function GalleryHeader() {
  return (
    <div className={classes.header}>
      <h1>Галерея</h1>
      <GalleryActions />
    </div>
  );
}

export default GalleryHeader;
