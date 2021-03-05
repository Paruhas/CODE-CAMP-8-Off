// React Router DOM
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'
import logo from './logo.svg';
import AddPage from './pages/AddPage'
// import AddPostPage from './pages/AddPostPage'
// import SinglePostPage from './pages/SinglePostPage'
// import StartPage from './pages/StartPage'
// import CounterPage from './pages/CounterPage'
// import EditPage from './pages/EditPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/add-page' component={AddPage}></Route>
          <Route path='/' component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;