import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form"
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required('name is valid'),
    address: yup.string().required('address is valid'),
    phoneNumber: yup.number().required('phone number is valid'),
    email: yup.string().required('email is valid').email('email is invalid'),
})

const FormHealth = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            address: '',
            phoneNumber: '',
            email: '',
            sick: false,
            couch: false,
            breath: false,
        },
        resolver: yupResolver(schema)
    })

    const onSubmitCallback = (values) => {
        console.log(values);
    }

    console.log(errors);

    return (
        <div>
            <h1>Khai báo y tế</h1>
            <form onSubmit={handleSubmit(onSubmitCallback)}>
                <p>Name:</p>
                <Controller name="name" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="text" placeholder="name" />
                                {errors['name'] && <p>({errors.name.message})</p>}
                            </div>
                        )
                    }}
                />
                <p>address:</p>
                <Controller name="address" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="text" placeholder="address" />
                                {errors['address'] && <p>({errors.address.message})</p>}
                            </div>
                        )
                    }}
                />
                <p>Phone number:</p>
                <Controller name="phoneNumber" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="tel" placeholder="phone number" />
                                {errors['phoneNumber'] && <p>({errors.phoneNumber.message})</p>}
                            </div>
                        )
                    }}
                />
                <p>Email</p>
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
                <p>Trong 14 ngày qua có dấu hiệu triệu chứng gì không?</p>

                <div>
                <Controller name="sick" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="checkbox" />sốt
                            </div>
                        )
                    }}
                />
                </div>
                <div>
                <Controller name="couch" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="checkbox" />sổ mũi
                            </div>
                        )
                    }}
                />
                </div>
                <div>
                <Controller name="breath" control={control}
                    render={({ field }) => {
                        return (
                            <div>
                                <input {...field} type="checkbox" />khó thở
                            </div>
                        )
                    }}
                />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormHealth
