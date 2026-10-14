import { useState } from "react";

function App() {
  const [texte, setTexte] = useState("");
  const [taches, setTaches] = useState([]);

  function ajouterTache() {
    if (texte.trim() === "") return;
    const nouvelle = { id: Date.now(), titre: texte, fait: false };
    setTaches([...taches, nouvelle]);
    setTexte("");
  }

  function supprimerTache(id) {
    const restantes = taches.filter((tache) => tache.id !== id);
    setTaches(restantes);
  }

  function basculerTache(id) {
    const misesAJour = taches.map((tache) => {
      if (tache.id === id) {
        return { ...tache, fait: !tache.fait };
      }
      return tache;
    });
    setTaches(misesAJour);
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
      {taches.length === 0 && <p>Aucune tâche pour le moment, ajoute-en une !</p>}

      <ul>
        {taches.map((tache) => (
          <li key={tache.id}>
            <span
              onClick={() => basculerTache(tache.id)}
              style={{
                textDecoration: tache.fait ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {tache.titre}
            </span>{" "}
            <button onClick={() => supprimerTache(tache.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;