var sinistre = {
	nextTitle: "Information sinistres",
	nextId: "dateSinistre36DerniersMois",
	nextLabel: "Date sinistre",
	nextOptions: {
		values: "input",
		nextId: "natureSinistre36DerniersMois",
		nextLabel: "Nature sinistre",
		nextOptions: [
      { valeur: "Materiel non responsable", ...cas_sinistreCorporel },
      { valeur: "Materiel responsable", ...infractionsAlcoolemie },
      { valeur: "Materiel responsable 50", ...infractionsAlcoolemie },
      { valeur: "Corporel Non responsable", ...infractionsAlcoolemie },
      { valeur: "Corporel responsable", ...infractionsAlcoolemie },
      { valeur: "Corporel Partiellement responsable", ...infractionsAlcoolemie },
      { valeur: "bris de glace", ...infractionsAlcoolemie },
      { valeur: "Vol", ...infractionsAlcoolemie },
      { valeur: "Vandalisme", ...infractionsAlcoolemie },
      { valeur: "Incendie", ...infractionsAlcoolemie },
      { valeur: "Evenement naturels", ...infractionsAlcoolemie },
      { valeur: "Dommages en stationnement", ...infractionsAlcoolemie },
    ],
	},
}