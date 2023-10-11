import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form"
import * as yup from 'yup'

const schema = yup.object().shape({
    receiver: yup.string().required('receiver is valid'),
    subject: yup.string().required('subject is valid'),
    content: yup.string().required('content is valid'),
    file: yup.mixed().test('validate-file', 'file format is invalid', function(value){
      return ['image/jpeg', 'image/png'].includes(value.type);
    })
})

const FormEmail = () => {

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            receiver: '',
            subject: '',
            content: '',
            file: '',
        },
        resolver: yupResolver(schema)
    })

    const onSendCallback = (values) => {
        console.log(values);
    }

    console.log(errors);

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
        <Controller name="subject" control={control} 
        render={({field}) => {
            return(
                <div>
                    <input {...field} type="text" placeholder="subject"/>
                    {errors['subject'] && <p>({errors.subject.message})</p>}
                </div>
            )
        }}
        /> 
        <p>nội dung:</p>
        <Controller name="content" control={control} 
        render={({field}) => {
            return(
                <div>
                    <textarea {...field} type="text" placeholder="nội dung"/>
                    {errors['content'] && <p>({errors.content.message})</p>}
                </div>
            )
        }}
        />
        <Controller name="file" control={control} 
        render={({field}) => {
            return(
                <div>
                    <input {...field} type="file" value={field.value?.fileName} placeholder="upload attachment" 
                    onChange={(event) => {field.onChange(event.target.files[0])}}
                    />
                    <div>{errors?.file?.message}</div>
                </div>
            )
        }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default FormEmail