// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;






// import { useState } from 'react'

// function App() {
//   const [list, setList] = useState([
//     {
//       task: 'Todo1',
//       status: true
//     }, 
//     {
//       task: 'Todo2',
//       status: true  
//     };
//   ]);
//   return
// }

// export default App;





// import React from 'react';

// class App extends React.Component {

// }

// export default App;





import React, { Component } from 'react';

class App extends Component {
  state = {
    list: [
            { 
              task: 'Todo 1',
              status: true,
            },
            {
              task: 'Todo 2',
              status: false,
            },
            {
              task: 'Todo 3',
              status: false,
            },
          ],
          text: '',
    // loading: false,
    // isError: false,
  };

  // name = 'Sine';

  // // ประกาศแบบปกติ
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     list: [],
  //     loading: false,
  //     isError: false,
  //   };
  // console.log(this.state);
  // }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleAdd = () => {

    // // แบบยาวๆ
    // const newList = [...this.state.list];
    // newList.push({ task: this.state.text , status: false });
    // this.setState({
    //     list: newList,
    //     text: '',
    // });

    // แบบสั้นๆ
    this.setState({
        list: [...this.state.list, { task: this.state.text , status: false }],
        text: '',
    });

  };
  
  handleEdit = (indexToEdit) => {
    // console.log(indexToEdit);
    // console.log(this.state.list[indexToEdit].task);
    const textToEdit = prompt('Enter task',this.state.list[indexToEdit].task);
    const newList = [...this.state.list]; // clone ทั้งก้อน มาก่อนแล้ว > ไปที่ตำแหน่ง index ที่เราส่งมาแล้วให้ค่าใหม่เข้าไป
    newList[indexToEdit].task =  textToEdit;
    this.setState({ 
      list: newList,
    })
  };

  handleDelete = (indexToDelete) => {
    // console.log(indexToDelete);
    this.setState({
        list: this.state.list.filter((item,index) => index !== indexToDelete),
    });
  };
  
  handleToggleStatus = (indexToToggle) => {
    // console.log(indexToToggle);
    const newList = [...this.state.list];
    newList[indexToToggle].status = !newList[indexToToggle].status 
    this.setState({
        list: newList,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <input 
          type='text' value={this.state.text} onChange={this.handleTextChange}
        ></input>
        <button
          onClick={this.handleAdd}
          >Add</button>
        <ul>
          {this.state.list.map((item , index) => (
          <li key={index}>
          {/* ใส่ key={index} ไม่ให้มัน waring child*/}
            <span 
              style={{ 
                marginRight:'20px', 
                textDecoration: item.status ? 'line-through' : 'none'
              }}
              onClick={() => this.handleToggleStatus(index)}
            >
              {item.task} &nbsp;
            </span>
              <button
              onClick={() => this.handleEdit(index)}
              >Edit</button>
              <button
              onClick={() => this.handleDelete(index)}
              >Delete</button>
          </li> ) )}
          {/* <li>
            Todo 2 &nbsp;
              <button>Edit</button>
              <button>Delete</button>
          </li>
          <li>
            Todo 3 &nbsp;
              <button>Edit</button>
              <button>Delete</button>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default App;