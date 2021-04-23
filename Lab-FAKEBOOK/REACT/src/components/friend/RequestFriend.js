import React, { useContext } from 'react'
import axios from '../../configs/axios';
import { useEffect, useState } from 'react';
import localStorageService from '../../services/localStorageService';
import AuthContextProvider from '../../contexts/AuthContextProvider';
import { useHistory } from 'react-router';


function RequestFriend() {
  const [requestFriends, setRequestFriends] = useState([]);

  const [error, setError] = useState("");

  // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
  const history = useHistory();
  const { setIsAuthenticated } = useContext(AuthContextProvider.AuthContext)

  useEffect(() => {
    const fetchRequestList = async () => {
      try {
        const res = await axios.get('/friends/request-list' , {
            // headers: { // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
            //   authorization: `Bearer ${localStorageService.getToken()}`
            // }
        });
        // console.log(res)
        // console.log(res.config);
        setRequestFriends(res.data.friendsList);
      } catch(err) {
        // console.log(err) // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
        // if (err.response.status === 401) {
        //   localStorageService.clearToken();
        //   setIsAuthenticated(false);
        //   history.push("/");
        // }
        setError(err.response.data.message);
      }
    };

    fetchRequestList();
  }, []);

  const handlerAcceptFriend = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.patch('/friends/'+id , {
         status: 'FRIEND' 
        },
        { 
          // headers: { // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
          //   authorization: `Bearer ${localStorageService.getToken()}`
          // }
        });
      const newRequestList =  requestFriends.filter(element => id !== element.id);
      setRequestFriends(newRequestList);
    } catch(err) {
      // console.log(err) // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
      //   if (err.response.status === 401) {
      //     localStorageService.clearToken();
      //     setIsAuthenticated(false);
      //     history.push("/");
      //   }
      setError(err.response.data.message);
    }
  };

  const handlerRejectFriend = (id) => {
    try {

    } catch(err) {
      // console.log(err) // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
      //   if (err.response.status === 401) {
      //     localStorageService.clearToken();
      //     setIsAuthenticated(false);
      //     history.push("/");
      //   }
      setError(err.response.data.message);
    }    
  };

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <h4>คำขอเป็นเพื่อน</h4>
        <ul>
          {requestFriends.map((element, index) => (
            <li key={element.id}>
            <a href="/" key={index}>{element.firstName + ' ' + element.lastName}</a>
            <a className="text-success" href="/" onClick={(e) => handlerAcceptFriend(e, element.id)}>
              [รับ]
            </a>
            <a className="text-danger" href="/" onClick={(e) => handlerRejectFriend(e, element.id)}>
              [ปฏิเสธ]
            </a>
          </li>
          ))}

          {/* <li>
            <a href="/">John Doe</a>
            <a className="text-success" href="/">
              [รับ]
            </a>
            <a className="text-danger" href="/">
              [ปฏิเสธ]
            </a>
          </li> */}

        </ul>
      </div>
    </div>
  )
}

export default RequestFriend
