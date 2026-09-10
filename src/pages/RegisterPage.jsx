import RegisterForm from '../components/auth/RegisterForm';

function RegisterPage() {
  const handleRegister = (data) => {
    console.log('Données du formulaire :', data);
    // Ici on appellera l'API backend plus tard
  };

  return (
    <div className="page">
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
}

export default RegisterPage;