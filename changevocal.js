function changeVocals (str) {
    // revisian ganti dengan kamus array atau string
    var noVocals = ''
    var vowelsOnly = 'aiuoeAIUEO'
    var consOnly = 'bjvfpBJVFP'
    
    for ( h = 0; h < str.length ; h++) {
        var isExist = false
        for (i = 0; i < vowelsOnly.length ;i++) {
            if (str[h] === vowelsOnly[i]) {
                noVocals += consOnly[i]
                isExist = true
            }
        }
        if (!isExist) {
            noVocals += str[h]
        } 
    }
    // console.log (noVocals)
    return noVocals
}

function reverseWord (str) {
    var wordRev = ''
    for ( j = str.length - 1; j >= 0 ;j--) {
        wordRev += str[j]
    }
    return wordRev
}

function setLowerUpperCase (str) {
    
    viceVersaCase = ''
    for ( n = 0; n < str.length ;n++) {
        if (str[n] === str[n].toUpperCase()) {
            viceVersaCase += str[n].toLowerCase()
        } else if (str[n] === str[n].toLowerCase()) {
            viceVersaCase += str[n].toUpperCase()
        }
    }
    return viceVersaCase
}

function removeSpaces (str) {
    var tempwoSpaces = ''
    for (k = 0; k < str.length ;k++) {
        if (str[k] !== ' ') {
            tempwoSpaces += str[k]
        }
    }
    if (str.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return tempwoSpaces
}

function passwordGenerator (name) {
  var byeVocals = changeVocals(name)
  var reversed = reverseWord(byeVocals)
  var allUpCased = setLowerUpperCase (reversed)
  var noSpaces = removeSpaces (allUpCased)

  return noSpaces
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
