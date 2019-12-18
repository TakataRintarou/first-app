import React, {useState} from 'react';

const Form = ({addTodo}) => {

    // 入力値をstateで管理する。理由は後ろでわかる

    const [value, setValue] = useState('');


    // 今回は<Form> にイベントをつけていく

    return (
        <form onSubmit={(e) => {
            // まずはデフォルトでサイトが更新してしまうのを防ぐ
            e.preventDefault();

            // App.jsで書いたaddTodoを用いて値を入力する
            addTodo(value)

            // デフォルトの作用を停止しているので入力後に文字を消すためにから文字を使う 
            setValue('')

        }}>
            {/* 文字が変わるたびにsetTodosの値も変えていく */}
            <input type="text" onChange={(e) => setValue(e.target.value)} 
            
            // valueを繋げる？ここは完璧には理解できていないが、大体わかる。
            value={value}
            />
            <button type="submit">やることリストに追加</button>
        </form>
    )
}

export default Form