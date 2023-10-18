import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './reducers/home'
import todoReducer from './reducers/todo'
import userReducer from './reducers/user'
import articleReducer from './reducers/article'
import productReducer from './reducers/product'
import phonebookReducer from './reducers/phone'
import studentReducer from './reducers/student'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    todo: todoReducer,
    user: userReducer,
    article: articleReducer,
    product: productReducer,
    phonebook: phonebookReducer,
    student: studentReducer,
  },
})
