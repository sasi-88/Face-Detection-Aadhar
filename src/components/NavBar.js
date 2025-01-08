import { useNavigate, useLocation } from 'react-router-dom';
import './styles/NavBar.css'; // Import the CSS styles

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();



  // Conditionally render the Login button based on the current route
  const showLoginButton = location.pathname !== '/face-detection' && location.pathname !== '/image-capture';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li>
            <button onClick={() => navigate('/Page')} className="nav-button">Home</button>
          </li>
          <li>
            <button onClick={() => navigate('/about')} className="nav-button">About</button>
          </li>
          <li>
            <button onClick={()=> navigate('/Ecosystem')} className="nav-button">Ecosystem</button>
          </li>
        
        <li> 
          <button onClick={()=> navigate('/Media')} className="nav-button">Media & Resources</button>
          </li>
         


          {/* Conditionally render the Login button */}
          {showLoginButton && (
            <li>
              <button onClick={() => navigate('/')} className="nav-button login-button">Logout</button>
            </li>
          )}
        </ul>

        {/* Search Section */}
        <div className="navbar-search">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">Go</button>
          <button className="clear-button" onClick={() => document.querySelector('.search-input').value = ''}>✕</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
