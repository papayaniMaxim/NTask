import { useDispatch } from "react-redux";
import { clearImageChecks } from "../../store/gallery/galleryReducer";
import Button from "../../UI/Button";

function ClearChecksButton() {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(clearImageChecks())} backgroundcolor="blue">
      Снять выделение
    </Button>
  );
}

export default ClearChecksButton;
