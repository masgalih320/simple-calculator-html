let v = document.getElementById('v')
let result = document.getElementById('res')
let num = document.querySelectorAll('input[type=button]')
let C = document.querySelector('input[value="C"]')
let eq = document.querySelector('input[value="="]')
let plus = document.querySelector('input[value="+"]')
let min = document.querySelector('input[value="-"]')
let div = document.querySelector('input[value="/"]')
let x = document.querySelector('input[value="*"]')
let DEL = document.querySelector('input[value="DEL"]')
let toCalc = 0
let ac = false

for (let i = 5; i <= 14; i++) {
    num[i].addEventListener('click', (e) => {
        v.value += e.target.value
        v.value = parseInt(v.value, 10)
        toCalc = v.value

        if (res.value != '' && ac == true) {
            res.value = ''
            ac = false
        }
    })
}

C.addEventListener('click', () => {
    v.value = 0
    result.value = ""
    toCalc = 0
})

DEL.addEventListener('click', () => {
    if (toCalc == 0) return v.value = 0

    toCalc = (toCalc.split('').splice(0, toCalc.length - 1).join('') ? toCalc.split('').splice(0, toCalc.length - 1).join('') : 0)
    v.value = toCalc
})

plus.addEventListener('click', (e) => {
    setOps(e.target.value)
})

min.addEventListener('click', (e) => {
    setOps(e.target.value)
})

div.addEventListener('click', (e) => {
    setOps(e.target.value)
})

x.addEventListener('click', (e) => {
    setOps(e.target.value)
})

eq.addEventListener('click', () => {
    res.value = Counter(res.value + toCalc)
    toCalc = 0
    v.value = ''
    ac = true
})

function Counter(theNum) {
    return new Function('return ' + theNum)();
}

function setOps(ops) {
    if (res.value == '') {
        res.value = toCalc + ops
        toCalc = 0
        v.value = toCalc
        ops = ''
    } else {
        res.value += toCalc
        res.value += ops
        toCalc = 0
        v.value = toCalc
    }
}