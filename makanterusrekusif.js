function makanTerusRekursif(waktu) {
    
    if (waktu === 0) { //dibuat false diatas
        return 0 // termination
    } else if (waktu - 15 <= 0) { //base case
        return 1
    }
    return 1 + makanTerusRekursif(waktu - 15) //recursive
    
}

  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0