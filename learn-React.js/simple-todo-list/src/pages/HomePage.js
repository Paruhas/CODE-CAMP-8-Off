// import logo from './logo.svg';
import { useState , useEffect } from 'react'
import { useHistory } from "react-router-dom";
import AddPage from './AddPage'
import Header from '../component/Header'
import ToDo from '../component/ToDo'
import Done from '../component/Done'
import Doing from '../component/Doing'

function HomePage() {
  const [listToDo,setListToDo] = useState([
    {
      textTD: 'Requirement',
      dateTD: '7/2/2021'
    },
  ])

  // console.log(listToDo)
  
  const [listDoing,setListDoing] = useState([
    {
      textD: 'Prototype',
      dateD: '21/2/2021'
    },
  ])

  // console.log(listDoing)
  
  const [listDone,setListDone] = useState([
    {
      textDN: 'Wireframe',
      dateDN: '14/2/2021'
    },
  ])

  // console.log(listDone)
  
  let history = useHistory();

  const [textInput, setTextInput] = useState('')

  const handleGoToAdd = (event) => {
    event.preventDefault();
    // history.push('/add-page')
    let today = new Date().getTime();
    let dateDeadline = today + (7 * 24 * 60 * 60 * 1000);
    let dateAdd = prompt('',new Date(dateDeadline).getDate() + '/' + (new Date(dateDeadline).getMonth() + 1) + '/' + new Date(dateDeadline).getFullYear() )
    setListToDo ( [...listToDo , { textTD: textInput ,dateTD: dateAdd } ] )
    setTextInput('')
  }
  

// Seacrh Fn (not finish) {
    const [searchKey, setSearchKey] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
    const handleSubmitSearch = (event) => {
//       event.preventDefault();
      console.log(searchKey)
    }
  


  // TO DO => DELETE
  const handleToDo_Delete = (indexToDo_Delete) => {
    // console.log(indexToDo_Delete)
    setListToDo(listToDo.filter( (item, index) => index !== indexToDo_Delete))
  }
  // TO DO to DOING
  const handleToDoToDoing = (indexToDoToDoing) => {
    setListDoing( [...listDoing, {textD: listToDo[indexToDoToDoing].textTD , dateD: listToDo[indexToDoToDoing].dateTD }])
    // console.log(listToDo[indexToDoToDoing])
    // console.log(indexToDoToDoing)
    setListToDo(listToDo.filter( (item, index) => index !== indexToDoToDoing ))
  }
  // TO DO to DONE
  const handleToDoToDone = (indexToDoToDone) => {
    setListDone( [...listDone, {textDN: listToDo[indexToDoToDone].textTD , dateDN: listToDo[indexToDoToDone].dateTD }])
    // console.log(listToDo[indexToDoToDone])
    // console.log(indexToDoToDone)
    setListToDo(listToDo.filter( (item, index) => index !== indexToDoToDone ))
  }
  // TO DO EDIT 
  const handleToDo_Edit = (indexToEdit) => {
    // console.log('ToDoEDIT')
    // console.log(listToDo)
    let newToDoText = prompt('',listToDo[indexToEdit].textTD);
    if (newToDoText == null) { return newToDoText = listToDo[indexToEdit].textTD }
    setListToDo (listToDo.filter( (item, index) => index == indexToEdit ? listToDo[index].textTD = newToDoText : listToDo[index].textTD = listToDo[index].textTD))
  }


  // DOING => DELETE
  const handleDoing_Delete = (indexDoing_Delete) => {
    // console.log(indexDoing_Delete)
    setListDoing(listDoing.filter( (item, index) => index !== indexDoing_Delete))
  }
  // DOING to TO DO
  const handleDoingToToDo = (indexDoingToToDo) => {
    setListToDo ( [...listToDo, {textTD: listDoing[indexDoingToToDo].textD , dateTD: listDoing[indexDoingToToDo].dateD }])
    // console.log(listDoing[indexDoingToToDo])
    // console.log(indexDoingToToDo)
    setListDoing (listDoing.filter( (item, index) => index !== indexDoingToToDo ))
  }
  // DOING to DONE
  const handleDoingToDone = (indexDoingToDone) => {
    setListDone ( [...listDone, {textDN: listDoing[indexDoingToDone].textD , dateDN: listDoing[indexDoingToDone].dateD }])
    // console.log(listDoing[indexDoingToDone])
    // console.log(indexDoingToDone)
    setListDoing (listDoing.filter( (item, index) => index !== indexDoingToDone ))
  }
  // DOING EDIT 
  const handleDoing_Edit = (indexToEdit) => {
    // console.log('DoingEDIT')
    // console.log(listDoing)
    let newDoingText = prompt('',listDoing[indexToEdit].textD);
    if (newDoingText == null) { return newDoingText = listDoing[indexToEdit].textD }
    setListDoing (listDoing.filter( (item, index) => index == indexToEdit ? listDoing[index].textD = newDoingText : listDoing[index].textD = listDoing[index].textD))
  }



  // DONE => DELETE
  const handleDone_Delete = (indexDone_Delete) => {
    // console.log(indexDone_Delete)
    setListDone(listDone.filter( (item, index) => index !== indexDone_Delete))
  }
  // DONE to TO DO
  const handleDoneToToDo = (indexDoneToToDo) => {
    setListToDo ( [...listToDo, {textTD: listDone[indexDoneToToDo].textDN , dateTD: listDone[indexDoneToToDo].dateDN }])
    // console.log(listDoing[indexDoneToToDo])
    // console.log(indexDoneToToDo)
    setListDone (listDone.filter( (item, index) => index !== indexDoneToToDo ))
  }
  // DONE to DOING
  const handleDoneToDoing = (indexDoneToDoing) => {
    setListDoing ( [...listDoing, {textD: listDone[indexDoneToDoing].textDN , dateD: listDone[indexDoneToDoing].dateDN}])
    // console.log(listDoing[indexDoneToDoing])
    // console.log(indexDoneToDoing)
    setListDone (listDone.filter( (item, index) => index !== indexDoneToDoing ))
  }
  // DONE EDIT
  const handleDone_Edit = (indexToEdit) => {
    // console.log('DoneEDIT')
    // console.log(listDone)
    let newDoneText = prompt('',listDone[indexToEdit].textDN);
    if (newDoneText == null) { return newDoneText = listDone[indexToEdit].textDN }
    setListDone (listDone.filter( (item, index) => index == indexToEdit ? listDone[index].textDN = newDoneText : listDone[index].textDN = listDone[index].textDN))
  }



  return (
    <div className="App">

      <Header handleGoToAdd={handleGoToAdd} setListToDo={setListToDo} listToDo={listToDo} handleSubmitSearch={handleSubmitSearch} setTextInput={setTextInput} textInput={textInput} setSearchKey={setSearchKey} />
      
      <div className='body-container'>
      
      <ToDo setListDone={setListDone} listDone={listDone} setListDoing={setListDoing} listDoing={listDoing} setListToDo={setListToDo} listToDo={listToDo} handleToDo_Edit={handleToDo_Edit} handleToDo_Delete={handleToDo_Delete} handleToDoToDoing={handleToDoToDoing} handleToDoToDone={handleToDoToDone} />
        
        
      <Doing setListDone={setListDone} listDone={listDone} setListDoing={setListDoing} listDoing={listDoing} setListToDo={setListToDo} listToDo={listToDo} handleDoing_Edit={handleDoing_Edit} handleDoing_Delete={handleDoing_Delete} handleDoingToToDo={handleDoingToToDo} handleDoingToDone={handleDoingToDone} />


      <Done setListDone={setListDone} listDone={listDone} setListDoing={setListDoing} listDoing={listDoing} setListToDo={setListToDo} listToDo={listToDo} handleDone_Edit={handleDone_Edit} handleDone_Delete={handleDone_Delete} handleDoneToToDo={handleDoneToToDo} handleDoneToDoing={handleDoneToDoing} />

      </div>

      <footer>

      </footer>

    </div>
  );
}

export default HomePage;
