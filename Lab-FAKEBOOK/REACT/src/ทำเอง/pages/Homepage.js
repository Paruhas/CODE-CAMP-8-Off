import Header from "../components/Header"
import Login from "../components/Login"
import Register from "../components/Register"

function Homepage() {
  return (
      <div className="App">
        <Header />
            <div className="Homepage-content-header">
                <h2>WELCOME to Fakebook CC8</h2>
                <p>mini simple clone</p>
            </div>
            <div className="content">
              <Login />
              <Register />
            </div>
    </div>
  );
}

export default Homepage;
