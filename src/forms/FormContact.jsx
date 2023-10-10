import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form"
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().required('email is valid').email('email is invalid'),
    firstName: yup.string().required('first name is valid').min(3, 'first name it nhat 3 ki tu'),
    lastName: yup.string().required('last name is valid'),
    age: yup.number().required('age is valid'),
    textarea: yup.string().required('textarea is valid'),
})

const FormContact = () => {

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: '',
            firstName:'',
            lastName: '',
            age: '',
            textarea: '',
        },
        resolver: yupResolver(schema)
    })

    const onSubmitCallback = (values) => {
        console.log(values);
    }

  return (
    <div>
      <h1>Form liên hệ</h1>
      <form onSubmit={handleSubmit(onSubmitCallback)}>
        <p>Email:</p>
        <Controller name="email" control={control} 
        render={({field}) => {
            return (
                <div>
                    <input {...field} type="email" placeholder="email"/>
                    {errors['email'] && <p>({errors.email.message})</p>}
                </div>
            )
        }}
        />
        <p>First name:</p>
        <Controller name="firstName" control={control} 
        render={({field}) => {
            return (
                <div>
                    <input {...field} type="text" placeholder="first name"/>
                    {errors['firstName'] && <p>({errors.firstName.message})</p>}
                </div>
            )
        }}
        />
        <p>Last name:</p>
        <Controller name="lastName" control={control} 
        render={({field}) => {
            return (
                <div>
                    <input {...field} type="text" placeholder="last name"/>
                    {errors['lastName'] && <p>({errors.lastName.message})</p>}
                </div>
            )
        }}
        />
        <p>Age:</p>
        <Controller name="age" control={control} 
        render={({field}) => {
            return (
                <div>
                    <input {...field} type="number" placeholder="age"/>
                    {errors['age'] && <p>({errors.age.message})</p>}
                </div>
            )
        }}
        />
        <p>Textarea:</p>
        <Controller name="textarea" control={control} 
        render={({field}) => {
            return (
                <div>
                    <textarea {...field} type="text" placeholder="textarea"/>
                    {errors['textarea'] && <p>({errors.textarea.message})</p>}
                </div>
            )
        }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormContact
