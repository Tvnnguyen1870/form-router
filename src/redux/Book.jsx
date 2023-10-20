import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { addBook, getBook, removeBook } from "../store/reducers/book";
import { useEffect } from "react";

const Book = () => {

    const {control, handleSubmit} = useForm({
        defaultValues: {
            bookName: '',
        }
    })
    const bookStore = useSelector(state => state.book)

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(addBook(values))
    }

    const deleteBook = (values) => {
        dispatch(removeBook(values))
    }

    useEffect(() => {
      dispatch(getBook());
    }, [])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="bookName" control={control} 
        render={({field}) => (
            <input {...field} type="text" placeholder="enter book"/>
        )}
        />
        <button type="submit">add book</button>
      </form>

      <ul id="item">
        {
            bookStore.books.map((book, index) => {
                return <li key={index}>{book.bookName} <button onClick={deleteBook}>delete</button></li>
            })
        }
      </ul>
    </div>
  )
}

export default Book