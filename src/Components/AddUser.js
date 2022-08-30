import Card from "./UI/Card";
import Button from "./UI/Button";
import { useState } from "react";
import ErrorModal from "./UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");
  const userSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please anter a valid age (>0)",
      });
      return;
    }
    /*console.log("hello");
    console.log(enteredUsername, enteredAge);*/
    props.onAddUsers(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="texts"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;