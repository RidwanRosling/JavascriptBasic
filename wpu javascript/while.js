// exercise while and for

let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot NO. " + noAngkot + "beroperasi dengan baik");
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + "sedang tidak beroperasi");
}
