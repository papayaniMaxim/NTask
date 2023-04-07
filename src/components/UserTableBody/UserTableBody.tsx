import User from "../../store/users/user";
import UserTableRow from "../UserTableRow";

interface UserTableBodyProps{
    users: User[];
}

function UserTableBody({ users }: UserTableBodyProps) {
  
  return (
    <tbody>
      {users.map((user) => (
        <UserTableRow user={user}/>
      ))}
    </tbody>
  );
}

export default UserTableBody;
