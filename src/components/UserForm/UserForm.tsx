import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import DateInput from "../DateInput";
import UserFormActions from "../UserFormActions";
import classes from "./UserForm.module.css";

interface UserFormProps {
  type: "update" | "create";
}
function UserForm({ type }: UserFormProps) {
  const { id } = useParams();
  const user = useSelector((state: RootState) =>
    state.users.users.find((user) => user.id === id)
  );
  const [name, setName] = useState(user?.name);
  const [dateOfBirth, setDateOfBirth] = useState(user?.dateOfBirth);

  return (
    <>
      <h1>Пользователь</h1>
      <form className={classes.form}>
        <div className={classes.container}>
          <label htmlFor="name">Имя</label>
          <input
            className={classes.input}
            name="name"
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName((prev) => e.target.value)}
          />
        </div>
        <div className={classes.container}>
          <label htmlFor="day of birth">Дата рождения</label>
          <DateInput
            className={classes.input}
            placeholder="Дата рождения"
            value={dateOfBirth}
            onChange={(value) => setDateOfBirth((prev) => value)}
          />
        </div>
        <UserFormActions
          type={type}
          name={name}
          dateOfBirth={dateOfBirth}
          id={id}
        />
      </form>
    </>
  );
}

export default UserForm;
