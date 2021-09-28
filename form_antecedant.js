var form_antecedant = {
	nextTitle: "Informations antécédent",
	nextId: "isEteAssure36DerniersMois",
	nextLabel: "Assuré au cours des 36 derniers mois",
	nextOptions: [
		{ value: "Oui", ...cas_isEteAssure36DerniersMois },
		{ 
			value: "Non", 
			nextId: '',
			nextLabel: "Avez-vous eu un controle d'alcoolemie positif au cours des 5 dernières années ?",
			nextOptions: [
				{ value: "Oui", ...cas_alcoolemie36DerniersMois },
				{ value: "Non", ...form_prospect },
			]
		},
	],
};

const cas_isEteAssure36DerniersMois = {
	nextId: "isAssure36DerniersMoisAvec9MoisConsecutifs",
	nextLabel: "Assuré 9 mois consécutifs ?",
	nextOptions: {
		values: ["Non", "Oui"],
		nextId: "bonusMalus",
		nextLabel: "Bonus Malus (0.5 - 3.5)",
		nextValidator: (value) => !isNaN(value) && value >= 0.5 && value <= 3.5,
		nextOptions: {
			values: "text",
			nextId: "periodeAssure36DerniersMois",
			nextLabel: "Nombre mois assuré au cours des 36 derniers mois",
			nextOptions: {
				values: [...Array(36).keys()].map((x) => x + 1),
				nextId: "isEteResilie36DerniersMois",
				nextLabel: "Résilié 36 derniers mois",
				nextOptions: [
					{ value: "Non", ...form_sinistre },
					{
						value: "Oui",
						nextId: "dateResiliation36DerniersMois",
						nextLabel: "Date résiliation",
						nextOptions: {
							values: "date",
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
				],
			},
		},
	},
};

// nextId: "garantieSouhaiteeConducteurPrincipal",
// nextLabel: "Garanties souhaitées",
// nextOptions: {
// 	values: ["Tiers simple", "Intermediaire", "Tous risques"],
