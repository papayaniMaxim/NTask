import Button from "../../UI/Button";
import classes from "./ConfirmationDialog.module.css";

interface ConfirmationDialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmationDialog({
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  function handleConfirm() {
    onConfirm();
    onCancel();
  }

  function handleCancel() {
    onCancel();
  }

  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      <p>{message}</p>
      <div className={classes.footer}>
        <Button backgroundcolor="gray" onClick={handleCancel}>
          Отмена
        </Button>
        <Button backgroundcolor="blue" onClick={handleConfirm}>
          Подтвердить
        </Button>
      </div>
    </div>
  );
}

export default ConfirmationDialog;
