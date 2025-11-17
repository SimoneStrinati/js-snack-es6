const racingBike = [

    { name: "Amflow", weight: 15},
    { name: "Bergamont", weight: 12},
    { name: "Bianchi", weight: 8 },
    { name: "Bold", weight: 13},

];

for (let i = 0; i < racingBike.length; i++) {
    const bike = racingBike[i];

    console.log(`La ${bike.name} pesa ${bike.weight}`);
    
}

