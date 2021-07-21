import React from 'react';
import { Row , Col , Button , Modal } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import TodoCard from '../components/TodoCard'
import TodoCardList from '../components/TodoCardList'
import { useState } from 'react'
import ModalAddToDo from '../components/ModalAddToDo';


const STATUS = {
    TODO: 'TODO',
    DOING: 'DOING',
    DONE: 'DONE'
}

const TODOS = [
    {
        id: "1614863674192",
        text: "Eat cat",
        dueDate: "02/08/2021",
        status: STATUS.TODO
    },
    {
        id: "1614863800921",
        text: "Eat fish",
        dueDate: "14/05/2021",
        status: STATUS.DONE
    },
    {
        id: "1614863822679",
        text: "Eat duck",
        dueDate: "05/05/2022",
        status: STATUS.TODO
    },
    {
        id: "1614863870519",
        text: "Eat Mama",
        dueDate: "31/06/2021",
        status: STATUS.DOING
    },
    {
        id: "1614863900556",
        text: "Eat monkey",
        dueDate: "13/12/2021",
        status: STATUS.DONE
    },
    {
        id: "1614863928625",
        text: "Eat dog",
        dueDate: "21/11/2021",
        status: STATUS.DOING
    },
    {
        id: "1614863980661",
        text: "Eat sheep",
        dueDate: "02/08/2021",
        status: STATUS.TODO
    },
];



function Home() {
  const [todos, setTodos] = useState(TODOS);
  const [isVisible, setIsVisible] = useState(false);

  function handleAddTodo(values) {
    // console.log(values)
    const {text, dueDate} = values;
    try {
        // console.log('Add Todo work')
      setTodos([...todos, { id: String(Date.now()), text, dueDate, status: STATUS.TODO}]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsVisible(false);
    }
  }

  return (
    <>
      <Row>
        <Col span={8}>
          <TodoCardList
            header="TODO"
            todoItems={todos.filter((todo) => todo.status === STATUS.TODO)}
          />
        </Col>
        <Col span={8}>
          <TodoCardList
            header="DOING"
            todoItems={todos.filter((todo) => todo.status === STATUS.DOING)}
          />
        </Col>
        <Col span={8}>
          <TodoCardList
            header="DONE"
            todoItems={todos.filter((todo) => todo.status === STATUS.DONE)}
          />
        </Col>
      </Row>
      <div style={{ width: "100%", position: "absolute", bottom: 30, left: 0 }}>
        <Button
          size="large"
          type="primary"
          shape="circle"
          style={{
            position: "relative",
            transform: "translateX(50%)",
          }}
          onClick={() => setIsVisible(true)}
        >
          <PlusOutlined />
        </Button>
      </div>

    <ModalAddToDo 
        onAddTodo={handleAddTodo} 
        isVisible={isVisible} 
        onCancel={() => setIsVisible(false)} 
    />

    </>
  );
}

export default Home;
