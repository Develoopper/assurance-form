var rootNextOptions = {
	nextId: "marque",
	nextLabel: "Marque",
	nextOptions: {
		values: 'ajax',
		nextId: "model",
		nextLabel: "Modèle",
		nextOptions: {
			values: 'ajax',
			nextId: "alimentation",
			nextLabel: "Type carburant",
			nextOptions: {
				values: 'ajax',
				nextId: "chevaux",
				nextLabel: "Puissance",
				nextOptions: {
					values: 'ajax',
					nextId: "carrosserie",
					nextLabel: "Carrosserie",
					nextOptions: {
						values: 'ajax',
						nextId: "version",
						nextLabel: "Version",
						nextOptions: {
							values: 'ajax',
							nextId: "question1",
							nextLabel: "Question 1",
							nextOptions: {
								values: 'input',
								nextId: "question2",
									nextLabel: "Question 2",
									nextOptions: {
										values: 'input',
										nextId: 'question3',
										nextLabel: 'Question 3',
										nextOptions: [
											{
												value: 'Oui',
												nextId: 'question4',
												nextLabel: 'Question 4',
												nextOptions: {
													values: ['1', '2']
												}
											},
											{
												value: 'Non',
												nextId: 'question5',
												nextLabel: 'Question 5',
												nextOptions: {
													values: ['3', '4']
												}
											}
										]
									},
							},
						},
					},
				},
			},
		},
	},
};
