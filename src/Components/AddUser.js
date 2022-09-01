import Card from "./UI/Card";
import Button from "./UI/Button";
import { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");
  const userSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "The input is not valid",
        message: "please fill in both username and age fields",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "The age is not valid",
        message: "Nobody is younger than 0, please add a valid age (>0)",
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
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card className={classes.input}>
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
    </>
  );
}

export default AddUser;
