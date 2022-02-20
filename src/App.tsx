import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
//components
import { UserTable } from "./components/UserTable";
import { UserForm } from './components/UserForm';
//data
import { data } from './data'
//styles
import style from './styles/App.module.css'

const initialCurrentUser = {name:"", username:""}

function App() {
  const [ users, setUsers] = useState<User[]>(data);
  const [ editing, setEditing ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState<User>(initialCurrentUser)

  const addUser = (user: User) => {
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ])
  }

  const deleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const editUser = (id: string, updateUser: User) => {
    setEditing(false)
    setUsers(users.map(user => user.id === id ? updateUser : user))
    setCurrentUser(initialCurrentUser)
  }

  const editRow = (user: User) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  return (
    <div className={style.App}>
      <h1 className={style.Title}>CRUD App with Hooks</h1>
      <article className={style.Wrapper}>
        <section className={style.Form }>
          <h2 className={style.SubTitle}>{editing ? "Edit User" : "Add User"}</h2>
          {
            !editing
              ?  <UserForm addUser={ addUser}  title='Add user' currentUser={currentUser}/>
              :  <UserForm editUser={ editUser} title='Edit user' currentUser={currentUser}/>
          }
        </section>
        <section className={style.Users}>
          <h2 className={style.SubTitle}>View Users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </section>
      </article>
    </div>
  );
}

export default App;
