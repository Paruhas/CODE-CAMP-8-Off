import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/LoginPage'

// import localStorageService from './services/localStorageService';

import { useContext } from 'react' // ตัวสร้าง
import AuthContexts from './contexts/AuthContextProvider' // ตัวที่เอามาใช้ => { AuthContext }

const privateRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  }
]

const publicRoutes = [
  {
    path: '/',
    component: Login
  }
]

function App() {
  // สร้าง Fn เพื่อให้มีการ re-render เมื่อ Login/Logout จะเปลี่ยนแปลง state ตัวนี้ => ย้ายไปทำในไฟล์แยก context/AuthContextProviders แทน
  // const [isAuthenticated, setIsAuthenticated] = useState(localStorageService.getToken());

  const { isAuthenticated } = useContext(AuthContexts.AuthContext)

  console.log(isAuthenticated)

  return (
    <Switch>
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} /> */}
      {/* กำหนด Private Route และ Public Route => ไม่ใช้แล้ว เนื่องจากแบบนี้ไม่มีการ re-render ต้องใช้ state เพื่อ re-render*/}
      {/* {localStorageService.getToken() && 
        privateRoutes.map((element ,index) => <Route key={index} exact path={element.path} component={element.component} /> )}
      {!localStorageService.getToken() && 
        publicRoutes.map((element ,index) => <Route key={index} exact path={element.path} component={element.component} /> )} */}
      {/* ผลลัพธ์ที่ได้  ประมาณนี้
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={profile} />
      */}
      {/* แบบใช้ useState */}
      {/* {isAuthenticated.getToken() &&
        privateRoutes.map((element, index) => (
          <Route
            key={index}
            exact
            path={element.path}
            component={element.component}
          />
        ))}
      {!isAuthenticated.getToken() &&
        publicRoutes.map((element, index) => (
          <Route
            key={index}
            exact
            path={element.path}
            component={element.component}
          />
        ))} */}
      {/* แบบใช้ useContext */}
      {isAuthenticated &&
        privateRoutes.map((element, index) => (
          <Route
            key={index}
            exact
            path={element.path}
            component={element.component}
          />
        ))}
      {!isAuthenticated &&
        publicRoutes.map((element, index) => (
          <Route
            key={index}
            exact
            path={element.path}
            component={element.component}
          />
        ))}
      {/* เมื่อ PATH ไม่ตรงกับด้านบนเลย redirect ไปหน้าที่กำหนด */}
      <Redirect to="/" />{' '}
    </Switch>
  )
}

export default App
