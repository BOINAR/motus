import Navig from "./Navig";
import "./App.css";

/* le projet n'est pas encore terminé
il reste la connexion à la base de donnée à gerer 
et finir d'implémenter la logique pour les régles du jeu
la gestion des couleurs pour les cases etc... coté client,
définir le model et les routes dans la partie server,
concernant l'authentification les données de connexion soront enregistrée dans mongoDB
une solution provisoire de test est géré dans le fichier ids.json, modifier les données de connexion 
et renseignez les dans l'interface pour vous connecter au jeu
App in progress... */

import "./index.css";

function App() {
  return (
    <div>
      <Navig />
    </div>
  );
}

export default App;
