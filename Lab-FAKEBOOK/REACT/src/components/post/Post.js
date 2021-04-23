import axios from '../../configs/axios';
import React, { useContext } from 'react'
import AuthContextProvider from '../../contexts/AuthContextProvider';

function Post(props) {
  // console.log(props.post.User)

  const { user } = useContext(AuthContextProvider.AuthContext)

  const handlerDeletePost = async (postId) => {
    try {
      const confirmDeletePost = window.confirm("deleted post");
      if (confirmDeletePost) {
        await axios.delete(`/posts/${postId}`);
        props.setTriggerDelete((prev) => !prev);
      }

      // delete อีกท่านึง?
      // props.setPosts(prevPost => 
      //   prevPost.filter(item => item.id !== postId))
    } catch(err) {
      setError(err.response.data.message);
    }
  };


  return (
    <div className="panel panel-default">
        <div className="panel-body">
          <p>{props.post.text}</p>
        </div>
        <div className="panel-footer">
          <span>
            posted {props.post.createdAt} by {`${props.post.User.firstName} ${props.post.User.lastName}`}
          </span>
          {(user.id === props.post.User.id) && 
            <span className="pull-right">
              <button className="text-danger" href="/" onClick={() => handlerDeletePost(props.post.id)}>
                [ลบ]
              </button>
            </span>
          }
        </div>
    </div>
  )
}

export default Post

// import React, { useEffect, useState } from 'react'
// import axios from "../../configs/axios"

// function Post() {
// const [error, setError] = useState("");
// const [posts, setPosts] = useState([])

//   useEffect(() => {
//     const fetchAllPostsIncludeFriend = async () => {
//       try {
//         const res = await axios.get('/posts/inc-friend' , {
//             // headers: { // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
//             //   authorization: `Bearer ${localStorageService.getToken()}`
//             // }
//         });
//         console.log(res.data.posts);
//         setPosts(res.data.posts);
//       } catch(err) {
//         // console.log(err) // ไม่ต้องเขียนแล้ว เพราะเขียนไว้ใน config axios แล้ว
//         // if (err.response.status === 401) {
//           //   localStorageService.clearToken();
//           //   setIsAuthenticated(false);
//           //   history.push("/");
//           // }
//           setError(err.response.data.message);
//         }
//       };
      
//       fetchAllPostsIncludeFriend();
//     }, []);
  

//   return (
//     <div className="panel panel-default">
//       {posts.map((element, index) => (
//         <>
//         <div className="panel-body">
//           <p>{element.text}</p>
//         </div>
//         <div className="panel-footer">
//           <span>
//             posted {element.createdAt} by {`${element.User.firstName} ${element.User.lastName}`}
//           </span>
//           <span className="pull-right">
//             <a className="text-danger" href="/">
//               [ลบ]
//             </a>
//           </span>
//         </div>
//         </>
//       ))}
//     </div>
//   )
// }

// export default Post

