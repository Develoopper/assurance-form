var cas_sinistreCorporel = {
  nextId: "isDelitDeFuiteSinistre36DerniersMois",
  nextLabel: "Délit de fuite ?",
  nextOptions: {
    values: ['Non', 'Oui'],
    nextId: "isInterventionForceDeLOrdreSinistres36DerniersMois",
    nextLabel: "Intervention force de l’ordre ?",
    nextOptions: {
      values: ['Non', 'Oui'],
      nextId: "poursuiteTribunalPoliceSinistres36DerniersMois",
      nextLabel: "Poursuite tribunal",
      nextOptions: {
        values: ['AUCUN', 'TRIBUNAL_POLICE', 'TRIBUNAL_CORRECTIONNEL'],
        nextId: "isPresenceTiersSinistres36DerniersMois",
        nextLabel: "Présence tierce ?",
        nextOptions: {
          values: ['Non', 'Oui'],
          ...form_infractionsAlcoolemie
        }
      }
    }
  }
}