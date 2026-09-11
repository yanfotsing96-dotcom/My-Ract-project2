import { useState } from 'react';
import '../../styles/RegisterForm.css';

function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
    filiere: '',
    niveau: '',
    photo: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    onSubmit(data);
  };

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2 className="auth-form__title">Créer un compte</h2>

        <div className="auth-form__photo-group">
          <div className="auth-form__avatar">
            {preview ? (
              <img src={preview} alt="Aperçu" className="auth-form__avatar-img" />
            ) : (
              <span className="auth-form__avatar-placeholder">📷</span>
            )}
          </div>
          <label className="auth-form__upload-btn">
            Choisir une photo
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="auth-form__file-input"
            />
          </label>
        </div>

        <div className="auth-form__field">
          <label>Nom complet</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>

        <div className="auth-form__field">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="auth-form__field">
          <label>Mot de passe</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="auth-form__row">
          <div className="auth-form__field">
            <label>Filière</label>
            <input type="text" name="filiere" value={formData.filiere} onChange={handleChange} />
          </div>

          <div className="auth-form__field">
            <label>Niveau</label>
            <select name="niveau" value={formData.niveau} onChange={handleChange}>
              <option value="">-- Sélectionner --</option>
              <option value="L1">L1</option>
              <option value="L2">L2</option>
              <option value="L3">L3</option>
              <option value="M1">M1</option>
              <option value="M2">M2</option>
            </select>
          </div>
        </div>

        <button type="submit" className="auth-form__submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default RegisterForm;