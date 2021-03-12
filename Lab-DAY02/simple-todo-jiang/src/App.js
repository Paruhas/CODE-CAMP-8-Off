import './App.css';
import Card from './Card';
import Header from './Header';
import React , { useState } from 'react'

function App() {
  const [list, setList] = useState([
    {id: 1, task:"Job1",date:15-10-2021, status:"todo"},
    {id: 2, task:"Job2",date:16-10-2021, status:"todo"},
    {id: 3, task:"Job3",date:17-10-2021, status:"todo"},
    {id: 4, task:"Job4",date:18-10-2021, status:"todo"},
    {id: 5, task:"Job5",date:19-10-2021, status:"doing"},
    {id: 6, task:"Job6",date:20-10-2021, status:"doing"},
    {id: 7, task:"Job7",date:21-10-2021, status:"done"},
  ])

// ท่า === ทำ Function ลบ ใน App แล้ว ส่งไปให้ Card ใช้
// จะลบตัวไหน ให้ส่งมาสั่ง ลูก ให้ส่งมา แม่ จะได้กรองและ update ค่าให้ ; ส่ง handleDelete ให้ Card
  const handleDelete = (id) => {
    setList(
      list.filter( (x) => x.id !== id )
    )
  }

  const handleNext = (id) => {
    setList(
      list.map ( x =>
        x.id === id
        ? {...x, status: x.status === 'todo' ? 'doing' : 'done'}
        : x )
    )
  }

  return (
    <div className="App">
        <Header list={list} setList={setList} />
        <div className='card-area'>
          <Card name='Todo' 
          list={list.filter( (x) => x.status === 'todo' )} 
          handleDelete={handleDelete}
          handleNext={handleNext}
          />       
          <Card name='Doing' 
          list={list.filter( (x) => x.status === 'doing' )} 
          handleDelete={handleDelete}
          handleNext={handleNext}
          />       
          <Card name='Done' 
          list={list.filter( (x) => x.status === 'done' )} 
          handleDelete={handleDelete}
          handleNext={handleNext}
          />       
        </div>
    </div>
  );
}

export default App;


// x ของพี่เจียง ในพวก ARR Fn คือ === item ในแบบที่เราเคยเขียน