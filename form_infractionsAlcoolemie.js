var form_infractionsAlcoolemie = {
	nextTitle: "Informations infractions alcoolémie",
	nextId: "dateDernierAlcoolemie36DerniersMois",
	nextLabel: "Date du teste infraction",
	nextOptions: {
		values: "date",
		nextId: "isEuAlcoolemie36DerniersMois",
		nextLabel: "Positif à l’alcoolémie",
		nextOptions: [
      { value: "Non", ...null },
      { value: "Oui", ...cas_alcoolemie36DerniersMois },
    ],
	},
}