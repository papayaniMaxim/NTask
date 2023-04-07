import User from "../../store/users/user";
import UserTableBody from "../UserTableBody";
import UserTableHead from "../UserTableHead";
import classes from "./UsersTable.module.css";

type TableProps = {
  headers: string[];
  users: User[];
};

function UsersTable({ headers, users }: TableProps) {

  return (
    <table className={classes.table}>
          <UserTableHead headers={headers} />
          <UserTableBody users={users}/>
    </table>
  );
}

export default UsersTable;
