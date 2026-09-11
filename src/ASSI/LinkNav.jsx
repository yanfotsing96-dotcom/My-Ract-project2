import { Link } from 'react-router-dom';
import ThemeToggle from '../components/common/ThemeToggle';
import '../styles/LinkNav.css';
function LinkNav (){
   return(
      <div className='LinkNav'>
         <Link to="/notebook">Carnet</Link>
         <br />
         <br />
         <Link to="/register">Inscription</Link> 
         <br />
         <br />
         <Link to="/profile">Profil</Link>
         <br />
         <br />
         <Link to="/search">Recherche</Link>
         <br />
         <br />

         <ThemeToggle />
      </div>
   );      
}
export default LinkNav;