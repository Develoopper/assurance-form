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
							nextId: "usage",
							nextLabel: "Usage",
							nextOptions: {
								values: ["Promenades privées", "Tournées régulières", "Déplacements privés et trajet travail", "Affaire/Commerce", "Taxi", "VTC", "Agricole"],
								nextId: "garantieSouhaiteeConducteurPrincipal",
								nextLabel: "Garanties souhaitées",
								nextOptions: {
									values: ["Tiers simple", "Intermediaire", "Tous risques"],
								}
							}
						},
					},
				},
			},
		},
	},
};