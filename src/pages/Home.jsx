import { Navigate, useNavigate } from "react-router-dom"
import {Controller , useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email('Email is invalid'),
  firstName: yup.string().required("First name is required").min(3, "First name it nhat 3 ky tu"),
  lastName: yup.string().required("Last name is required"),
})

const Home = () => {
    const isLogin = localStorage.getItem('isLogin') === 'true';
    const navigate = useNavigate();
    if(!isLogin) return <Navigate to='/login' />
    const handleClick = () => {
        navigate('/')
    }

    const {control, handleSubmit, formState: {errors} } = useForm({
      defaultValues: {
        firstName : '',
        lastName: '',
        email:''
      },
      resolver: yupResolver(schema)
    })

    const onSubmitCallback = (values) => {
      console.log(values);
    }

  return (
    <div>
        {/* <h1>Home</h1>
        <button onClick={handleClick}>Click</button> */}
        <h1>FORM</h1>
        <form onSubmit={handleSubmit(onSubmitCallback)}>
        <Controller name="firstName" control={control}
         render = {({field}) => {
          return (<div>
            <input {...field} type="text" placeholder="first name" />
            {errors['firstName']  && <p>({errors.firstName.message})</p> }
          </div>)
          }} 
          />
          <Controller name="lastName" control={control}
         render = {({field}) => {
          return (<div>
          <input {...field} type="text" placeholder="last name" /> 
          {errors['lastName']  && <p>({errors.lastName.message})</p> }
          </div>)
          }} 
          />
          <Controller name="email" control={control}
         render = {({field}) => {
          return (<div>
          <input {...field} type="email" placeholder="Email" /> \
          {errors['email']  && <p>({errors.email.message})</p> }
          </div>)
          }} 
          />
          <button type="submit">submit form</button>
        </form>
    </div>
  )
}

export default Home