function changeVocals (str) {

    noVocals = ''
    for (i = 0; i < str.length ;i++) {
        if(str[i] === 'a') {
            noVocals += 'b'
        } else if (str[i] === 'i') {
            noVocals += 'j'
        } else if (str[i] === 'u') {
            noVocals += 'v'
        } else if (str[i] === 'e') {
            noVocals += 'f'
        } else if (str[i] === 'o') {
            noVocals += 'p'
        } else if (str[i] === 'A') {
            noVocals += 'B'
        } else if (str[i] === 'I') {
            noVocals += 'J'
        } else if (str[i] === 'U') {
            noVocals += 'V'
        } else if (str[i] === 'E') {
            noVocals += 'F'
        } else if (str[i] === 'O') {
            noVocals += 'P'
        } else noVocals += str[i]
    }
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
