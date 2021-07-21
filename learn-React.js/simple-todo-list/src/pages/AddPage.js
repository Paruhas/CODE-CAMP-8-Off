// import logo from './logo.svg';
import '../App.css';
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import HomePage from './HomePage'

import Header from '../component/Header'


function AddPage(props) {

// console.log(props)

let history = useHistory();
// console.log(history.location.state)

const handleAddPageBack = (event) => {
    event.preventDefault();
    history.push('/')
}

const handleSubmitAdd = (event) => {
    event.preventDefault();
    console.log('ADD')
    console.log(props)
}

const handleGoToAdd = (event) => {
    // event.preventDefault();
    history.push('/add-page' , listToDo)
    // let dateAdd = prompt('',new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear() )
    // setListToDo ( [...listToDo , { textTD: text ,dateTD: dateAdd } ] )
  }


    return (
    <div className="App">


    <Header handleGoToAdd={props.handleGoToAdd} setListToDo={props.setListToDo} listToDo={props.listToDo} handleSubmitSearch={props.handleSubmitSearch}/>

        <div className='form-add'>
        

            <div className='form-add-box'>
                <div className='form-add-box-header'>
                    <p>
                        Add
                    </p>
                </div>


                <div className='form-add-box-data'>
                    <form>
                        <div>
                            <p>
                                Task                                
                            </p>
                            <div>
                                <input></input>
                            </div>
                        </div>
                        <div>
                            <p>
                                Due Date
                            </p>
                                <input type="date" className='dateBox' ></input>
                        </div>

                        <div className='button2button'>
                            <span><button type='submit' className='addPost' onClick={handleSubmitAdd}>Add Submit</button></span>
                            <button className='backToHome' onClick={handleAddPageBack}>Cancel</button>
                        </div>

                    </form>

                    

                </div>
            
            </div>

                
                
        </div>

        
    </div>

    )
}

export default AddPage