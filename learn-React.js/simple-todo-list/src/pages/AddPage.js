// import logo from './logo.svg';
import '../App.css';
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import HomePage from './HomePage'



function AddPage() {

let history = useHistory();
console.log(history.location.state)

const handleAddPageBack = (event) => {
    event.preventDefault();
    history.push('/')
}

const handleSubmitAdd = (event) => {
    event.preventDefault();
    console.log('ADD')
    console.log(setListDoing)
}


    return (
    <div className="App">

        <header>

            <div className='h-left'>
                <p>To Do List App</p>
            </div>

            <div className='h-right'>
                <input type='text' placeholder='Search' ></input>
                <button className='searchButton' >Search</button>
                <button className='AddButton' >Add</button>
            </div>
        
        </header>

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