import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().required('email is required').email('email is invalid'),
  password: yup.string().required('password is required').min(8, "password it nhat 8 ky tu"),
  confirmPassword: yup.string().required('confirm password is required'),
})

const FormRegister = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '', 
      confirmPassword: '',
    },
    resolver: yupResolver(schema)
  })        

  const onRegisterCallback = (values) => {
    console.log(values);
  }

  return (
    <div>
      <h1>Đăng Kí</h1>
      <form onSubmit={handleSubmit(onRegisterCallback)}>
        <p>Nhập Email</p>
        <Controller name="email" control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="email" placeholder="email" />
                {errors['email'] && <p>({errors.email.message})</p>}
              </div>
            )
          }}
        />
        <p>password</p>
        <Controller name="password" control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="password" placeholder="password" />
                {errors['password'] && <p>({errors.password.message})</p>}
              </div>
            )
          }}
        />
        <p>confirm password</p>
        <Controller name="confirmPassword" control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="password" placeholder="confirmPassword" />
                {errors['confirmPassword'] && <p>({errors.confirmPassword.message})</p>}
              </div>
            )
          }}
        />
        <input type="checkbox" /> I read and accept the privacy policy:
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default FormRegister