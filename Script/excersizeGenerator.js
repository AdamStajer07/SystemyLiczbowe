let btn = document.querySelector('.generateBtn')
let deleteBtn = document.querySelector('.deleteBtn')
deleteBtn.addEventListener('click', () => {
    location.reload()
})
btn.addEventListener('click', () => {
    const box = document.querySelector('.excersize')
    let value1 = document.querySelector('.firstValue').value
    let value2 = document.querySelector('.twiceValue').value
    let length = document.querySelector('.excersizeLength').value
    let min = document.querySelector('.minLength').value
    let max = document.querySelector('.maxLength').value
    let numbers = []
    let float = []
    box.innerHTML = ''
    console.log(value1, value2, length, min, max)
    if (parseInt(max) < parseInt(min)) {
        alert('Źle podany zakres liczb')
    }
    else if (min == '' || max == '') {
        alert('Uzupełnij zakres liczb')
    }
    else {
        let bool = true
        for (let i = 0; i < 3; i++) {
            let array = ['2', '8', '16', 'FP']
            if ((value1 == array[i] && min < 0) || (value2 == array[i] && min < 0)) {
                alert('W tym przypadku zakres musi być dodatni')
                bool = false
            }
        }
        if (bool) {
            if (value1 == 'FP' || value2 == 'FP') {
                for (let i = 0; i < length; i++) {
                    float[i] = (Math.floor((Math.random() * 7) + 1) / 8).toString()
                    float[i] = float[i].slice(2, float[i].length)
                    numbers[i] = ((Math.random() * 30) + 2).toFixed(0) + '.' + float[i]
                    console.log(numbers[i])
                }
            }
            else {
                for (let i = 0; i < length; i++) {
                    if (max > 0 && min < 0) {
                        let a, b, num
                        if (Math.round(Math.random() * 10) % 2 == 1) {
                            a = 0, b = max
                            num = Math.round(Math.random() * (b - a) + a)
                            if (num == 0) num = 1
                        }
                        else {
                            a = min.slice(1, min.length), b = 0
                            num = Math.round(Math.random() * (b - a) + a)
                            if (num == 0) num = -1
                        }
                        numbers[i] = num
                    }
                    else if (max <= 0) {
                        let a, b, num
                        a = min.slice(1, min.length), b = max.slice(1, max.length)
                        num = Math.round(Math.random() * (b - a) + a)
                        if (num == 0) num = -1
                        numbers[i] = num
                    }
                    else {
                        let num;
                        num = Math.round(Math.random() * (max - min) + min)
                        if (num == 0) num = max
                        numbers[i] = num
                    }

                }
            }

            if ((value1 == 'FP' && value2 != '10') || (value2 == 'FP' && value1 != '10')) {
                alert('Niemożliwa konwersja z tych systemów')
            }
            else {
                box.innerHTML += `<h2 class="main-sw__title">Zadania</h2>
                `
                box.innerHTML += `<h4 class="main-sw__subtitle">Zamień liczby</h4>`
                for (let i = 0; i < length; i++) {
                    let index = numbers[i]
                    let array = ['8', '10', '16']
                    if (value1 == '2') {
                        index = binary(index)
                    }
                    else if (value1 == '8') {
                        index = octal(index)
                    }
                    else if (value1 == '16') {
                        index = hexadecimal(index)
                    }
                    else if (value1 == 'ZM') {
                        index = zm(index)
                    }
                    else if (value1 == 'U1') {
                        index = u1(index)
                    }
                    else if (value1 == 'U2') {
                        index = u2(index)
                    }
                    else if (value1 == 'FP') {
                        index = fp(index)
                    }
                    box.innerHTML += `
                    <div class="excersize__box">
                        <div>
                            <p><span id="id${i}value">${index}</span><sub>(${value1})</sub></p>  
                            <input type="text" id="id${i}input" placeholder="wartość (${value2})">
                            <button id="id${i}btn" class="binary">Sprawdź</button><br>
                        </div>
                        <span id="id${i}text"></span>
                    </div>
                    `
                }
                const binaryArray = document.querySelectorAll('.binary')
                binaryArray.forEach(item => {
                    item.addEventListener('click', () => {
                        let array = ['8', '10', '16']
                        let number1, number2
                        let id;
                        if (!isNaN(item.id[2]) && !isNaN(item.id[3])) {
                            id = item.id[2] + item.id[3]
                        }
                        else {
                            id = item.id[2]
                        }
                        number1 = numbers[id]
                        number2 = document.querySelector(`#id${id}input`).value
                        let text = document.querySelector(`#id${id}text`)

                        if (value2 == '2') {
                            number1 = binary(number1)
                        }
                        else if (value2 == '8') {
                            number1 = octal(number1)
                        }
                        else if (value2 == '16') {
                            number1 = hexadecimal(number1)
                        }
                        else if (value2 == 'ZM') {
                            number1 = zm(number1)
                        }
                        else if (value2 == 'U1') {
                            number1 = u1(number1)
                        }
                        else if (value2 == 'U2') {
                            number1 = u2(number1)
                        }
                        else if (value2 == 'FP') {
                            number1 = fp(number1)
                        }
                        if (number1 == number2) {
                            text.style.color = 'rgb(7, 206, 7)'
                            text.textContent = 'Dobrze'
                        }
                        else {
                            text.style.color = 'red'
                            text.textContent = 'Źle'
                        }
                    })
                })
            }
        }
    }
})
