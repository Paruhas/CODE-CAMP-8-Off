import React , { useState } from 'react'
import './App.css'

function Header(props) {
    console.log(props)
    
    const [text, setText] = useState('')
    const handleAdd = () => {
        props.setList( [...props.list, 
            { 
                id : props.list[props.list.length - 1].id + 1, // ให้ id เป็นเลขสุดท้ายแน่นอน ป้องกัน delete ตัว 3 4 add ใหม่แล้วไม่ได้เลขต่อจากเลขสุดท้าย
                task: text, 
                status: 'todo' 
            }
        ] )
        setText('')
    }

    return (
        <div className='header'>
            <p>Todo App</p>
            <div>
                <input type='text' value={text} onChange={ (e) => setText(e.target.value) } />
                <button>Search</button>
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default Header
