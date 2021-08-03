var rootNextOptions = {
  values: ['_'],
  nextId: 'Marque',
  nextOptions: [
    { 
      value: "Audi",
      nextId: 'Model',
      nextOptions: [
        { 
          value: "Audi - model 1", 
          nextId: 'Chevaux',
          nextOptions: {
            values: ['5', '7', '8'],
            nextId: 'Carburant',
            nextOptions: [
              { 
                value: "Diesel", 
                nextId: 'Fonction',
                nextOptions: {
                  values: ['Personnelle', 'Taxi'],
                },
              },
              { 
                value: "Essence", 
                nextId: 'Parking',
                nextOptions: {
                  values: ['Garage'],
                },
              },
            ]
          }
        },
        { 
          value: "Audi - model 2", 
          nextId: 'Chevaux',
          nextOptions: {
            values: [9, 10, 11],
          },
        },
        { 
          value: "Audi - model 3", 
          nextId: 'Chevaux',
          nextOptions: {
            values: [12, 13, 14],
          } 
        },
        { 
          value: "Audi - model 4", 
          nextId: 'Chevaux',
          nextOptions: {
            values: [15, 16, 17],
          } 
        },
      ],
    },
    { 
      value: "Mercedes",
      nextId: 'Model',
      nextOptions: [
        { 
          value: "Mercedes - model 1", 
          nextId: 'Chevaux',
          nextOptions: {
            values: [5, 7, 8],
          }
        },
        { 
          value: "Mercedes - model 3", 
          nextId: 'Chevaux',
          nextOptions: {
            values: [12, 13, 14],
          } 
        },
      ],
    },
    { 
      value: "BMW",
      nextId: 'Model',
      nextOptions: [
        { 
          value: "BMW - model 2", 
          nextId: 'Chevaux',
          nextOptions: {
            values: [9, 10, 11],
          } 
        },
        { 
          value: "BMW - model 4", 
          nextId: 'Chevaux',
          nextOptions: {
            values: [15, 16, 17],
          } 
        },
      ],
    },
  ],
};
