// import axios from "axios"; // ลดรูปจากการทำไฟล์ configs/axios
import { useContext, useState } from "react";
import localStorageService from "../../services/localStorageService"
import AuthContexts from "../../contexts/AuthContextProvider"
import { useHistory } from "react-router-dom";
import axios from "../../configs/axios"

function Register() {
  // const [input, setInput] = useState({}); // แก้ waring => กำหนด empty string ทั้งหมด
  const [input, setInput] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState({})

  const setIsAuthenticated = useContext(AuthContexts.AuthContext);

  const history = useHistory();

  const handlerInputChange = (e) => {
    const { name , value } = e.target; // e.target.name === name ของช่อง input ; e.target.value === e.target.value
    setInput(prev => ({ ...prev, [name]:value }) );  // [] ครอบ name เพื่อให้ KEY อ้างอิงจากตัวแปร
    
    console.log(input)
    if (name === "email") {
      if (!value) {
        setError(prev => ({ ...prev, email: "email is required"})); 
      } else if ( !( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ) ) {
        setError(prev => ({ ...prev, email: "invalid email format"})); 
      } else {
        setError(prev => ({ ...prev, email: false }));
      }
    }

    if ( name === "firstName" ) {};

  };

  const handlerSubmit = (e) => {
    const { email, firstName, lastName, password, confirmPassword } = input; // destructuring (ไม่ได้เอาไปใช้ ขี้เกียจ)
    e.preventDefault();
    axios.post('/register', {
      email: input.email,
      firstName: input.firstName,
      lastName: input.lastName,
      password: input.password,
      confirmPassword: input.confirmPassword
    }).then(
      res => {
        localStorageService.setToken(res.data.token); // อิงตามที่ backend ส่งมา ; ได้รับ Token ครั้งแรก
        setIsAuthenticated(true);
        history.push("/");
    }).catch(err => {
      if (err.response) { // err จาก axios (จาก server)
        setError({ server: err.response.data.msg }); // อิงตามที่ backend ส่งมา
      } else {
        setError({ front: err.message }); // ของ frontend
      }
      // console.dir(err) ไว้ดูว่า error อะไรจากการติดต่อ backend
    });
  };

  return (
    <div className="col-md-6">
      <h4>ยังไม่มีบัญชี ? สร้างบัญชี</h4>

      {error.server && <div className="alert alert-danger">{error.server}</div> }

      <form onSubmit={handlerSubmit}>
        <div className="form-group">
          <input className="form-control" type="text" name="email" placeholder="อีเมล" 
          value={input.email} onChange={handlerInputChange}/>
        </div>

        {error.email && <span className="help-block" style={{color:"red"}}>{error.email}</span>}

        <div className="form-group">
          <input className="form-control" type="text" name="firstName" placeholder="ชื่อจริง" 
          value={input.firstName} onChange={handlerInputChange}/>
        </div>
        
        {error.firstName && <span className="help-block" style={{color:"red"}}>{error.firstName}</span>}

        <div className="form-group">
          <input className="form-control" type="text" name="lastName" placeholder="นามสกุล" 
          value={input.lastName} onChange={handlerInputChange}/>
        </div>
                
        {error.lastName && <span className="help-block" style={{color:"red"}}>{error.lastName}</span>}

        <div className="form-group">
          <input className="form-control" type="password" name="password" placeholder="รหัสผ่าน" 
          value={input.password} onChange={handlerInputChange}/>
        </div>
                        
        {error.password && <span className="help-block" style={{color:"red"}}>{error.password}</span>}

        <div className="form-group">
          <input className="form-control" type="password" name="confirmPassword" placeholder="ยืนยันรหัสผ่าน" 
          value={input.confirmPassword} onChange={handlerInputChange}/>
        </div>
                
        {error.confirmPassword && <span className="help-block" style={{color:"red"}}>{error.confirmPassword}</span>}

        <button className="btn btn-success" type="submit">
          สมัคร
        </button>
      </form>
    </div>
  );
}

export default Register;
