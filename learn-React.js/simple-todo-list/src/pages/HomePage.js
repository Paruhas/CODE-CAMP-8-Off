// import logo from './logo.svg';
import { useState } from 'react'
import { useHistory } from "react-router-dom";

import Header from '../component/Header'

function HomePage() {
  const [listToDo,setListToDo] = useState([
    {
      textTD: 'Requirement',
      dateTD: '07/02/2021'
    },
  ])

  // console.log(listToDo)
  
  const [listDoing,setListDoing] = useState([
    {
      textD: 'Prototype',
      dateD: '21/02/2021'
    },
  ])

  // console.log(listDoing)
  
  const [listDone,setListDone] = useState([
    {
      textDN: 'Wireframe',
      dateDN: '14/02/2021'
    },
  ])

  // console.log(listDone)
  
  let history = useHistory();

  const handleGoToAdd = (event) => {
    // event.preventDefault();
    history.push('/add-page' , listToDo)
    // let dateAdd = prompt('',new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear() )
    // setListToDo ( [...listToDo , { textTD: text ,dateTD: dateAdd } ] )
  }
  



  const handleSubmitSearch = (event) => {
    event.preventDefault();
  }



  // TO DO => DELETE
  const handleToDo_Delete = (indexToDo_Delete) => {
    // console.log(indexToDo_Delete)
    setListToDo(listToDo.filter( (item, index) => index !== indexToDo_Delete))
  }
  // TO DO to DOING
  const handleToDoToDoing = (indexToDoToDoing) => {
    setListDoing( [...listDoing, {textD: listToDo[indexToDoToDoing].textTD , dateD: listToDo[indexToDoToDoing].textTD }])
    // console.log(listToDo[indexToDoToDoing])
    // console.log(indexToDoToDoing)
    setListToDo(listToDo.filter( (item, index) => index !== indexToDoToDoing ))
  }
  // TO DO to DONE
  const handleToDoToDone = (indexToDoToDone) => {
    setListDone( [...listDone, {textDN: listToDo[indexToDoToDone].textTD , dateDN: listToDo[indexToDoToDone].textTD }])
    // console.log(listToDo[indexToDoToDone])
    // console.log(indexToDoToDone)
    setListToDo(listToDo.filter( (item, index) => index !== indexToDoToDone ))
  }



  // DOING => DELETE
  const handleDoing_Delete = (indexDoing_Delete) => {
    // console.log(indexDoing_Delete)
    setListDoing(listDoing.filter( (item, index) => index !== indexDoing_Delete))
  }
  // DOING to TO DO
  const handleDoingToToDo = (indexDoingToToDo) => {
    setListToDo ( [...listToDo, {textTD: listDoing[indexDoingToToDo].textD , dateTD: listDoing[indexDoingToToDo].textD }])
    // console.log(listDoing[indexDoingToToDo])
    // console.log(indexDoingToToDo)
    setListDoing (listDoing.filter( (item, index) => index !== indexDoingToToDo ))
  }
  // DOING to DONE
  const handleDoingToDone = (indexDoingToDone) => {
    setListDone ( [...listDone, {textDN: listDoing[indexDoingToDone].textD , dateDN: listDoing[indexDoingToDone].textD }])
    // console.log(listDoing[indexDoingToDone])
    // console.log(indexDoingToDone)
    setListDoing (listDoing.filter( (item, index) => index !== indexDoingToDone ))
  }



  // DONE => DELETE
  const handleDone_Delete = (indexDone_Delete) => {
    // console.log(indexDone_Delete)
    setListDone(listDone.filter( (item, index) => index !== indexDone_Delete))
  }
  // DONE to TO DO
  const handleDoneToToDo = (indexDoneToToDo) => {
    setListToDo ( [...listToDo, {textTD: listDone[indexDoneToToDo].textDN , dateTD: listDone[indexDoneToToDo].textDN }])
    // console.log(listDoing[indexDoneToToDo])
    // console.log(indexDoneToToDo)
    setListDone (listDone.filter( (item, index) => index !== indexDoneToToDo ))
  }
  // DONE to DOING
  const handleDoneToDoing = (indexDoneToDoing) => {
    setListDoing ( [...listDoing, {textD: listDone[indexDoneToDoing].textDN , dateD: listDone[indexDoneToDoing].textDN}])
    // console.log(listDoing[indexDoneToDoing])
    // console.log(indexDoneToDoing)
    setListDone (listDone.filter( (item, index) => index !== indexDoneToDoing ))
  }



  return (
    <div className="App">

      <Header handleGoToAdd={handleGoToAdd} setListToDo={setListToDo} listToDo={listToDo} handleSubmitSearch={handleSubmitSearch}/>
      
      <div className='body-container'>
      

        <div className='todo'>
          <div className='todo-header'>
            <p>
              TO DO
            </p>
          </div>


      {listToDo.map(({ textTD , dateTD } , index) => (
          <div className='todo-data' key={index}>
            <div className='todo-data-text'>
              <p>
                {textTD}
              </p>
              <p className='date'>
                {dateTD}
              </p>
            </div>

            <button type='submit' className='editButton'>Edit</button>
            <button type='submit' className='deleteButton' onClick={() => handleToDo_Delete(index)}>Delete</button>
            <button type='submit' className='doingButton' onClick={() => handleToDoToDoing(index)}>Doing</button>
            <button type='submit' className='doneButton' onClick={() => handleToDoToDone(index)}>Done</button>
            
          </div>
        )
      )}

          
      </div>

        
        <div className='doing'>
          <div className='doing-header'>
            <p>
              DOING
            </p>
          </div>


      {listDoing.map(({ textD , dateD } , index) => (
          <div className='doing-data' key={index}>
            <div className='doing-data-text'>
              <p>
                {textD}
              </p>
              <p className='date'>
                {dateD}
              </p>
            </div>
            
            <button type='submit' className='editButton'>Edit</button>
            <button type='submit' className='deleteButton' onClick={() => handleDoing_Delete(index)}>Delete</button>
            <button type='submit' className='toDoButton' onClick={() => handleDoingToToDo(index)}>ToDo</button>
            <button type='submit' className='doneButton' onClick={() => handleDoingToDone(index)}>Done</button>
            
          </div>
        )
      )}


        </div>

        <div className='done'>
          <div className='done-header'>
            <p>
              DONE
            </p>        
          </div>


      {listDone.map(({ textDN , dateDN } , index) => (
          <div className='done-data' key={index}>
            <div className='done-data-text'>
              <p>
                {textDN}
              </p>
              <p className='date'>
                {dateDN}
              </p>
            </div>
            
            <button type='submit' className='editButton'>Edit</button>
            <button type='submit' className='deleteButton' onClick={() => handleDone_Delete(index)}>Delete</button>
            <button type='submit' className='toDoButton' onClick={() => handleDoneToToDo(index)}>ToDo</button>
            <button type='submit' className='doingButton' onClick={() => handleDoneToDoing(index)}>Doing</button>

          </div>
        )
      )}
  

        </div>

      </div>

      <footer>

      </footer>

    </div>
  );
}

export default HomePage;
