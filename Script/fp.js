window.addEventListener('load', () => {
    const box = document.querySelector('.excersize')
    let numbers = []
    let float = []
    for (let i = 0; i < 10; i++) {
        float[i] = (Math.floor((Math.random() * 7) + 1) / 8).toString()
        float[i] = float[i].slice(2, float[i].length)
        numbers[i] = ((Math.random() * 30) + 2).toFixed(0) + '.' + float[i]
    }
    box.innerHTML += `<h4 class="main-sw__subtitle">Zamień zmiennoprzecinkowe (FP) na liczby dziesiętne (10)</h4>`
    for (let i = 0; i < 5; i++) {
        let index = fp(numbers[i])
        box.innerHTML += `
        <div class="excersize__box">
            <div>
                <p><span id="id${i}value">${index}</span><sub>(FP)</sub></p>  
                <input type="number" id="id${i}input" placeholder="wartość (10)">
                <button id="id${i}btn" class="binary">Sprawdź</button><br>
            </div>
            <span id="id${i}text"></span>
        </div>
        `
    }
    box.innerHTML += `<h4 class="main-sw__subtitle">Zamień liczby dziesiętne (10) na zmiennoprzecinkowe (FP)</h4>`
    for (let i = 5; i < 10; i++) {
        let index = numbers[i]
        box.innerHTML += `
        <div class="excersize__box">
            <div>
                <p><span id="id${i}value">${index}</span><sub>(10)</sub></p>  
                <input type="number" id="id${i}input" placeholder="wartość (FP)">
                <button id="id${i}btn" class="binary">Sprawdź</button><br>
            </div>
            <span id="id${i}text"></span>
        </div>
        `
    }
    const binaryArray = document.querySelectorAll('.binary')
    binaryArray.forEach(item => {
        item.addEventListener('click', () => {
            let value1, value2
            let id = item.id[2]
            value1 = document.querySelector(`#id${id}value`).textContent
            value2 = document.querySelector(`#id${id}input`).value
            let text = document.querySelector(`#id${id}text`)
            if (id < 5) {
                value2 = fp(value2)
            }
            else {
                value1 = fp(value1)
            }
            if (value1 == value2) {
                text.style.color = 'rgb(7, 206, 7)'
                text.textContent = 'Dobrze'
            }
            else {
                text.style.color = 'red'
                text.textContent = 'Źle'
            }
        })
    })
})