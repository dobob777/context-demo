import React, { useContext, useState } from 'react'
import Todo from '../context/TodoContext'
import { Link } from 'react-router-dom';

const Add = () => {
    const [inputData, setInputData] = useState("");
    const dataSave = useContext(Todo);
    const ok = (e) => {
        setInputData(e.target.value)
    }

    const addData = () => {
        dataSave.setAllD([...dataSave.allD, inputData])
        setInputData("")
    }
    return (
        <>
            <input type="text" value={ inputData } onChange={ ok } />
            <button onClick={ addData }>Add</button>
            <Link to={ '/' }>
                <button>Close</button>
            </Link>
        </>
    )
}

export default Add