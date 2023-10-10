import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form"
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().required('email is valid').email('email is invalid'),
    firstName: yup.string().required('first name is required').min(3, 'first name it nhat 3 ki tu'),
    lastName: yup.string().required('last name is required'),
    password: yup.string().required('password is required').min(8, 'password it nhat 8 ki tu'),
    confirmPassword: yup.string().required('confirm password is required')
})

const Formik = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '', 
            confirmPassword: '',
        },
        resolver: yupResolver(schema)
    })

    const onSubmitCallback = (values) => {
        console.log(values);
    }

    return (
        <div>
            <h1>Đăng kí Formik</h1>
            <form onSubmit={handleSubmit(onSubmitCallback)}>
                <p>email:</p>
                <Controller name="email" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="email" placeholder="enter your email"/>
                                {errors['email'] && <p>({errors.email.message})</p>}
                            </div>
                        )
                    }}
                />
                <p>first name:</p>
                <Controller name="firstName" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="text" placeholder="first name"/>
                                {errors['firstName'] && <p>({errors.firstName.message})</p>}
                            </div>
                        )
                    }}
                />
                <p>last name:</p>
                <Controller name="lastName" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="text" placeholder="last name"/>
                                {errors['lastName'] && <p>({errors.lastName.message})</p>}
                            </div>
                        )
                    }}
                />
                <p>password:</p>
                <Controller name="password" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="password" placeholder="password"/>
                                {errors['password'] && <p>({errors.password.message})</p>}
                            </div>
                        )
                    }}
                />
                <p>confirm password:</p>
                <Controller name="confirmPassword" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="password" placeholder="confirm password"/>
                                {errors['confirmPassword'] && <p>({errors.confirmPassword.message})</p>}
                            </div>
                        )
                    }}
                />
                <input type="checkbox" />tôi đã đọc điều khoản và chấp nhận
                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Formik
