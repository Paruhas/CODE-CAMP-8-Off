import { useState , useEffect } from "react"

function AppFn() {
  const [list, setList] = useState([
    {
      task: 'Todo1',
      status: true,
    },
    {
      task: 'Todo2',
      status: false,
    },
    {
      task: 'Todo3',
      status: true,
    },
  ])

  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    // console.log(event)
    // console.log(event.target.value)
    setText(event.target.value);
  };

  // // แบบไม่ใช้ Form Add จาก ปุ่ม Add
  // const handleAdd = () => {
  //   setList( [ ...list, { task: text, status: false } ] )
  // };

  const handleSubmitAddForm = (event) => {
    event.preventDefault();
    // console.log('test submit')
    setList( [ ...list, { task: text, status: false } ] );
    setText('');
  }

  const handleDelete = (indexToDelete) => {
    setList(list.filter( (item, index) => index !== indexToDelete ));
  }

  const handleEdit = (indexToEdit) => {
    const newText = prompt('Edit Text',list[indexToEdit].task);
    // console.log(newText);
    // console.log(list[indexToEdit].task)
    list[indexToEdit].task = newText
    setList ( [ ...list ])

    // setList(
    //   list.map((item , index) => 
    //     indexToEdit === index ? { ...item, task: newText } : item
    //   )
    // )
  }

  const handleToggle = (indexToToggle) => {
    setList(
      list.map((item, index) =>
        indexToToggle === index ? { ...item, status: !item.status } : item
      )
    );

  }

  return(
    <div>
        <form onSubmit={handleSubmitAddForm}>
          <input 
            type='text'
            value={text}
            onChange={handleTextChange}
          ></input>
          <button
          
          >Add</button>
        </form>

        {/* แบบไม่ใช้ Form Add จาก ปุ่ม Add */}
        {/* <div>
          <input 
            type='text'
            value={text}
            onChange={handleTextChange}
          ></input>
          <button
            onClick={handleAdd}
          >Add</button>
        </div> */}
        
        <ul>
          {/* {list.map((item , index) => ( // { task: 'Todo1', status: false,} => const { task } = item
            <li key={index}> */}
          {list.map(({ task , status } , index) => (
            <li key={index}>
            <span 
              style={{ 
                marginRight:'20px', 
                textDecoration: status ?'line-through' : 'none',
              }}
              onClick={() => handleToggle(index)}
            >
              { task }
            </span>
              <button
              onClick={() => handleEdit(index)}
              >Edit</button>
              <button
              onClick={() => handleDelete(index)}
              >Delete</button>
          </li> 
          )
          )}
        </ul>
      </div>
  )
}

export default AppFn