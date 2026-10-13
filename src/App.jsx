import { useState } from "react";

function App() {
  const [compteur, setCompteur] = useState(0);

  return (
    <div>
      <h1>Compteur : {compteur}</h1>
      <button onClick={() => setCompteur(compteur + 1)}>Ajouter 1</button>
    </div>
  );
}

export default App;