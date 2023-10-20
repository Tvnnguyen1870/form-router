import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { addUser, getListUser, removeUser } from "../store/reducers/thunk";
import { useEffect, useState } from "react";


const Thunk = () => {
  const [tempName, setTempName] = useState('');

  const { control, handleSubmit } = useForm({
    defaultValues: {
      user: '',
    }
  });

  const thunkStore = useSelector(state => state.thunk)

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    setTempName(values)
    dispatch(addUser(values))
  }

  const onDelete = (values) => {
    dispatch(removeUser(values))
  }

  const handleEdit =() => {
    let tempHtml = `<input value=${tempName}/> <button onClick={onDelete}>xóa</button> <button onClick={handleEdit}>sửa</button>`;
    document.getElementById('user').innerHTML = tempHtml;
  }

  useEffect(() => {
    dispatch(getListUser());
  }, [])

  // const handleEdit = () => 
  //   return 
  // 

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="user" control={control}
          render={({ field }) => (
            <input {...field} type="text" placeholder="enter user" id="username" />
          )}
        />
        <button type="submit">add user</button>
      </form>
      <div id="formTemp">
        <ul id="user">
          {
            thunkStore.thunks.map((thunk, index) => {
              return <li key={index}>{thunk.user} <button onClick={onDelete}>xóa</button> <button onClick={()=>handleEdit(index)}>sửa</button></li>
            })
          }
        </ul>
      </div>

    </div>
  )
}

export default Thunk
