
import { useForm } from 'react-hook-form'

type AddUserFormProps = {
    addUser(user: User): void
}


export const AddUserForm:React.FC<AddUserFormProps> = ({addUser}) => {
    const { register,formState: { errors}, handleSubmit, reset } = useForm<User>()

    const onSubmit = (data:User) => {
        //add a new user
        addUser(data)
        //clean fields
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                { ...register("name", {
                    required: true
                })}

            />
            <span>{errors.name && "name is required"}</span>

            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                { ...register("username",{
                    required: true
                })}
            />
            <span>{errors.username && "username is required"}</span>

            <input type="submit" value="Add User"/>
        </form>
    )
}
