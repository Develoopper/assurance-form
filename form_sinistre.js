var form_sinistre = {
	nextTitle: "Informations sinistres",
	nextId: "dateSinistre36DerniersMois",
	nextLabel: "Date sinistre",
	nextOptions: {
		values: "text",
		nextId: "natureSinistre36DerniersMois",
		nextLabel: "Nature sinistre",
		nextOptions: [
      { value: "Materiel non responsable", ...form_infractionsAlcoolemie },
      { value: "Materiel responsable", ...form_infractionsAlcoolemie },
      { value: "Materiel responsable 50", ...form_infractionsAlcoolemie },
      { value: "Corporel Non responsable", ...cas_sinistreCorporel },
      { value: "Corporel responsable", ...cas_sinistreCorporel },
      { value: "Corporel Partiellement responsable", ...cas_sinistreCorporel },
      { value: "bris de glace", ...form_infractionsAlcoolemie },
      { value: "Vol", ...form_infractionsAlcoolemie },
      { value: "Vandalisme", ...form_infractionsAlcoolemie },
      { value: "Incendie", ...form_infractionsAlcoolemie },
      { value: "Evenement naturels", ...form_infractionsAlcoolemie },
      { value: "Dommages en stationnement", ...form_infractionsAlcoolemie },
    ],
	},
}