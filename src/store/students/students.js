import { ACTION_STUDENTS_SUCCESS } from "./students-actions";

const ALL_STUDENTS = [];
const initialStudentsState = { students: ALL_STUDENTS, displayStudents: ALL_STUDENTS }
const studentsReducer = (state = initialStudentsState, action) => {
    switch (action.type) {
        case ACTION_STUDENTS_SUCCESS:
            console.log(action, action.payload)
            return { ...state, ...{ students: action.payload } };
            break;
    }
    return state;
}

export default studentsReducer;