import { useState , useEffect } from "react"
import Header from './components/Header'
import Container from './components/Container'  

function AppRefactor() {
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
    ]);

    // Addข้อมูลเพิ่ม ; แบบ Props Fn handleAdd จากตัวหลัก => ส่ง Fn ด้วย
    const handleAdd = (newItem) => {
        setList([...list, newItem]);
    };

    const handleDelete = (indexToDelete) => {
          setList(list.filter((item, index) => 
            index !== indexToDelete
          ))
    }

    const handleEdit = (indexToEdit) => {
      const newText = prompt('')
        setList(list.map((item, index) => 
            index == indexToEdit ? {...item , task:newText} : item
        ))
    }

    const handleToggle = (indexToToggle) => {
      setList(list.map((item, index) => 
           index == indexToToggle ? {...item , status: !item.status } : item
      ))
    }


    return(
        <div>
            <Header 
              // list={list} 
              // setList={setList}
              handleAdd={handleAdd}
            />
            {/* ส่ง list เข้าไปใน Container.js === ส่ง props เพื่อ update state ได้ ใน component ที่รับมา */}
            <Container 
              list={list} 
              // setList={setList} 
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleToggle={handleToggle}
            />
        </div>
    );
}

export default AppRefactor;