// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch , Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Postpage from './pages/Postpage'
// import Header from "./components/Header"
// import Login from "./components/Login"
// import Register from "./components/Register"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/posts' component={Postpage}></Route>
          <Route path='/' component={Homepage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
