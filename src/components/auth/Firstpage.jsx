import { Link } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';
import '../../styles/Firstpage.css';
function Firstpage() {
  return (
    <div>
      <p>WELCOME TO MY FIRST APP</p>
      <Link to="/login" className="start-button">Connexion</Link>
      <ThemeToggle />
    </div>
  );
}




export default Firstpage;