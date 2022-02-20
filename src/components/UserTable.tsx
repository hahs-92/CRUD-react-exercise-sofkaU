import React from 'react'

type UserTableProps = {
  users: User[]
  deleteUser(id:string): void
  editRow(user:User): void
}

export const UserTable: React.FC<UserTableProps> = ({users, deleteUser, editRow}) => {
  return (
    <section>
      <div>
        <section>
          <article>Name</article>
          <article>Username</article>
          <article>Actions</article>
        </section>

        {
          !users.length
            ? <h2>No hay usuarios!</h2>
            : users.map(user => (
              <section key={user.id}>
                <article>
                  <h2>{user.name}</h2>
                </article>
                <article>{user.username}</article>
                <article>
                  <button onClick={() => editRow(user)}>Edit</button>
                  <button onClick={() => deleteUser(user.id as string)}>Delete</button>
                </article>
              </section>
            ))
        }
      </div>

    </section>
  )
}
