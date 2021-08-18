var cas_nonPaiment = {
  nextId: "dureeNonPaiement",
  nextLabel: "Nombre de mois en non-paiement",
  nextOptions: {
    valeurs: 'input',
    nextId: "nombreAssureursResiliationNonPaiement",
    nextLabel: "Nombre assureur depuis le non-paiement",
    nextOptions: {
      valeurs: ['1', '2', '3', '4', '5', 'plus de 5'],
      nextId: "recidiveResiliationNonPaiement",
      nextLabel: "Récidive NPP",
      nextOptions: {
        valeurs: ['Non', 'Oui'],
        nextId: "contentieuxSoldeResiliationNonPaiement",
        nextLabel: "Contentieux soldé ?",
        nextOptions: {
          valeurs: ['Non', 'Oui'],
          ...sinistre
        }
      }
    }
  }
}