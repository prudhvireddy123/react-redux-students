import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import counterReducer from './counter';

import studentsReducer from './students/students'

const rootReducer = combineReducers({
    counter: counterReducer,
    students: studentsReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;

