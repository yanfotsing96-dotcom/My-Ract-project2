import ProfileCard from '../components/profile/ProfileCard';

// Données de test pour l'instant (viendront de l'API plus tard)
const mockUser = {
  nom: 'Yan',
  email: 'yan@example.com',
  filiere: 'Informatique',
  niveau: 'L3',
  badges: ['Contributeur actif', 'Premier document publié'],
};

function ProfilePage() {
  return (
    <div className="page">
      <ProfileCard user={mockUser} />
    </div>
  );
}

export default ProfilePage;