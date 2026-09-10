import { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import FilterPanel from '../components/search/FilterPanel';
import ResultsList from '../components/search/ResultsList';

const mockResources = [
  { id: 1, titre: 'Cours Algo', filiere: 'Informatique', niveau: 'L2', description: 'Introduction aux algorithmes.' },
  { id: 2, titre: 'TD Analyse', filiere: 'Mathématiques', niveau: 'L1', description: 'Exercices d\'analyse réelle.' },
  { id: 3, titre: 'Annales Physique', filiere: 'Physique', niveau: 'L3', description: 'Examens des années précédentes.' },
];

function SearchPage() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ filiere: '', niveau: '', tri: 'date' });

  const filteredResults = mockResources.filter((item) => {
    const matchQuery = item.titre.toLowerCase().includes(query.toLowerCase());
    const matchFiliere = !filters.filiere || item.filiere === filters.filiere;
    const matchNiveau = !filters.niveau || item.niveau === filters.niveau;
    return matchQuery && matchFiliere && matchNiveau;
  });

  return (
    <div className="page">
      <SearchBar onSearch={setQuery} />
      <FilterPanel filters={filters} onChange={setFilters} />
      <ResultsList results={filteredResults} />
    </div>
  );
}

export default SearchPage;