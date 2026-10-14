import { useState } from "react";

function Bouton({ texte, action, couleur }) {
  return (
    <button onClick={action} style={{ backgroundColor: couleur }}>
      {texte}
    </button>
  );
}

function App() {
  const [compteur, setCompteur] = useState(0);

  const boutons = [
    { id: 1, texte: "Ajouter 1", valeur: 1, couleur: "lightgreen" },
    { id: 2, texte: "Retirer 1", valeur: -1, couleur: "lightcoral" },
    { id: 3, texte: "Ajouter 5", valeur: 5, couleur: "gold" },
    { id: 4, texte: "Ajouter 10", valeur: 10, couleur: "green" },
    { id: 3, texte: "Retirer 5", valeur: -5, couleur: "yellow" },
  ];

  return (
    <div>
      <h1 style={{ color: compteur > 10 ? "red" : "black" }}>
        Compteur : {compteur}
      </h1>

      {boutons.map((b) => (
        <Bouton
          key={b.id}
          texte={b.texte}
          action={() => setCompteur(compteur + b.valeur)}
          couleur={b.couleur}
        />
      ))}

      <Bouton
        texte="Remettre à zéro"
        action={() => setCompteur(0)}
        couleur="lightblue"
      />
    </div>
  );
}

export default App;