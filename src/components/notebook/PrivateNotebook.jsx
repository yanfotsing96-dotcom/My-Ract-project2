import { useState } from 'react';

function PrivateNotebook() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSave = () => {
    if (!currentNote.trim()) return;

    if (editingId !== null) {
      setNotes(
        notes.map((note) =>
          note.id === editingId ? { ...note, content: currentNote } : note
        )
      );
      setEditingId(null);
    } else {
      setNotes([...notes, { id: Date.now(), content: currentNote }]);
    }
    setCurrentNote('');
  };

  const handleEdit = (note) => {
    setCurrentNote(note.content);
    setEditingId(note.id);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="notebook">
      <h2>Carnet privé</h2>

      <textarea
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        placeholder="Écris ta note ici..."
        rows={4}
      />
      <button onClick={handleSave}>
        {editingId !== null ? 'Modifier' : 'Ajouter'}
      </button>

      <ul className="notes-list">
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.content}</span>
            <button onClick={() => handleEdit(note)}>✏️</button>
            <button onClick={() => handleDelete(note.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrivateNotebook;