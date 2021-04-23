import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import axios from "../../configs/axios"
import AuthContextProvider from '../../contexts/AuthContextProvider';
import localStorageService from '../../services/localStorageService';

function Status() {
  // const [user, setUser] = useState({});
  const { user, setUser } = useContext(AuthContextProvider.AuthContext);

  const [error, setError] = useState("");

  // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
  // const history = useHistory(); 
  // const { setIsAuthenticated } = useContext(AuthContextProvider.AuthContext)

  useEffect(() => {
    const getMe = async () => {
      try {
        const res = await axios.get("/users/me", {
          // headers: { // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
          // authorization: `Bearer ${localStorageService.getToken()}`
          // }
        });
        setUser(res.data.user)
      } catch(err) {
        // console.log(err) // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
        // if (err.response.status === 401) {
        //   localStorageService.clearToken();
        //   setIsAuthenticated(false);
        //   history.push("/");
        // }
        setError(err.response.data.message);
      }
    }

    getMe();
  }, []);
  
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        {(error) && <div className="alert alert-danger">{error}</div>}
        <h4>{`${user.firstName} ${user.lastName}`}</h4>
        <p>{user.status}</p>
      </div>
    </div>
  )
}

export default Status
