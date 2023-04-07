import { useSelector } from "react-redux";
import classes from "./UsersPage.module.css";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import Button from "../../UI/Button";
import UsersTable from "../../components/UsersTable";
import Message from "../../components/Message";

function UsersPage() {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Пользователи</h1>
        <Link to={"/users/create"}>
          <Button backgroundcolor="blue">Добавить пользователя</Button>
        </Link>
      </div>
      {!users.length ? (
        <Message>Список пользователей пуст</Message>
      ) : (
        <UsersTable headers={["Имя", "Дата рождения", "", ""]} users={users} />
      )}
    </div>
  );
}

export default UsersPage;
