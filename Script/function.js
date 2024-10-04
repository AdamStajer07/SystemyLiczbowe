function decimal(a) {
    let score = 0
    let reversed = a.split('').reverse().join('')
    for (let i = 0; i < reversed.length; i++) {
        if (reversed[i] == 1) {
            score += Math.pow(2, i)
        }
    }
    return score
}
function binary(a) {
    a = parseInt(a).toString(2)
    return a
}
function zm(a) {
    if (a <= 0) {
        a = a.toString().slice(1, a.length)
        a = '1' + parseInt(a).toString(2)
    }
    else {
        a = '0' + parseInt(a).toString(2)
    }
    console.log(a)
    return a
}
function u1(a) {
    let score = ''
    if (a < 0) {
        a = a.toString().slice(1, a.length)
        a = '0' + parseInt(a).toString(2)
        for (let i = 0; i < a.length; i++) {
            if (a[i] == '0') {
                score += '1'
            }
            else {
                score += '0'
            }
        }
        a = score
    }
    else {
        a = '0' + parseInt(a).toString(2)
    }
    return a
}
function u2(a) {
    let score = ''
    if (a < 0) {
        a = a.toString().slice(1, a.length)
        console.log(a)
        a -= 1
        a = '0' + parseInt(a).toString(2)
        for (let i = 0; i < a.length; i++) {
            if (a[i] == '0') {
                score += '1'
            }
            else {
                score += '0'
            }
        }
        a = score
    }
    else {
        a = '0' + parseInt(a).toString(2)
    }
    return a
}
function octal(a) {
    a = parseInt(a).toString(8)
    return a
}
function hexadecimal(a) {
    a = parseInt(a).toString(16).toUpperCase()
    return a
}
function fp(a) {
    a = parseFloat(a).toString(2)
    return a
}