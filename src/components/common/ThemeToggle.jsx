import { useTheme } from '../../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme, focusMode, toggleFocusMode } = useTheme();

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Sombre' : '☀️ Clair'}
      </button>
      <button onClick={toggleFocusMode}>
        {focusMode ? '✅ Quitter Focus' : '🎯 Mode Focus'}
      </button>
    </div>
  );
}

export default ThemeToggle;