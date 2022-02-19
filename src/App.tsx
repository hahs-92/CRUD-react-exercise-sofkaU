import { useState } from "react";
//components
import { UserTable } from "./components/UserTable";
//data
import { data } from './data'

function App() {
  const [ users, setUsers] = useState<User[]>(data);

  return (
    <div className="App">
      <h1>CRUD App with Hooks</h1>
      <article>
        <section>
          <h2>Add user</h2>
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
