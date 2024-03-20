import logo from '../img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../state/user/userSlice";

function Header() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.userInfo.value.token)
  function signout() {
    dispatch(logout())
  }


  return (
    <nav className="main-nav">
      <Link className='main-nav-logo' to="/">
        <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
        
      </Link>
      <div className='navlinks'>
        {token && <Link className='main-nav-item' to="/user">Transactions</Link>}
          <div>
            {token? <Link onClick={() =>signout()} className='main-nav-item' to="/"><i className="fa fa-user-circle"></i> Sign out</Link> : <Link className='main-nav-item' to="/login"><i className="fa fa-user-circle"></i> Sign In</Link>}
          </div>
        </div>
    </nav>
  );
}

export default Header;