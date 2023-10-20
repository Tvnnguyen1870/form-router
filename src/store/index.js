import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './reducers/home'
import todoReducer from './reducers/todo'
import userReducer from './reducers/user'
import articleReducer from './reducers/article'
import productReducer from './reducers/product'
import phonebookReducer from './reducers/phone'
import studentReducer from './reducers/student'
import thunkReducer from './reducers/thunk'
import todolistReducer from './reducers/todolist'
import bookReducer from './reducers/book'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    todo: todoReducer,
    user: userReducer,
    article: articleReducer,
    product: productReducer,
    phonebook: phonebookReducer,
    student: studentReducer,
    thunk: thunkReducer,
    todolist: todolistReducer,
    book: bookReducer,
  },
})
