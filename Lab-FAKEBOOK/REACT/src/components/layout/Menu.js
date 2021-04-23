import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import localStorageService from '../../services/localStorageService'
import AuthContexts from "../../contexts/AuthContextProvider"

function Menu() {
  const history = useHistory()

  const { setIsAuthenticated } = useContext(AuthContexts.AuthContext)
  const { isAuthenticated } = useContext(AuthContexts.AuthContext)

  const handleLogout = (e) => {
    e.preventDefault();
    //  localStorage.removeItem('token'); // แก้ hardcode เพื่อในภายหลังแก้ไข ที่เดียวพอไม่ต้องมานั่งไล่หลายที่
    localStorageService.clearToken('token');
    setIsAuthenticated(false);
    history.push('/login');
  }

  return (
    <ul className="nav navbar-nav navbar-right">
      {isAuthenticated && (            
      <li>
        <Link to="/">Home</Link>
      </li>          
      )}
      {isAuthenticated && (
      <li>
        <Link to="/profile">Profile</Link>
      </li>          
      )}
      {isAuthenticated && (            
      <li>
        <a href="/" onClick={handleLogout}>
          Logout
        </a>
      </li>
      )}
    </ul>
  )
}

export default Menu
