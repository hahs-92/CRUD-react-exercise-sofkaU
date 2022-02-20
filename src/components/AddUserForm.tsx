import { useForm } from 'react-hook-form'

type addUser =  (user: User) => void
type editUser = (id: string, updateUser: User) => void


type AddUserFormProps = {
    addUser?: addUser
    editUser?: editUser
    title: string
    currentUser: User
}


export const AddUserForm:React.FC<AddUserFormProps> = ({addUser, editUser,title, currentUser}) => {
    const { register,formState: { errors}, handleSubmit, reset, setValue } = useForm<User>({
        defaultValues: currentUser
    })

    setValue('id', currentUser.id)
    setValue('name', currentUser.name)
    setValue('username', currentUser.username)


    const onSubmit = (data:User) => {
        //add o edit user
        data.id = currentUser.id
        editUser && editUser(currentUser.id as string , data);

        addUser && addUser(data)

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

            <input type="submit" value={title}/>
        </form>
    )
}
