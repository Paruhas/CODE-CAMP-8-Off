import axios from '../../configs/axios';
import React, { useState } from 'react'

function Post(props) {
  const fetchAllPostsIncludeFriend = props.fetchAllPostsIncludeFriend // destructuring
  const setPosts = props.setPosts // destructuring

  const [context, setContext] = useState("");

  const handlerAddPost = async (e) => {
    e.preventDefault();
    const res = await axios.post("/posts", {text: context});
    setContext('');
    fetchAllPostsIncludeFriend()
  }
  
  return (
    <form onSubmit={handlerAddPost}>
      <div className="input-group">
        <input className="form-control" 
          value={context} 
          onChange={e => setContext(e.target.value)} 
          type="text" name="content" placeholder="Make a post..." />
        <span className="input-group-btn">
          <button className="btn btn-success" type="submit" name="post">
            Post
          </button>
        </span>
      </div>
    </form>
  )
}

export default Post
