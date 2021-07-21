import React from 'react'
import { List , Typography } from 'antd'
import TodoCard from './TodoCard'

const { Title } = Typography;

function TodoCardList( { todoItems , header } ) {
    console.log(todoItems)
    return (
        <List header={<Title>{header}</Title>}>
            {todoItems.map(todo => {
                return (
                <List.Item key={todo.id}>
                    <TodoCard todo={todo} />
                </List.Item>
                )
            })}
        </List>
    )
}

export default TodoCardList
