import Card from "./UI/Card";
import Button from "./UI/Button";
import { useState } from "react";
import { useRef } from "react";
import ErrorModal from "./UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  /*Below we have removed the useState logic and replaced with Refs: in this way we don't update the component state at every keystroke to store the actual value:
  /*
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  */
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");
  const userSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "The input is not valid",
        message: "please fill in both username and age fields",
      });
      return;
    }
    if (enteredUserAge < 1) {
      setError({
        title: "The age is not valid",
        message: "Nobody is younger than 0, please add a valid age (>0)",
      });
      return;
    }
    /*console.log("hello");
    console.log(enteredUsername, enteredAge);*/
    props.onAddUsers(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    /*
    setEnteredUsername("");
    setEnteredAge("");
    */
  };

  /*
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  */

  /*
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };*/

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
          <input id="username" type="texts" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
