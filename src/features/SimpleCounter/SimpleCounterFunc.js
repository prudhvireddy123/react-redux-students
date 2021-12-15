import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './SimpleCounter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { ACTION_INCREMENT, ACTION_DECREMENT } from '../../store/counter'

function SimpleCounterFunc(props) {

    // const [count, setCount] = useState(0)
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch()

    const onIncrement = () => {
        // setCount((prevCount) => {
        //     return prevCount + 1
        // })

        dispatch({ type: ACTION_INCREMENT })
    }
    const onDecrement = () => {
        // setCount((prevCount) => {
        //     return prevCount - 1
        // })
        dispatch({ type: ACTION_DECREMENT })
    }
    return (
        <div className={styles.row}>
            <span> function</span>
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

    )
}

export default SimpleCounterFunc

