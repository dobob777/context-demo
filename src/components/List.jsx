import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const List = () => {
    const contextGet = useContext(TodoContext);

    const deleteData = (id) => {
        contextGet.setAllD(contextGet.allD.filter((ele, index) => index !== id))
    }
    return (
        <div>
            {
                contextGet.allD.map((ele, index) => {
                    return (
                        <div key={ index } style={ { display: "flex" } }>
                            <p >{ ele }</p>
                            <button onClick={ () => deleteData(index) }>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List