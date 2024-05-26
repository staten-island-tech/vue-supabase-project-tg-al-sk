import { teachers } from './teachers.ts'
import Teacher from './Teacher.js' 

export default function allTeachers() {
    const teachersArr = []
    teachers.forEach((teacher) => {
        const newTeacher = new Teacher(teacher.name, teacher.subject, teacher.image, teacher.star)
        teachersArr.push(newTeacher)
    })
    return teachersArr
}

