/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function SinglePostPage() {
    const [post, setPost] = useState({})
    
    let params = useParams()
    console.log('params: ', params)

    useEffect( function() {
        async function getPostsById() {
            let response = await fetch('http://localhost:8000/posts/' + params.postId , {
                method: "GET"
            }
            );
            let data = await response.json(); // แกะซองจดหมาย ที่ได้รับมากจาก sever ที่กำลังแปลงกลับเป็น json
            console.log(data);
            setPost(data.data);
        }

        return getPostsById()
    }, []); // อยากได้ค่าเป็น ARR => ทำครั้งเดียว

    return (
    <div>

        <div className='postapp-header'>
        <h1 
        css = {css`
        color:lightgreen;
        font-size: 2rem;
        `}
          >Single Post Page</h1>
        </div>

        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>

    </div>
    )
}

export default SinglePostPage;