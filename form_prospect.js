var form_prospect = {
	nextTitle: "Informations prospect",
	nextId: "civilite",
	nextLabel: "Civilité",
	nextOptions: {
		values: ["Monsieur", "Madame", "Mlle", "Societe"],
		values: "text",
		nextId: "nom",
		nextLabel: "Nom",
		nextOptions: {
			values: "text",
			nextId: "prenom",
			nextLabel: "Prénom",
			nextOptions: {
				values: "date",
				nextId: "dateNaissance",
				nextLabel: "Date naissance",
				nextOptions: {
					values: "date",
					nextId: "situationFamiliale",
					nextLabel: "Situation familiale",
					nextOptions: {
						values: ["C", "M", "VM", "D", "PA", "SE", "V"],
						nextId: "profession",
						nextLabel: "Profession",
						nextOptions: {
							values: [
								"Salarié sédentaire",
								"Salarié NON sédentaire",
								"Artisan",
								"Auto entrepreneur",
								"Commerçant",
								"Ecclésiastique",
								"Etudiant",
								"Exploitant agricole",
								"Fonctionnaire non sédentaire",
								"Fonctionnaire sédentaire",
								"Gerant de societe",
								"Profession libérale non",
								"dentaire",
								"Profession libérale sédentaire",
								"Sans profession",
								"Retraite",
								"TAXI",
								"VTC",
								"VRP",
							],
							nextId: "adresse",
							nextLabel: "Adresse",
							nextOptions: {
								values: "text",
								nextId: "codePostal",
								nextLabel: "Code postal",
								nextOptions: {
									values: "text",
									nextId: "ville",
									nextLabel: "Ville",
									nextOptions: {
										values: "text",
										nextId: "tel",
										nextLabel: "Téléphone",
										nextOptions: {
											values: "text",
											nextId: "email",
											nextLabel: "Email",
											nextId: "titulaireCarteGrise",
											nextLabel: "Titulaire carte grise",
											nextOptions: {
												values: ["Conducteur Principal", "Conjoint Ou Concubin", "Conducteur1 Et Conjoint Concubin", "Parents", "Parents Du Conjoint Concubin", "Societe", "Societe De Leasing", "Enfant"],
												nextOptions: {
													values: "text",
													nextId: "datePermis",
													nextLabel: "Date permis",
													nextOptions: {
														values: "date",
														nextId: "typePermis",
														nextLabel: "Type permis",
														nextOptions: [
															{
																value: "Union Europeen",
																...from_garantie,
															},
															{
																value: "Hors Union",
																nextId: "isConduiteMaroc",
																nextLabel: "Conduite au Maroc",
																nextOptions: {
																	values: ["Oui", "Non"],
																	nextId: "isConduiteTunisie",
																	nextLabel: "Conduite en Tunisie",
																	nextOptions: {
																		values: ["Oui", "Non"],
																		nextId: "isConduiteTurquie",
																		nextLabel: "Conduite en Turquie",
																		nextOptions: {
																			values: ["Oui", "Non"],
																			nextId: "isConduiteRussie",
																			nextLabel: "Conduite en Russie",
																			nextOptions: {
																				values: ["Oui", "Non"],
																				...from_garantie,
																			},
																		},
																	},
																},
															},
														],
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
};

const from_garantie = {};
