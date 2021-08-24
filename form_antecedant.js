var form_antecedant = {
	nextTitle: "Informations antécédent",
	nextId: "bonusMalus",
	nextLabel: "Bonus Malus (0.5 - 3.5)",
	nextValidator: value => !isNaN(value) && value >= 0.5 && value <= 3.5,
	nextOptions: {
		values: "text",
		nextId: "isEteAssure36DerniersMois",
		nextLabel: "Assuré au cours des 36 derniers mois",
		nextOptions: {
			values: ["Non", "Oui"],
			nextId: "periodeAssure36DerniersMois",
			nextLabel: "Nombre mois assuré au cours des 36 derniers mois",
			nextOptions: {
				values: [...Array(36).keys()].map(x => x + 1),
				nextId: "isAssure36DerniersMoisAvec9MoisConsecutifs",
				nextLabel: "Assuré 9 mois consécutifs ?",
				nextOptions: {
					values: ["Non", "Oui"],
					nextId: "isEteResilie36DerniersMois",
					nextLabel: "Résilié 36 derniers mois",
					nextOptions: {
						values: ["Non", "Oui"],
						nextId: "dateResiliation36DerniersMois",
						nextLabel: "Date résiliation",
						nextOptions: {
							values: "date",
							nextId: "garantieSouhaiteeConducteurPrincipal",
							nextLabel: "Garanties souhaitées",
							nextOptions: {
								values: ["Tiers simple", "Intermediaire", "Tous risques"],
								nextId: "motifResiliation36DerniersMois",
								nextLabel: "Motif résiliation",
								nextOptions: [
									{ value: "non paiement", ...cas_nonPaiment },
									{ value: "alcoolemie", ...form_sinistre },
									{ value: "stupefiant", ...form_sinistre },
									{ value: "Defaut assurance", ...form_sinistre },
									{ value: "conduite sans permis", ...form_sinistre },
									{ value: "refus obtemperer", ...form_sinistre },
									{ value: "Exces de vitesse", ...form_sinistre },
									{ value: "Perte de points", ...form_sinistre },
									{ value: "resiliation client", ...form_sinistre },
									{ value: "sinistre", ...form_sinistre },
									{ value: "sinistre et non paiement de prime", ...form_sinistre },
									{ value: "delit fuite", ...form_sinistre },
									{ value: "Nulite Contrat", ...form_sinistre },
									{ value: "sinistre et alcoolemie", ...form_sinistre },
									{ value: "sinistre et stupefiant", ...form_sinistre },
									{ value: "fausse declaration", ...form_sinistre },
									{ value: "suspension annulation permis", ...form_sinistre },
									{ value: "Autres motif", ...form_sinistre },
								],
							},
						},
					},
				},
			},
		},
	},
}