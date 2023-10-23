import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { addBook, editBook, getBook, removeBook } from "../store/reducers/book";
import { useEffect, useState } from "react";

const Book = () => {
  const [book, setBook] = useState();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      bookName: '',
    }
  })
  const bookStore = useSelector(state => state.book)

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (book) {
      dispatch(editBook({ ...values, name: book.bookName }))
    } else {
      dispatch(addBook(values))
    }

    reset({
      bookName: '',
    })
  }

  const deleteBook = (values) => {
    dispatch(removeBook(values))
  }

  useEffect(() => {
    dispatch(getBook());
  }, [])

  useEffect(() => {
    if (book) {
      reset({
        bookName: book.bookName,
      })
    }
  }, [book])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="bookName" control={control}
          render={({ field }) => (
            <input {...field} type="text" placeholder="enter book" />
          )}
        />
        <button type="submit">add book</button>
      </form>

      <ul id="item">
        {
          bookStore.books.map((book, index) => {
            return <li key={index}>
              {book.bookName}
              <div>
                <button onClick={deleteBook}>delete</button>
                <button onClick={() => setBook(book)}>edit</button>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Book