import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { getAgeBellow20StudentsSelector } from '../../store/students/students-selectors'
import { getAllStudents } from '../../store/students/students-actions';


class Students extends Component {
    static propTypes = {
        students: PropTypes.array,
        displayStudents: PropTypes.array,
    }

    // state = {
    //     students: ALL_STUDENTS,
    //     displayStudents: ALL_STUDENTS
    // }



    ageBellow20 = () => {
        // const studentsAge20 = this.state.students.filter((student) => student.age < 20);
        // console.log('All Students with age 20')
        // console.log(studentsAge20);
        // this.setState({ displayStudents: studentsAge20 })
    }

    all = () => {
        // console.log('All Students')
        // console.log(this.state.students);
        // this.setState({ displayStudents: ALL_STUDENTS })
    }

    componentDidMount() {
        this.props.getAllStudents();
    }

    render() {
        return (
            <div>
                Here i have all Students
                <div>
                    <button onClick={() => this.ageBellow20()}>Age Bellow 20</button>
                    <button onClick={() => this.all()}>All Students</button>
                </div>

                <div> All Students
                    {/* {this.props.displayStudents.map((student, index) => {
                        return (
                            <div key={index}>
                                <span>
                                    Name: {student.name},
                                </span>
                                <span>
                                    age: {student.age}
                                </span>
                            </div>
                        )
                    })} */}

                    {JSON.stringify(this.props.students)}

                </div>

                <div> Age bellow Students
                    {/* {this.props.ageBellow20.map((student, index) => {
                        return (
                            <div key={index}>
                                <span>
                                    Name: {student.name},
                                </span>
                                <span>
                                    age: {student.age}
                                </span>
                            </div>
                        )
                    })} */}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state => {
    console.log("state");
    console.log(state);
    return {
        students: state.students.students,
        displayStudents: state.students.displayStudents
    }
})

const mapDispatchToProps = (dispatch => {
    return {
        getAllStudents: () => { return dispatch(getAllStudents()) },
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Students)