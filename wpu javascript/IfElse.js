// let angka = 6;

// if (angka < 5) {
//   document.writeln(angka + "kontol solo");
// } else {
//   document.writeln(angka + "lebih besar dari 5");
// }

let nomor = prompt("masukkan momor anda");
if (nomor % 2 == 0) {
  alert(nomor + "adalah bilangan genap");
} else if (nomor % 2 == 1) {
  alert(nomor + "angka adalah bilangan ganjil");
} else {
  alert("angka kontol!! bukan huruf!");
}

//let nomor = prompt("Masukkan nomor anda");
// nomor = parseInt(nomor); // Mengubah string menjadi bilangan bulat

// if (isNaN(nomor)) {
//   alert("Input yang Anda masukkan bukan angka.");
// } else {
//   if (nomor % 2 === 0) {
//     alert(nomor + " adalah bilangan genap");
//   } else {
//     alert(nomor + " adalah bilangan ganjil");
//   }
// }
