var antecedant = {
	nextTitle: "Informations antécédent",
	nextId: "bonusMalus",
	nextLabel: "Bonus Malus",
	nextOptions: {
		values: "input",
		nextId: "isEteAssure36DerniersMois",
		nextLabel: "Assuré au cours des 36 derniers mois",
		nextOptions: {
			values: ["Non", "Oui"],
			nextId: "periodeAssure36DerniersMois",
			nextLabel: "Nombre mois assuré au cours des 36 derniers mois",
			nextOptions: {
				values: "input",
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
							values: "input",
							nextId: "garantieSouhaiteeConducteurPrincipal",
							nextLabel: "Garanties souhaitées",
							nextOptions: {
								values: ["Tiers simple", "Intermediaire", "Tous risques"],
								nextId: "motifResiliation36DerniersMois",
								nextLabel: "Motif résiliation",
								nextOptions: [
									{ value: "non paiement", ...cas_nonPaiment },
									{ value: "alcoolemie", ...sinistre },
									{ value: "stupefiant", ...sinistre },
									{ value: "Defaut assurance", ...sinistre },
									{ value: "conduite sans permis", ...sinistre },
									{ value: "refus obtemperer", ...sinistre },
									{ value: "Exces de vitesse", ...sinistre },
									{ value: "Perte de points", ...sinistre },
									{ value: "resiliation client", ...sinistre },
									{ value: "sinistre", ...sinistre },
									{ value: "sinistre et non paiement de prime", ...sinistre },
									{ value: "delit fuite", ...sinistre },
									{ value: "Nulite Contrat", ...sinistre },
									{ value: "sinistre et alcoolemie", ...sinistre },
									{ value: "sinistre et stupefiant", ...sinistre },
									{ value: "fausse declaration", ...sinistre },
									{ value: "suspension annulation permis", ...sinistre },
									{ value: "Autres motif", ...sinistre },
								],
							},
						},
					},
				},
			},
		},
	},
}
