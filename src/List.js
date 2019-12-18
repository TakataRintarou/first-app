import React from 'react'
import Item from './Item'

const List = ({todos, deleteTodo}) => {
    return (
        <ul>
            {/* マップ関数を使っていく！！ */}

            {
                todos.map((todo, i) => {
                    return (
                        <Item 
                            key = {i}
                            id = {todo.id}
                            text = {todo.text}
                            deleteTodo={deleteTodo}
                        />
                    )
                })
            }

            
        </ul>        
    )
}

export default List