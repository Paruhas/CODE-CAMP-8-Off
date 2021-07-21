import { useState } from "react"

function Header(props) {
    // console.log(props)
    const [text, setText] = useState('');
    
    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        // // Addข้อมูลเพิ่ม ; แบบ Props จากในนี้ออกไป
        // props.setList([
        //     ...props.list,
        //     { 
        //         task: text, 
        //         status: false,
        //     }
        // ]);
        // setText('');

        // Addข้อมูลเพิ่ม ; แบบ Props Fn handleAdd จากตัวหลัก
        props.handleAdd({ task: text, status: false});
        setText('');
    };

    return (
    <div>
        <form
        onSubmit={handleSubmitForm}
        >
            <input 
            type='text'
            value={text}
            onChange={handleTextChange}
            ></input> &nbsp;
            <button
            >Add</button>
        </form>
    </div>
    )
}

export default Header