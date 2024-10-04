window.addEventListener('load', ()=>{
    const box = document.querySelector('.excersize')
    let numbers = []
    for(let i = 0; i < 10; i++) {
        numbers[i] = Math.ceil((Math.random() * 30) + 10)
    }
    box.innerHTML += `<h4 class="main-sw__subtitle">Zamień liczby oktalne (8) na dziesiętne (10)</h4>`
    for(let i = 0; i < 5; i++) {
        let index = octal(numbers[i])
        box.innerHTML += `
        <div class="excersize__box">
            <div>
                <p><span id="id${i}value">${index}</span><sub>(8)</sub></p>  
                <input type="number" id="id${i}input" placeholder="wartość (10)">
                <button id="id${i}btn" class="binary">Sprawdź</button><br>
            </div>
            <span id="id${i}text"></span>
        </div>
        `
    }
    box.innerHTML += `<h4 class="main-sw__subtitle">Zamień liczby binarne (2) na liczby oktalne (8)</h4>`
    for(let i = 5; i < 10; i++) {
        let index = binary(numbers[i])
        box.innerHTML += `
        <div class="excersize__box">
            <div>
                <p><span id="id${i}value">${index}</span><sub>(2)</sub></p>  
                <input type="number" id="id${i}input" placeholder="wartość (8)">
                <button id="id${i}btn" class="binary">Sprawdź</button><br>
            </div>
            <span id="id${i}text"></span>
        </div>
        `
    }
    const binaryArray = document.querySelectorAll('.binary')
    binaryArray.forEach(item => {
        item.addEventListener('click', ()=>{
            let value1, value2
            let id = item.id[2]
            value1 = document.querySelector(`#id${id}value`).textContent
            value2 = document.querySelector(`#id${id}input`).value
            let text = document.querySelector(`#id${id}text`)
            if(id < 5) {
                value2 = octal(value2)
            }
            else {
                value1 = decimal(value1)
                value1 = octal(value1)
                console.log(value1)
            }
            if(value1 == value2) {
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