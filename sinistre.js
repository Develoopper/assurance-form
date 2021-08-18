var sinistre = {
	nextTitle: "Informations sinistres",
	nextId: "dateSinistre36DerniersMois",
	nextLabel: "Date sinistre",
	nextOptions: {
		values: "input",
		nextId: "natureSinistre36DerniersMois",
		nextLabel: "Nature sinistre",
		nextOptions: [
      { value: "Materiel non responsable", ...infractionsAlcoolemie },
      { value: "Materiel responsable", ...infractionsAlcoolemie },
      { value: "Materiel responsable 50", ...infractionsAlcoolemie },
      { value: "Corporel Non responsable", ...cas_sinistreCorporel },
      { value: "Corporel responsable", ...cas_sinistreCorporel },
      { value: "Corporel Partiellement responsable", ...cas_sinistreCorporel },
      { value: "bris de glace", ...infractionsAlcoolemie },
      { value: "Vol", ...infractionsAlcoolemie },
      { value: "Vandalisme", ...infractionsAlcoolemie },
      { value: "Incendie", ...infractionsAlcoolemie },
      { value: "Evenement naturels", ...infractionsAlcoolemie },
      { value: "Dommages en stationnement", ...infractionsAlcoolemie },
    ],
	},
}