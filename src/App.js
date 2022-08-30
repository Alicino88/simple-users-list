import AddUser from "./Components/AddUser";
import UsersList from "./Components/UsersList";
import { useState } from "react";
import "./index.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((previousUserList) => {
      return [
        ...previousUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  console.log(usersList);
  return (
    <div className="App">
      <AddUser onAddUsers={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
