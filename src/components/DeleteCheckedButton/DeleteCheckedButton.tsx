import { useState } from "react";
import { useDispatch } from "react-redux";
import PopUpLayout from "../../layouts/PopUpLayout";
import { deleteCheckedImages } from "../../store/gallery/galleryReducer";
import Button from "../../UI/Button";
import ConfirmationDialog from "../ConfirmationDialog";

function DeleteCheckedButton() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => setIsOpen(() => true)} backgroundcolor="red">
        Удалить выделенные
      </Button>
      {isOpen && (
        <PopUpLayout onClose={() => setIsOpen(() => false)}>
          <ConfirmationDialog
            title="Подтвердите действие"
            message={`Вы действительно хотите удалить выделенные изображения?`}
            onCancel={() => setIsOpen(() => false)}
            onConfirm={() => dispatch(deleteCheckedImages())}
          />
        </PopUpLayout>
      )}
    </>
  );
}

export default DeleteCheckedButton;
