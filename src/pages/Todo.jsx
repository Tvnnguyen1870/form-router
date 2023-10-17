import { Controller, useForm } from 'react-hook-form'
import { addTodo, removeTodo } from '../store/reducers/todo';
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {

  const { control, handleSubmit, } = useForm({
    defaultValues: {
      todoName: '',
    }
  });

  const todoStore = useSelector(state => state.todo)

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addTodo(values))
  }

  const onRemove = (values) => {
    dispatch(removeTodo(values))
  }

  const style = {
    itemContainer: {
      width: 200,
      borderBottom: '1px solid black',
    },
    button: {
      backgroundColor: '#fff',
    },
    container: {
      width: 300,
      paddingBottom: 20,
      backgroundColor: '#ccc'
    }
  }

  return (
    <div style={style.container}>
      <h2>todo app</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller name='todoName' control={control}
            render={({ field }) => (
              <input {...field} type='text' placeholder='enter todo' />
            )}
          />
          <button type='submit'>add</button>
        </form>
        <ul >
          {todoStore.todos.map((todo, index) => {
            return <li style={style.itemContainer} key={index}>{todo.todoName} <button style={style.button} onClick={onRemove}>remove</button></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Todo
