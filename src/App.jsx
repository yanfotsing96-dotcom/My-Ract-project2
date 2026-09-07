import { useState } from 'react';
import './assets/App.css';

function App() {
const [count, setCount] = useState(0);
const increment = () => {
  setCount(count + 1);
};
const [person, setPerson] = useState({
  name: '',
  age: 0,
  city: '',
  email: ''
});
const updatePerson = () => {
  setPerson({
    ...person,
    age: person.age + 1
  });
};  
// Funtion to reset
const handleReset = () => {
  setCount(0);
  setPerson({
    name: '',
    age: 0,
    city: '',
    email: ''
  });
};
const [people, setPeople] = useState([]);

const handleAddPerson = () => {
  // Empêche d'ajouter si le nom est vide
  if (!person.name) return;

  //Add a person in a lise
  setPeople([...people,person]);

  // Incrémente aussi ton compteur global
  setCount(count + 1);

  // Optionnel : réinitialiser le formulaire après l'ajout
  setPerson({
    name: '',
    age: '',
    city: '',
    email: '',
    birthDate: ''
  });


}

  return (
    <div >
      {/*Chap pour le Nom de la personne*/}
      <label className='label1'>Nom :
        <input
        type="text"
        placeholder="Enter Your Name"
        value={person.name}
        onChange={(e)=> setPerson({ ...person, name: e.target.value })}
      />
      </label>
        <br />
        <br />
      {/*Chap pour l'Age de la personne*/}
      <label className='label1'>Age :
       <input
        type="date"
        placeholder="Enter Your Age"
        value={person.birthYear || ''}
        onChange={(e) => {
          const birthYear =  new Date(e.target.value).getFullYear();
          const currentYear = new Date().getFullYear();
          const calculatedAge = currentYear - birthYear;
          setPerson({ ...person, age: isNaN(calculatedAge)? 0 
            : calculatedAge }); 
        }}
      />   
      </label>
      <br />
      <br />
      {/*Chap pour la ville de la personne*/}
      <label className='label1'>Ville :
      <input
        type="text"
        placeholder="Enter Your City"
        value={person.city}
        onChange={(e)=> setPerson({ ...person, city: e.target.value })}
      />
      </label>
      <br />
      <br />
      {/*Chap pour l'email de la personne*/}
      <label className='label1'>Email :
        <input
        type="email"
        placeholder="Enter Your Email"
        value={person.email}
        onChange={(e)=> setPerson({ ...person, email: e.target.value })}
      /> 
      </label>
      <br />
      <br />
      {/*Affichage des informations de la personne*/}
      <div className='div-ans'>
       <h3>Aperçu en direct :</h3>
       <div>
        <p>Nom: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Ville: {person.city}</p>
        <p>Email: {person.email}</p>
       </div>

      </div>
      <p>Compteur {count}</p>
      <button className='button1' onClick={increment}>Incrémente</button>
      <br />
      <br />
      <button className='button1' onClick={updatePerson}>Mettre à jour la personne</button>
      <br />
      <br />
      <button className='buttonreset' onClick={handleReset}>Réinitialiser</button>
      {/* Button to add a List */ }
      <br />
      <br />
      <button className='button-add' onClick={handleAddPerson}>
        Add In The List
      </button>

      <h3>Liste des profils enregistrés ({people.length}) :</h3>
  <ul>
    {people.map((p, index) => (
      <li key={index} style={{ marginBottom: '10px' }}>
        <strong>{p.name}</strong> - {p.age} ans - {p.city}
      </li>
    ))}
  </ul>
  
      </div>
        

  );
  
}

export default App