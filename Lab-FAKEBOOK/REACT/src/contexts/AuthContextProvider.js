// สร้างตัวรับ
// เป็นข้อมูลเกี่ยวกับการ Authenticate

import { createContext, useState } from "react";
import localStorageService from "../services/localStorageService";

const AuthContext = createContext(); 

function AuthContextProvider( {children} ) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorageService.getToken());
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={ { isAuthenticated: isAuthenticated , setIsAuthenticated: setIsAuthenticated , user: user , setUser: setUser } } >
      {children}
    </AuthContext.Provider>
  )
}

export default {
  AuthContextProvider,
  AuthContext
};

// import เข้าหน้า index.js แล้วครอบ <BrowserRouter> <App /> </BrowserRouter> ไปด้วย

{/* <A>
  <B></B>
  <C></C>
</A>

function A( { children } ) {
  { children } === <B>, <C>
} */}