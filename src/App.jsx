import { useState } from "react"

function App() {
  function handleSumit(e) {
    // Empêche le navigateur de recharger la page
    e.preventDefault();

    // Lit les données du formulaire
    const form = e.target;
    const formData = new FormData(form);

    // Conversion en objet simple
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form method="post" onSubmit={handleSumit}>
      <label>
        champ de saisie textuel :
        <input type="text" name="MyInput" defaultValue="A value" />
      </label>
      <hr />
      <label>
        Case a cocher :
        <input type="checkbox" name="MyCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Bouton radio :
        <br />
        <label>
          <input type="radio" name="MyRadio" value="option1" />
          Option 1
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="MyRadio"
            value="option2"
            defaultChecked={true}
          />
          Option 2
        </label>
        <br />
        <label>
          <input type="radio" name="MyRadio" value="option3" />
          Option 3
        </label>
      </p>
      <hr />
      <button type="reset">Reset</button>
      <button type="submit">Send the work</button>
    </form>
  );
}

export default App;