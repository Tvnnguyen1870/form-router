import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { addTodoList, getTodo, removeTodo } from "../store/reducers/todolist";
import { useEffect } from "react";

const TodoList = () => {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      todoName: '',
    }
  })
  const todolistStore = useSelector(state => state.todolist)

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addTodoList(values))
  }

  const deleteTodo = (values) => {
    dispatch(removeTodo(values))
  }

  useEffect(() => {
    dispatch(getTodo());
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="todoName" control={control}
          render={({ field }) => (
            <input {...field} type="text" placeholder="enter todo" />
          )}
        />
        <button type="submit">add todo</button>
      </form>

      <ul id="todo">
        {
          todolistStore.todolists.map((todolist, index) => {
            return <li key={index}>{todolist.todoName} <button onClick={deleteTodo}>delete</button></li>
          })
        }
      </ul>
    </div>
  )
}

export default TodoList
