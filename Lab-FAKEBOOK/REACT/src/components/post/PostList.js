import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import axios from "../../configs/axios"
import AuthContextProvider from '../../contexts/AuthContextProvider';
import AddPost from '../../components/post/AddPost';

function GetPost() {
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([])
  const [triggerDelete, setTriggerDelete] = useState(false)

  // เอามาไว้นอก user effect เพราะ Addpost บัค Add แล้ว error ถ้า prevent default ไว้

  const fetchAllPostsIncludeFriend = async () => {
    try {
      const res = await axios.get('/posts/inc-friend' , {
          // headers: { // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
          //   authorization: `Bearer ${localStorageService.getToken()}`
          // }
      });
      // console.log(res.data.posts);
      setPosts(res.data.posts);
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

  useEffect(() => {
      fetchAllPostsIncludeFriend();
  }, [triggerDelete]);

  return (
    <>
        <AddPost 
          setPosts={setPosts} 
          fetchAllPostsIncludeFriend={fetchAllPostsIncludeFriend}
        />
        <hr />
      <div>
        {posts.map((post,index) => (
            <Post key={post.id} 
              post={post} 
              setPosts={setPosts} 
              setTriggerDelete={setTriggerDelete} 
              triggerDelete={triggerDelete} 
              />
        ))}
      </div>
    </>
  )
}

export default GetPost
