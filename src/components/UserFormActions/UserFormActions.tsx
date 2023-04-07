import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import User from "../../store/users/user";
import { createUser, updateUser } from "../../store/users/usersReducer";
import Button from "../../UI/Button";
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

  const updateButtonHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    if (id && name && dateOfBirth) {
      dispatch(updateUser({ id, name, dateOfBirth }));
      navigate(-1);
    }
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
    </div>
  );
}

export default UserFormActions;
