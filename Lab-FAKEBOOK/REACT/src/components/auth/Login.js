// import axios from 'axios' // ลดรูปจากการทำไฟล์ configs/axios
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContexts from '../../contexts/AuthContextProvider'
import localStorageService from '../../services/localStorageService'
import axios from "../../configs/axios"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { setIsAuthenticated } = useContext(AuthContexts.AuthContext)

  const history = useHistory()

  const validateInput = () => {
    const newError = {}
    if (!email) newError.email = 'email is required'
    if (!password) newError.password = 'password is required'
    setError(newError)
  }
  // const handlerInputChange = (e) => { // แบบ Validate จาก onChange
  //   const { name , value } = e.target;
  //   setEmail(value);
  //   if(name === 'email') {
  //     if (!value) {
  //       setError({ ...error, email: "email is required" });
  //     } else {
  //       setError({ ...error, email: false });
  //     }
  //   }
  // };

  const handlerSubmit = async (e) => {
    try {
      e.preventDefault()
      validateInput()
      const res = await axios.post('/login', {
        email: email,
        password: password
      })
      // console.log(res)
      // console.log(res.data.token)
      // localStorage.setItem( 'token' , res.data.token ); // ทำ setItem  token เป็นไฟล์ ในโฟลเดอร์ service แยกออกไป
      localStorageService.setToken(res.data.token); // ได้รับ Token ครั้งแรก
      setIsAuthenticated(true)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="col-md-6">
      <h4>ลงชื่อเข้าสู่ระบบ</h4>
      <form onSubmit={(e) => handlerSubmit(e)}>
        {' '}
        {/* ทำแบบนี้ก็ได้ แต่แค่ {handlerSubmit} โปรแกรมก็เข้าใจ */}
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="อีเมล"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && (
            <span className="help-block" style={{ color: 'red' }}>
              {' '}
              {error.email}{' '}
            </span>
          )}{' '}
          {/* ทำกล่องแสดงเมื่อมีการ Error Validate*/}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <span className="help-block" style={{ color: 'red' }}>
              {' '}
              {error.password}{' '}
            </span>
          )}{' '}
          {/* ทำกล่องแสดงเมื่อมีการ Error Validate*/}
        </div>
        <button className="btn btn-primary" type="submit">
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  )
}

export default Login
