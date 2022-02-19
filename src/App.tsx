import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
//components
import { UserTable } from "./components/UserTable";
import { AddUserForm } from './components/AddUserForm';
//data
import { data } from './data'

function App() {
  const [ users, setUsers] = useState<User[]>(data);

  const addUser = (user: User) => {
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ])
  }

  return (
    <div className="App">
      <h1>CRUD App with Hooks</h1>
      <article>
        <section>
          <h2>Add user</h2>
          <AddUserForm addUser={ addUser} />
        </section>
        <section>
          <h2>View Users</h2>
          <UserTable users={users}/>
        </section>
      </article>
    </div>
  );
}

export default App;
