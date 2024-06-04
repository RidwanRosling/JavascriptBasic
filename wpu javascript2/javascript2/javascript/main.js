// alert("heyho");
// let usia = prompt("berapa usia kamu?");
// alert("usia anda adalah" + usia);
let nama = "Rosling"; //tipe string
let usia = 30; // tipe integer number
let tinggiBadan = 173.5; //tipe double float
let beratBadan;
let pacar = 1;

beratBadan = 60;

if (pacar == null) {
  pacar = "belum punya";
} else {
  pacar = "udah punya";
}

let saldoAwal = 50000;
let saldoTambahan = 80000;
const hutang = 30000;
const saldoAkhir = saldoAwal + saldoTambahan - hutang;

const x = 9;
const y = 2;
const z = x / y;

alert(`nilai x = ${x} / nilai y = ${y} maka hasilnya adalah ${z}`);

alert(
  `nama saya${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan}cm berat badan saya ${beratBadan}kg dan pacar saya ${pacar}`
);
alert(
  `saldo awal saya sebessar Rp.${saldoAwal} & saldo tambahan yang akan saya miliki sebesar Rp.${saldoTambahan}
  jadi total saldo yang saya miliki adalah sebanyak Rp.${saldoAkhir}`
);

// switch(pacar) {
//     case 1:
//      pacar = "punya 1 aja"
//    break
//     case 2 :
//     pacar = 'punya pacar 2, aku cukup playboy'
//     break
//    default
//     pacar = 'belum punya pacar'
//     break
// }
