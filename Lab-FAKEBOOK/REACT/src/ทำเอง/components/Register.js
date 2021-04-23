import React from 'react'

function Register() {
    return (
        <div>
            <form className="inputFrom">
                <h3>ยังไม่มีบัญชี? ลงทะเบียน</h3>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="first name"/>
                <input type="text" placeholder="last name"/>
                <input type="password" placeholder="password"/>
                <input type="password" placeholder="confrim password"/>
                <button>REGISTER</button>
            </form>
        </div>
    )
}

export default Register
