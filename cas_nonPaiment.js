var cas_nonPaiment = {
  nextId: "dureeNonPaiement",
  nextLabel: "Nombre de mois en non-paiement",
  nextOptions: {
    values: 'text',
    nextId: "nombreAssureursResiliationNonPaiement",
    nextLabel: "Nombre assureur depuis le non-paiement",
    nextOptions: {
      values: ['1', '2', '3', '4', '5', 'plus de 5'],
      nextId: "recidiveResiliationNonPaiement",
      nextLabel: "Récidive NPP",
      nextOptions: {
        values: ['Non', 'Oui'],
        nextId: "contentieuxSoldeResiliationNonPaiement",
        nextLabel: "Contentieux soldé ?",
        nextOptions: {
          values: ['Non', 'Oui'],
          ...form_sinistre
        }
      }
    }
  }
}