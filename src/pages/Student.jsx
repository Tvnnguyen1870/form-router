import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addStudent, deleteStudent, removeStudent } from "../store/reducers/student"
import { v4 as uuidv4 } from 'uuid';

const Student = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            studentName: '',

        }
    })

    const studentStore = useSelector((state) => state.student)

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        const payload = { ...values, id: uuidv4() }
        dispatch(addStudent(payload))
    }

    const onDelete = (id) => {
        dispatch(deleteStudent(id))
    }

    const onRemove = (values) => {
        dispatch(removeStudent(values))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>nhập tên học sinh:</p>
                <Controller name="studentName" control={control}
                    render={({ field }) => (
                        <input {...field} type="text" placeholder="enter student name" />
                    )}
                />
                <p>nhập tên môn học:</p>
                <Controller name="course" control={control}
                    render={({ field }) => (
                        <input {...field} type="text" placeholder="enter student course" />
                    )}
                />
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>

            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {
                        studentStore.students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.studentName}</td>
                                <td><button onClick={() => onDelete(student.id)}>delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <table>
                <thead>
                    <th>Name</th>
                    <th>Môn học</th>
                </thead>
                <tbody>
                    {
                        studentStore.students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.studentName}</td>
                                <td>{student.course}</td>
                                <td><button onClick={onRemove}>delete</button></td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Student
 