import React, {useState} from 'react';
import Form from './Form';
import List from './List';


const App = () => {

    // useStateで変数を定義する
    const [todos, setTodos] = useState([]);

    // 要素を追加する関数を定義する
    const addTodo = (value) => {

        // まずはtodosをそれぞれの要素として分ける

        const newTodos = [ 　　　　　　　　　　//これが新しいtodosとなる
            ...todos, 　　　　　　　　//spread構文。これでバラバラにできる
            {
                text: value,
                id: todos.length + 1
            }
        ]

        // todosを変更する
        setTodos(newTodos)
    }

    // 要素を削除する関数を定義する
    const deleteTodo = (id) => {
        // filterというものを使って、条件に合わないやつを消す
        const newTodos = todos.filter(todo => id !== todo.id)

        setTodos(newTodos)
    }


    return (
        <>
            <Form addTodo={addTodo}/>
            <h2>やることリスト</h2>
            <List todos={todos} deleteTodo={deleteTodo} />
        </>
    )
}





export default App