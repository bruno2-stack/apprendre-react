import { useState } from "react";

function App() {
  const [texte, setTexte] = useState("");
  const [taches, setTaches] = useState([]);

  function ajouterTache() {
    if (texte.trim() === "") return;
    const nouvelle = { id: Date.now(), titre: texte };
    setTaches([...taches, nouvelle]);
    setTexte("");
  }

  return (
    <div>
      <h1>Ma liste de tâches</h1>

      <input
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            ajouterTache();
          }
        }}
        placeholder="Nouvelle tâche"
      />
      <button onClick={ajouterTache}>Ajouter</button>

      <p>{taches.length} tâche(s)</p>

      <ul>
        {taches.map((t) => (
          <li key={t.id}>{t.titre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;