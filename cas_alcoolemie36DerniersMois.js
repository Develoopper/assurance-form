var cas_alcoolemie36DerniersMois = {
  nextId: "controleAlcoolemieSuiteA36DerniersMois",
	nextLabel: "Contrôle effectue suite à : ",
	nextOptions: {
		values: ["Controle", "routier", "sinistre"],
		nextId: "isRefusTestAlcoolemie36DerniersMois",
		nextLabel: "Refus de faire le test après alcoolémie ?",
		nextOptions: {
      values: ["Non", "Oui"],
      nextId: "isDelitDeFuiteAlcoolemie36DerniersMois",
      nextLabel: "Délit de fuite après alcoolémie ?",
      nextOptions: {
        values: ["Non", "Oui"],
        nextId: "controleAlcoolemieMethode36DerniersMois",
        nextLabel: "Teste effectue avec",
        nextOptions: {
          values: ["prise de sang", "ethylotest"],
          nextId: "tauxAlcoolemie",
          nextLabel: "Taux alcoolémie",
          nextOptions: {
            values: 'input'
          },
        },
      },
    },
	},
}