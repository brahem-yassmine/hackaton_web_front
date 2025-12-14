import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="logo-icon">🩺</div>
          <div>
            <div className="logo-text">VitaEMbryo</div>
            <div className="logo-subtext">DIAGNOSTIC PRÉNATAL</div>
          </div>
        </div>

        <ul className="navbar-links">
          <li><a href="#">Tableau de bord</a></li>
          <li><a href="#">Ajouter patient</a></li>
          <li><a href="/analyse">Analyses</a></li>
          <li><a href="#">Analyse IA</a></li>
          <li><a href="#">À propos</a></li>
          <li>
            <button className="btn-logout">
              <span className="logout-icon">⎋</span>
              Déconnecter
            </button>
          </li>
        </ul>
      </nav>

      {/* ===== CONTENU HOME ===== */}
      <main className="home">
        <div className="home-text">
          <h1>
            Bienvenue sur <span className="highlight">VitaEMbryo</span>
          </h1>
          <p>
            Plateforme intelligente d'aide au diagnostic prénatal basée sur 
            l'intelligence artificielle. Notre système analyse les données 
            embryonnaires avec une précision de 98,7% pour aider les professionnels 
            de santé dans leurs décisions.
          </p>
          
          <div className="features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Analyse automatisée des embryons</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Rapports détaillés en temps réel</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Recommandations personnalisées</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Interface sécurisée et confidentielle</span>
            </div>
          </div>
          
          <div className="cta-buttons">
            <button className="btn-primary">
              <span>+</span>
              Ajouter un patient
            </button>
          </div>
        </div>

        <div className="home-image">
          <div className="image-container">
            <img
              src="/assets/enquete-embryon.jpg"
              alt="Analyse médicale d'embryon"
            />
            <div className="image-overlay">
              <h3>Analyse assistée par IA</h3>
              <p>Notre algorithme détecte automatiquement les anomalies avec une précision médicale validée.</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>VitaEMbryo © 2023 - Plateforme médicale certifiée</p>
        <p>Réservée aux professionnels de santé</p>
      </footer>
    </>
  );
};

export default Home;