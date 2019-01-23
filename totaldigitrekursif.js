function totalDigitRekursif(angka) {
   
    var stringNum = angka.toString()

    //STOPPER
    if (stringNum.length === 1) {
        return Number(stringNum)
    }
    //PARAMETER BARU
    var lastIndex = stringNum.length - 1
    return Number(stringNum[0]) + totalDigitRekursif(Number(stringNum.slice(1,stringNum.length)))

}

  
  // TEST CASES
  console.log(totalDigitRekursif(1542)); // 8
//   console.log(totalDigitRekursif(1542)); // 12
//   console.log(totalDigitRekursif(5)); // 5
//   console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5


// function totalDigitCoba(angka) {
//     let strAngka = String(angka);
    
//     //STOPPER
//     if ( strAngka.length == 1 ) {
//         return angka;
//     };

//     //PARAMETER BERIKUTNYA MAU APA
//     let angkaLebih = String(angka).slice(2, angka.length);

//     let angkaBaru = Number(strAngka[0]) + Number(strAngka[1]);

//     return angkaBaru + totalDigitTobi(Number(angkaLebih))

// }
