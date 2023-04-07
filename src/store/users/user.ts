class User {
  constructor(name: string, dateOfBirth: string) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.id = (Math.random()*Date.now()).toFixed().toString();
  }
  name;
  dateOfBirth;
  id;
}
export default User;
