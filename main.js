const bicycle = [

    { name: "Amflow", weight: 15 },
    { name: "Bergamont", weight: 12 },
    { name: "Bianchi", weight: 8 },
    { name: "Bold", weight: 13 },

];

// for (let i = 0; i < bicycle.length; i++) {
//     const bike = bicycle[i];

//     console.log(`La ${bike.name} pesa ${bike.weight}`);

// }


let lightBike = bicycle[0];

for (let i = 0; i < bicycle.length; i++) {
    const bike = bicycle[i];

    if (bike.weight < lightBike.weight) {
        lightBike = bike;
    }

}

  console.log("La bici più leggera è:", lightBike)



