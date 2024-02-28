import styles from './navbarStyles.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className={styles.root}>
      <nav>
        <ul>
          <img
            src="/src/images/sound-logo.png"
            alt="logo for music app" 
            />
          <li> <Link to= '/'>Home</Link> </li>
          <li> <Link to= '/about'>About</Link> </li>
          <li> <Link to= '/contact'>Contact</Link> </li>
          <img 
          src= '/src/images/search-icon.jpeg'
          alt= 'search icon' 
          /> {/* edit to expand and allow search of entire site */}
          <li> <Link to= '/login'>Login / Create Account</Link> </li>
          {/* login page should have button to create account if not registered */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
