var vehicule = {
	nextId: "marque",
	nextLabel: "Marque",
	nextOptions: {
		values: "ajax",
		nextId: "model",
		nextLabel: "Modèle",
		nextOptions: {
			values: "ajax",
			nextId: "alimentation",
			nextLabel: "Type carburant",
			nextOptions: {
				values: "ajax",
				nextId: "chevaux",
				nextLabel: "Puissance",
				nextOptions: {
					values: "ajax",
					nextId: "carrosserie",
					nextLabel: "Carrosserie",
					nextOptions: {
						values: "ajax",
						nextId: "version",
						nextLabel: "Version",
						nextOptions: {
							values: "ajax",
							nextId: "codeGta",
							nextLabel: "Code GTA",
							nextOptions: {
								values: "text",
								nextId: "stationnement",
								nextLabel: "Stationnement",
								nextOptions: {
									values: ["Voie publique", "Garage", "Box", "Parking couvert collectif", "Parking collectif plein air", "Jardin clos privé", "Garage public surveillé", ],
									nextId: "usage",
									nextLabel: "Usage",
									nextOptions: [
                    { value: "Promenades privées", ...from_kilometrage },
                    { value: "Tournées régulières", ...from_kilometrage },
                    { value: "Déplacements privés et trajet travail", ...cas_usageprofessionnel },
                    { value: "Affaire/Commerce", ...cas_usageprofessionnel },
                    { value: "Taxi", ...cas_usageprofessionnel },
                    { value: "VTC", ...cas_usageprofessionnel },
                    { value: "Agricole", ...cas_usageprofessionnel },
                  ],
								},
							},
						},
					},
				},
			},
		},
	},
};

const cas_usageprofessionnel = {
  nextId: "codePostalPro",
	nextLabel: "Code postal professionnel",
	nextOptions: {
		values: "text",
    ...from_kilometrage
  }
}

const from_kilometrage = {
  nextId: "kilometrage",
  nextLabel: "Kilométrage par an",
  nextOptions: {
    values: [
      "De 0 A 4999 KM",
      "De 5000 A 7999 KM",
      "De 8000 A 11999 KM",
      "De 12000 A 15999 KM",
      "De 16000 A Plus",
    ],
    nextId: "financement",
    nextLabel: "Mode financement",
    nextOptions: {
      values: ["Comptant", "Credit", "Leasing"],
      nextId: "remorque",
      nextLabel: "Remorque",
      nextOptions: {
        values: ["Non", "Oui_moins_750", "Oui_plus_750"],
        nextId: "isActuellementAssure",
        nextLabel: "Actuellement assure",
        nextOptions: {
          values: [
            "Oui",
            "NON_DEPUIS_MOINS_DE_3_MOIS",
            "NON_DEPUIS_MOINS_DE_6_MOIS",
            "NON_DEPUIS_MOINS_DE_12_MOIS",
            "NON_DEPUIS_12_MOIS_ET_PLUS",
          ],
          nextId: "isVehiculeAmenagePMR",
          nextLabel: "Véhicule aménagé pour les personnes ayant un handicap",
          nextOptions: {
            values: ["Non", "Oui"],
            ...form_antecedant,
          },
        },
      },
    },
  },
},