import React from 'react'

export default function Footer() {
    return (
      <footer style={{ background: "#000", padding: "25px 100px", color: "#909191" }}>
        <h5>Des questions ? Appelez le 0805-220-512</h5>
        <div class="colonnes" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div>
            <p>FAQ</p>
            <p>Relations Investisseurs</p>
            <p>Modes de lecture</p>
            <p>Mentions légales</p>
            <p>Programmes originaux Netflix</p>
          </div>
          <div>
            <p>Centre d'aide</p>
            <p>Relations Investisseurs</p>
            <p>Modes de lecture</p>
            <p>Mentions légales</p>
            <p>Programmes originaux Netflix</p>
          </div>
          <div>
            <p>FAQ</p>
            <p>Recrutement</p>
            <p>Conditions d'utilisation</p>
            <p>Nous contacter</p>
          </div>
          <div>
            <p>Compte</p>
            <p>Utiliser des cartes cadeaux</p>
            <p>Confidentialité</p>
            <p>Test de vitesse</p>
          </div>
        </div>
        <p>Netflix, France</p>
      </footer>
    );
}
