import classes from "./UserTableHead.module.css";
interface UserTableHeadProps {
  headers: string[];
}
function UserTableHead({ headers }: UserTableHeadProps) {
  return (
    <thead className={classes.thead}>
      <tr>
        {headers.map((header) => (
          <th key={Math.random()}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

export default UserTableHead;
