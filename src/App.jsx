import { useState } from "react";

function App() {
  const [compteur, setCompteur] = useState(0);

  return (
    <div>
      <h1 style={{ color: compteur > 10 ? "red" : "black" }}>
        Compteur : {compteur}
      </h1>
      <button onClick={() => setCompteur(compteur + 1)}>Ajouter 1</button>
      <button onClick={() => setCompteur(compteur - 1)}>Retirer 1</button>
      <button onClick={() => setCompteur(0)}>Remettre à zéro</button>
    </div>
  );
}

export default App;