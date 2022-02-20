import React from 'react'
//styles
import style from '../styles/components/UserTable.module.css'

type UserTableProps = {
  users: User[]
  deleteUser(id:string): void
  editRow(user:User): void
}

export const UserTable: React.FC<UserTableProps> = ({users, deleteUser, editRow}) => {
  return (
    <section className={style.UserTable}>

      <section className={style.UserTable_Options}>
        <article>
          <h3>Name</h3>
        </article>
        <article>
          <h3>Username</h3>
        </article>
        <article>
          <h3>Actions</h3>
        </article>
      </section>

      {
        !users.length
          ? <h2>No hay usuarios!</h2>
          : users.map(user => (
            <section key={user.id} className={style.UserTable_Info}>
              <article>
                <h2>{user.name}</h2>
              </article>
              <article>
                <h2>{user.username}</h2>
              </article>
              <article className={style.Actions}>
                <button onClick={() => editRow(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id as string)}>Delete</button>
              </article>
            </section>
          ))
      }

    </section>
  )
}
