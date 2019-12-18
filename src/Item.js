import React, {useState} from 'react';
import styled from 'styled-components'

const Item = ({id, text, deleteTodo}) => {
    // isDoneを変更のきく関数として指定する
    const [isDone, setIsDone] = useState(false)

    //変数でボタンの表示部分をかく
    const btnStatus = isDone ? '未完了に戻す' : '完了'


    return (
        <ItemWrapper>
            <p> <span> {id} </span> {text} </p>
            <button onClick={() => setIsDone(!isDone)}>
                {btnStatus}
            </button>
            <button onclick={() => deleteTodo(id)}>
                削除
            </button>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.li`
    background-color: orange;
`

export default Item