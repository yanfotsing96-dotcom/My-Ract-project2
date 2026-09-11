import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotebookPage from './pages/NotebookPage';
import SearchPage from './pages/SearchPage';

import Firstpage from'./components/auth/Firstpage'
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Firstpage/>
    
        <Routes>
          <Route path="/login" element={<LoginPage />} />
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