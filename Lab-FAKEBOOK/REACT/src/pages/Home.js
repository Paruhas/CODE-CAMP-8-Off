import axios from '../configs/axios';
import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Status from '../components/profile/Status';
import localStorageService from '../services/localStorageService';
import AddPost from '../components/post/AddPost';
import RequestFriend from '../components/friend/RequestFriend';
import PostList from '../components/post/PostList';
import AddFriend from '../components/friend/AddFriend';
import FriendList from '../components/friend/FriendList';

function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">

          <div className="col-md-3">
            <Status />
            <RequestFriend />
          </div>

          <div className="col-md-6">

            <div>
              <PostList />
            </div>
            
          </div>

          <div className="col-md-3">
            <AddFriend />

            <FriendList />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
