export function addStudent(student)
{
    return {
    type:'ADD_STUDENT',
    payload:student
    }
}

export function deleteStudent(Id)
{
    return {
    type:'DELETE_STUDENT',
    payload:Id
    }
}

