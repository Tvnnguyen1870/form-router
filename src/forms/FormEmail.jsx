import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form"
import * as yup from 'yup'

const schema = yup.object().shape({
    receiver: yup.string().required('receiver is valid'),
})

const FormEmail = () => {

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            receiver: '',
        },
        resolver: yupResolver(schema)
    })

    const onSendCallback = (values) => {
        console.log(values);
    }

  return (
    <div>
      <h1>Soạn thảo email</h1>
      <form onSubmit={handleSubmit(onSendCallback)}>
        <p>người nhận:</p>
        <Controller name="receiver" control={control} 
        render={({field}) => {
            return(
                <div>
                    <input {...field} type="text" placeholder="receiver"/>
                    {errors['receiver'] && <p>({errors.receiver.message})</p>}
                </div>
            )
        }}
        />   
        <p>chủ đề:</p>
        <input type="text"/>
        <p>nội dung:</p>
        <textarea type="text" />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default FormEmail