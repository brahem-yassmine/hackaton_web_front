import React from "react";
import "./styles.css";

const Analyse = () => {
  // Liste simulée des patientes (sans ID)
  const patientes = [
    { nom: "Patiente A", age: 28, statut: "En attente d'analyse" },
    { nom: "Patiente B", age: 32, statut: "Analyse en cours" },
    { nom: "Patiente C", age: 26, statut: "À analyser" }
  ];

  const allerVersFormulaire = () => {
    // Redirection simple (si tu n'utilises pas encore React Router)
    window.location.href = "/medical-forme";
  };

  return (
    <div className="analyse-container">
      <h1 className="analyse-title">Liste des patientes à analyser</h1>

      <div className="patient-grid">
        {patientes.map((patiente, index) => (
          <div className="patient-card" key={index}>
            <h2>{patiente.nom}</h2>
            <p><strong>Âge :</strong> {patiente.age} ans</p>
            <p className="status">{patiente.statut}</p>

            <button
              className="btn-analyse"
              onClick={allerVersFormulaire}
            >
              Voir le dossier médical
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analyse;
