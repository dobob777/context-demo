import React, { useContext } from 'react'
import Todo from '../context/TodoContext'
import { Link } from 'react-router-dom'
const List = () => {
    const abc = useContext(Todo)
    const list = abc.allD
    return (
        <>
            <center>
                <ul>
                    {
                        list.map((ele, index) => {
                            return (
                                <li key={ index }>{ ele }</li>
                            )
                        })
                    }
                </ul>
                <Link to={ '/' }>
                    <button>Close</button>
                </Link>
            </center>
        </>
    )
}

export default List