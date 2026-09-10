import LoginForm from '../components/auth/LoginForm';

function LoginPage() {
  const handleLogin = (data) => {
    console.log('Connexion avec :', data);
    // Appel API backend plus tard
  };

  return (
    <div className="page">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default LoginPage;