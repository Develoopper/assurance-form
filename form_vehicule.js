var vehicule = {
	nextId: "marque",
	nextLabel: "Marque",
	nextOptions: {
		values: 'ajax',
		nextId: "model",
		nextLabel: "Modèle",
		nextOptions: {
			values: 'ajax',
			nextId: "alimentation",
			nextLabel: "Type carburant",
			nextOptions: {
				values: 'ajax',
				nextId: "chevaux",
				nextLabel: "Puissance",
				nextOptions: {
					values: 'ajax',
					nextId: "carrosserie",
					nextLabel: "Carrosserie",
					nextOptions: {
						values: 'ajax',
						nextId: "version",
						nextLabel: "Version",
						nextOptions: {
							values: 'text',
              nextId: "codeGta",
              nextLabel: "Code GTA",
              nextOptions: {
                values: 'text',
                nextId: "stationnement",
                nextLabel: "Stationnement",
                nextOptions: {
                  values: ['Voie publique', 'Garage', 'Box', 'Parking couvert collectif', 'Parking collectif plein air', 'Jardin clos privé', 'Garage public surveillé'],
                  nextId: "usage",
                  nextLabel: "Usage",
                  nextOptions: {
                    values: ['Déplacements privés', 'Déplacements privés et trajet travail', 'Tournées régulières', 'Affaire/Commerce', 'Taxi', 'VTC', 'Agricole'],
                    nextId: "codePostalPro",
                    nextLabel: "Code postal professionnel",
                    nextOptions: {
                      values: 'text',
                      nextId: "titulaireCarteGrise",
                      nextLabel: "Titulaire carte grise",
                      nextOptions: {
                        values: ['Conducteur Principal', 'Conjoint Ou Concubin', 'Conducteur1 Et Conjoint Concubin', 'Parents', 'Parents Du Conjoint Concubin', 'Societe', 'Societe De Leasing', 'Enfant'],
                        nextId: "remorque",
                        nextLabel: "Remorque",
                        nextOptions: {
                          values: ['Non', 'Oui_moins_750', 'Oui_plus_750'],
                          nextId: "kilometrage",
                          nextLabel: "Kilométrage par an",
                          nextOptions: {
                            values: ['De 0 A 4999 KM', 'De 5000 A 7999 KM', 'De 8000 A 11999 KM', 'De 12000 A 15999 KM', 'De 16000 A Plus'],
                            nextId: "financement",
                            nextLabel: "Mode financement",
                            nextOptions: {
                              values: ['Comptant', 'Credit', 'Leasing'],
                              nextId: "isVehiculeAmenagePMR",
                              nextLabel: "Véhicule aménagé pour les personnes ayant un handicap",
                              nextOptions: {
                                values: ['Non', 'Oui'],
                                nextId: "isActuellementAssure",
                                nextLabel: "Actuellement assure",
                                nextOptions: {
                                  values: ['Oui', 'NON_DEPUIS_MOINS_DE_3_MOIS', 'NON_DEPUIS_MOINS_DE_6_MOIS', 'NON_DEPUIS_MOINS_DE_12_MOIS', 'NON_DEPUIS_12_MOIS_ET_PLUS'],
                                  ...form_antecedant,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
						},
					},
				},
			},
		},
	},
}