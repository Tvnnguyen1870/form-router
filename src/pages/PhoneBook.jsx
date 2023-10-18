import { Controller, useForm } from "react-hook-form"
import {  addPhone, fetchPosts, removePhone } from "../store/reducers/phone"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

const PhoneBook = () => {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      userName: '',
      phoneNumber: '',
      isFavorite: true,
    }
  })

  const dispatch = useDispatch();

  const phoneBookStore = useSelector((state) => state.phonebook);

  const onSubmit = (values) => {
    const payload = { ...values, id: uuidv4() }
    dispatch(addPhone(payload))
  }

  const onRemove = (id) => {
    dispatch(removePhone(id))
  }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>tên danh bạ:</p>
        <Controller name="userName" control={control}
          render={({ field }) => (
            <input {...field} type="text" placeholder="user name" />
          )}
        />
        <p>số điện thoại:</p>
        <Controller name="phoneNumber" control={control}
          render={({ field }) => (
            <input {...field} type="text" placeholder="phone number" />
          )}
        />
        <Controller name="isFavorite" control={control}
          render={({ field }) => (
            <div>
              <label htmlFor="">Favorite</label>
              <input {...field} type="checkbox" checked={field.value} />
            </div>
          )}
        />
        <div><button type="submit">Add</button></div>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>phone</th>
            <th>favorite</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            phoneBookStore.phonebooks.map((phonebook, index) => (
              <tr key={index}>
                <td>{phonebook.id}</td>
                <td>{phonebook.userName}</td>
                <td>{phonebook.phoneNumber}</td>
                <td>{phonebook.isFavorite.toString()}</td>
                <td><button onClick={() => onRemove(phonebook.id)}>Remove</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default PhoneBook
