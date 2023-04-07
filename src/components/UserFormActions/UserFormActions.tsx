import { MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PopUpLayout from "../../layouts/PopUpLayout";
import User from "../../store/users/user";
import { createUser, updateUser } from "../../store/users/usersReducer";
import Button from "../../UI/Button";
import ConfirmationDialog from "../ConfirmationDialog";
import classes from "./UserFormActions.module.css";

interface UserFormActionsProps {
  id?: string;
  name?: string;
  dateOfBirth?: string;
  type: "update" | "create";
}

function UserFormActions({
  id,
  name,
  dateOfBirth,
  type,
}: UserFormActionsProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const updateButtonHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    setIsOpen(() => true);
  };

  const createButtonHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    if (name && dateOfBirth) {
      dispatch(createUser(new User(name, dateOfBirth)));
      navigate(-1);
    }
  };
  const cancelButtonHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div className={classes.footer}>
      <Button backgroundcolor="gray" onClick={cancelButtonHandler}>
        Отмена
      </Button>
      <Button
        backgroundcolor="blue"
        onClick={type === "create" ? createButtonHandler : updateButtonHandler}
      >
        {type === "create" ? "Добавить" : "Изменить"}
      </Button>
      {isOpen && (
        <PopUpLayout onClose={() => setIsOpen(() => false)}>
          <ConfirmationDialog
            title="Подтвердите действие"
            message={`Вы действительно хотите изменить данные  ${name}?`}
            onCancel={() => setIsOpen(() => false)}
            onConfirm={() => {
              if (id && name && dateOfBirth) {
                dispatch(updateUser({ id, name, dateOfBirth }));
                navigate(-1);
              }
            }}
          />
        </PopUpLayout>
      )}
    </div>
  );
}

export default UserFormActions;
