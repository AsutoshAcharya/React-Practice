import Card from "./UI/Card";
import classes from "../Components/AddUser.module.css";
import Button from "./UI/Button";
import React, { useState, useRef } from "react";
import ErrorModal from "./UI/ErrorModal";
import Wrapper from "./Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and non empty age",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age(age>0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Add Age</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
