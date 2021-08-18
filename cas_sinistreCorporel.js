var cas_sinistreCorporel = {
  nextId: "isDelitDeFuiteSinistre36DerniersMois",
  nextLabel: "Délit de fuite ?",
  nextOptions: {
    valeurs: ['Non', 'Oui'],
    nextId: "isInterventionForceDeLOrdreSinistres36DerniersMois",
    nextLabel: "Intervention force de l’ordre ?",
    nextOptions: {
      valeurs: ['Non', 'Oui'],
      nextId: "poursuiteTribunalPoliceSinistres36DerniersMois",
      nextLabel: "Poursuite tribunal",
      nextOptions: {
        valeurs: ['AUCUN', 'TRIBUNAL_POLICE', 'TRIBUNAL_CORRECTIONNEL'],
        nextId: "isPresenceTiersSinistres36DerniersMois",
        nextLabel: "Présence tierce ?",
        nextOptions: {
          valeurs: ['Non', 'Oui'],
          ...infractionsAlcoolemie
        }
      }
    }
  }
}