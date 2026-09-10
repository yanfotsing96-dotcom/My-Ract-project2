function FilterPanel({ filters, onChange }) {
  const handleChange = (e) => {
    onChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filter-panel">
      <label>Filière</label>
      <select name="filiere" value={filters.filiere} onChange={handleChange}>
        <option value="">Toutes</option>
        <option value="Informatique">Informatique</option>
        <option value="Mathématiques">Mathématiques</option>
        <option value="Physique">Physique</option>
      </select>

      <label>Niveau</label>
      <select name="niveau" value={filters.niveau} onChange={handleChange}>
        <option value="">Tous</option>
        <option value="L1">L1</option>
        <option value="L2">L2</option>
        <option value="L3">L3</option>
        <option value="M1">M1</option>
        <option value="M2">M2</option>
      </select>

      <label>Trier par</label>
      <select name="tri" value={filters.tri} onChange={handleChange}>
        <option value="date">Date</option>
        <option value="popularite">Popularité</option>
      </select>
    </div>
  );
}

export default FilterPanel;
