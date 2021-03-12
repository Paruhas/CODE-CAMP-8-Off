import React from 'react'

function Card(props) {
    console.log(props)

    const deleteItem = (id) => props.handleDelete(id)
    
    const nextItem = (id) => props.handleNext(id)

    return (
        <div className='card'>
            <h3>{props.name}</h3>
            {props.list.map( (x) => (
                <div>
                    <span> {x.id} : {x.task} </span>
                    <button onClick={ () => deleteItem(x.id) }>Del</button>
                    { x.status !== 'done' && 
                    <button onClick={ () => nextItem(x.id) }>Next</button> }
                    
                    <button>Edit</button>
                </div>
            ) ) }
        </div>
    )
}

export default Card


// ค่า props Card(name) มาจากแม่  App.js ซึ่งส่ง name='' มา โดยการที่ Import เข้าไป คนนั้นจะเป็นแม่ของตัวที่ Import (แม่:App ลูก:Card)

// && ถ้าtrue => ทำต่อไป / ถ้า false หยุดทำเลย