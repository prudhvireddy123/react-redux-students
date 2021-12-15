import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './SimpleCounter.module.css';
import { connect } from 'react-redux';

import { ACTION_INCREMENT, ACTION_DECREMENT } from '../../store/counter'

class SimpleCounter extends Component {
    static propTypes = {
        count: PropTypes.number,
        onIncrement: PropTypes.func,
        onDecrement: PropTypes.func
    }
    // state = {
    //     counter: 1
    // }

    // onIncrement = () => {
    //     this.setState((prevState) => {
    //         return { counter: prevState.counter + 1 }
    //     })
    // }
    // onDecrement = () => {
    //     this.setState((prevState) => {
    //         return { counter: prevState.counter - 1 }
    //     })
    // }

    render() {

        const { count, onIncrement, onDecrement } = this.props;
        return (
            <div>
                <div className={styles.row}>
                    <button
                        className={styles.button}
                        aria-label="Decrement value"
                        onClick={onDecrement}
                    >
                        -
                    </button>
                    <span className={styles.value}>{count}</span>
                    <button
                        className={styles.button}
                        aria-label="Increment value"
                        onClick={onIncrement}
                    >
                        +
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

    console.log(state)
    return {
        count: state.counter.count
    }
}

const mapDispatchProps = dispatch => {
    return {
        onIncrement: () => { return dispatch({ type: ACTION_INCREMENT }) },
        onDecrement: () => { return dispatch({ type: ACTION_DECREMENT }) }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(SimpleCounter)
