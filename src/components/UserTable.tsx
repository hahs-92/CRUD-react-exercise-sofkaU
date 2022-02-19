import React from 'react'

type UserTableProps = {
  users: User[]
}

export const UserTable: React.FC<UserTableProps> = ({users}) => {
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
                  <button>Edit</button>
                  <button>Delete</button>
                </article>
              </section>
            ))
        }
      </div>

    </section>
  )
}
