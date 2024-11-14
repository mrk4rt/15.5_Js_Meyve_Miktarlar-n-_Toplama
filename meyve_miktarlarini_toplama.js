const meyveler = {
  elma: 10,
  armut: 5,
  muz: 8,
  portakal: 12,
  çilek: 6,
};

let toplam = 0;

for (let meyve in meyveler) {
  toplam += meyveler[meyve];
}

console.log("Toplam meyve miktarı:", toplam);


