import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PopUpLayout from "../../layouts/PopUpLayout";
import User from "../../store/users/user";
import { deleteUser } from "../../store/users/usersReducer";
import ConfirmationDialog from "../ConfirmationDialog";
import classes from "./UserTableRow.module.css"

interface UserTableRowProps{
    user: User;
}
function UserTableRow({ user }: UserTableRowProps) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    return ( <tr className={classes.row} key={user.id}>
        <td>{user.name}</td>
        <td>{user.dateOfBirth}</td>
        <td className={classes.linkCell}>
          <span
            className={classes.delete}
            onClick={() => setIsOpen(() => true)}
          >
            Удалить
          </span>
          {isOpen && (
            <PopUpLayout onClose={() => setIsOpen(() => false)}>
              <ConfirmationDialog
                title="Подтвердите действие"
                message={`Вы действительно хотите удалить пользователя ${user.name}?`}
                onCancel={() => setIsOpen(() => false)}
                onConfirm={() => dispatch(deleteUser(user.id))}
              />
            </PopUpLayout>
          )}
        </td>
        <td className={classes.linkCell}>
          <Link to={`/users/update/${user.id}`}>Изменить</Link>
        </td>
      </tr> );
}

export default UserTableRow;