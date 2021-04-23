import AddFriend from "../components/AddFriend"
import FriendList from "../components/FriendList"
import FriendRequest from "../components/FriendRequest"
import Header from "../components/Header"
import Login from "../components/Login"
import PostProfile from "../components/PostProfile"
import Register from "../components/Register"

function Homepage() {
  return (
      <div className="App">
        <Header />
          <content>
              <div style={{display:"flex",maxHeight:"max-content"}}>

                  <div className="left-content">
                    <PostProfile />
                    <FriendRequest />
                  </div>
        
                  <div className="center-content">B</div>

                  <div className="right-content">
                    <AddFriend />
                    <FriendList />
                  </div>

              </div>

          </content>
    </div>
  );
}

export default Homepage;
