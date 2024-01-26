import logo from '../img/argentBankLogo.png';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav class="main-nav">
      <Link className='main-nav-logo' to="/">
        <img
            class="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
        
      </Link>
        <div>
          <Link className='main-nav-item' to="/login">
            <i class="fa fa-user-circle"></i>
            Sign In
            </Link>
        </div>
    </nav>
  );
}

export default Header;