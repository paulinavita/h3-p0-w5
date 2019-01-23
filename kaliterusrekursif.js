function kaliTerusRekursif(angka) {
    
    var stringAngka = angka.toString()
    if (stringAngka.length === 1) {
        return Number(stringAngka)
    }

    var temp = 1
        for ( i = 0; i < stringAngka.length;i++) {
            temp = temp * Number(stringAngka[i])
        }
    
    return kaliTerusRekursif(temp)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6