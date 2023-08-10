import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


const Dash = () => {

    return (
        <>
            <Link to={ '/add' }>
                <button>Click To Add</button>
            </Link>
            <Link to={ '/list' }>
                <button>Click To List</button>
            </Link>
        </>
    )
}

export default Dash
