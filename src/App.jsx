import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/common/ThemeToggle';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotebookPage from './pages/NotebookPage';
import SearchPage from './pages/SearchPage';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <nav>
          <Link to="/notebook">Carnet</Link>
          <Link to="/register">Inscription</Link> | <Link to="/login">Connexion</Link> | <Link to="/profile">Profil</Link>
          <Link to="/search">Recherche</Link>

          <ThemeToggle />
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notebook" element={<NotebookPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;