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

  return (
    <div>
      <h1 style={{ color: compteur > 10 ? "red" : "black" }}>
        Compteur : {compteur}
      </h1>
      <Bouton
        texte="Ajouter 1"
        action={() => setCompteur(compteur + 1)}
        couleur="lightgreen"
      />
      <Bouton
        texte="Retirer 1"
        action={() => setCompteur(compteur - 1)}
        couleur="lightcoral"
      />
      <Bouton
        texte="Remettre à zéro"
        action={() => setCompteur(0)}
        couleur="lightblue"
      />
      <Bouton
        texte="Ajouter 5"
        action={() => setCompteur(compteur + 5)}
        couleur="gold"
      />
    </div>
  );
}

export default App;