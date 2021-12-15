import axios from 'axios';

export const ACTION_STUDENTS_LOADING = 'ACTION_STUDENTS_LOADING';
export const ACTION_STUDENTS_SUCCESS = 'ACTION_STUDENTS_SUCCESS';
export const ACTION_STUDENTS_FAILED = 'ACTION_STUDENTS_FAILED';

export const getAllStudents = () => {
    return (dispatch) => {
        dispatch({ type: ACTION_STUDENTS_LOADING })
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response.data);
                dispatch({ type: ACTION_STUDENTS_SUCCESS, payload: response.data })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                dispatch({ type: ACTION_STUDENTS_FAILED })
            })
    }
}