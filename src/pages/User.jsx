import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/reducers/user";
import Article from "./Article";

const User = () => {

    const {control, handleSubmit, }= useForm({
        defaultValues: {
            userName: '',
        }
    });

    const userStore = useSelector(state => state.user);

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(addUser(values));
    }

  return (
    <div>
      <h1>User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Name</span>
        <Controller name="userName" control={control}
        render={({field}) => (
            <input {...field} type="text" placeholder="add new user"/>
        )}
        />
        <button type="submit">Add User</button>
      </form>
      <ol>
        {userStore.users.map((user, index) => {
            return <li key={index}>{user.userName}<Article /></li>
        })}
      </ol>
    </div>
  )
}

export default User
