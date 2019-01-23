function hapusSimbol(str) {

    var hasil = str.match(/[A-Z,a-z,0-9,_]/gi)
    // console.log(hasil)

    var final = ''
    for (i = 0; i < hasil.length ;i++) {
        final += hasil[i]
        
    }
    return final

}
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100