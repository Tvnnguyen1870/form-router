import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, getListUser, removeUser } from "../store/reducers/thunk";
import { useEffect, useState } from "react";

const Thunk = () => {

  const [user, setUser] = useState();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      userName: '',
    }
  });

  const thunkStore = useSelector(state => state.thunk)

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (user) {
      dispatch(editUser({ ...values, name: user.userName }))
    } else {
      dispatch(addUser(values))
    }

    reset({
      userName: '',
    })
  }

  const onDelete = (values) => {
    dispatch(removeUser(values))
  }

  useEffect(() => {
    dispatch(getListUser());
  }, [])

  useEffect(() => {
    if (user) {
      reset({
        userName: user.userName,
      })
    }
  }, [user])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="userName" control={control}
          render={({ field }) => (
            <input {...field} type="text" placeholder="enter user" />
          )}
        />
        <button type="submit">add user</button>
      </form>

      <ul id="user">
        {
          thunkStore.thunks.map((thunk, index) => {
            return <li key={index}>{thunk.userName}
              <div>
                <button onClick={onDelete}>xóa</button>
                <button onClick={() => setUser(thunk)}>Edit</button>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Thunk
