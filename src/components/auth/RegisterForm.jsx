import { useState } from 'react';

function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
    filiere: '',
    niveau: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Créer un compte</h2>

      <label>Nom complet</label>
      <input
        type="text"
        name="nom"
        value={formData.nom}
        onChange={handleChange}
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Mot de passe</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <label>Filière</label>
      <input
        type="text"
        name="filiere"
        value={formData.filiere}
        onChange={handleChange}
      />

      <label>Niveau</label>
      <select name="niveau" value={formData.niveau} onChange={handleChange}>
        <option value="">-- Sélectionner --</option>
        <option value="L1">L1</option>
        <option value="L2">L2</option>
        <option value="L3">L3</option>
        <option value="M1">M1</option>
        <option value="M2">M2</option>
      </select>

      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default RegisterForm;