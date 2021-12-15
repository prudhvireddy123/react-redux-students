export const getAgeBellow20StudentsSelector = (state) => {
    const studentsAge20 = state.students.students.filter((student) => student.age < 20);
    return studentsAge20
}

export const getAllFemales = (state) => {
    const studentsAge20 = state.students.students.filter((student) => student.age < 20);
    return studentsAge20
}
