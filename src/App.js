import "./App.css";
import AddUser from "./Components/AddUser";
import UsersList from "./Components/UsersList";
import React, { useState } from "react";

// const user = [
//   {
//    name: "asutosh",
//   age: 23,
//   },
//   {
//   name: "asutosh1",
//   age: 24
//   }
// ];

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
