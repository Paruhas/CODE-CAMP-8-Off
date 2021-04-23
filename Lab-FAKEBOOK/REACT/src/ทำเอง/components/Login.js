import React from 'react'

function Login() {
    return (
        <div>
            <form className="inputFrom">
                <h3>ลงชื่อเข้าใช้</h3>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>LOGIN</button>
            </form>
        </div>
    )
}

export default Login
