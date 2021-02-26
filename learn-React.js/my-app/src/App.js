import logo from './logo.svg';
import './App.css';
// import GreetingMsg from './GreetingMsg.js';
// import Product from './ProductItem';

// function App() {
//   return (
//     <div  className='App'>
//       <h1>React Codecmap #8</h1>
//       { GreetingMsg() }
//       { Product( {
//         title: 'XiaoMi Air Purifie', 
//         description: 'Lorem ipsum dolor sit amet.', 
//         price: 500 
//         } ) }
//       { Product( {
//         title: '', 
//         description: '', 
//         price: 0 
//         } ) }
//     </div>
//   );
// }



// import Counter from './counter'

// function App() {
//   return (
//     <div className="App">
//       { Counter() }
//     </div>
//   );
// }

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  return (
    <div>
      <div className='postapp-header'>
        <h1 
        // style={{ // แบบ inline ปกติ
        //   color:"red",
        //   fontSize: "2rem",}}
        // style={{ // แบบ inline @emotion
        css = {css`
        color:lightgreen;
        font-size: 2rem;
        `}
          >
            Post App</h1>
          <button className='add-post-button'>
            Add Post
          </button>
      </div>

      <div className='post-list-container'>
        <div className='post-list'>
          <div className='post'>
            <h3>Title: Post</h3>
            <p>Post Content</p>
            <div className='post-footer'>
              <span>Author: John</span>
              <div className='post-footer-button'>
                <button className='post-footer-edit-button'>Edit</button>
                <button className='post-footer-delete-button'>Deleted</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}








export default App;
