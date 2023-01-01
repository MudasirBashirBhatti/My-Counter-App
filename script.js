let getNmb = document.getElementById('getNumber')
let btn = document.querySelectorAll('button');
let output = document.querySelector('.number');
let increase = document.getElementById('increase');
let reset = document.getElementById('reset');
let decrease = document.getElementById('decrease');
let myInput = document.querySelector('input');
// let total = document.querySelector('.total');
// let remaining = document.querySelector('.remaining');
let total = document.querySelectorAll('.total');
let remaining = document.querySelectorAll('.remaining');

for (item of btn) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        var saveNumber = myInput.value;
        if (buttonText == 'Increase') {
            output.innerText++;
            // remaining.innerText = saveNumber - output.innerText

            remaining.forEach((e)=>{
                e.innerText = saveNumber - output.innerText
            })

            output.style.color = 'green'
        } else if (buttonText == 'Reset') {
            output.innerText = 0
            // remaining.innerText = saveNumber

            remaining.forEach((e)=>{
                e.innerText = saveNumber
            })

            output.style.color = 'green'
        } else if (buttonText == 'Click') {
            // total.innerText = saveNumber;
            
            total.forEach((e)=>{
                e.innerText = saveNumber;
        
            })

            // remaining.innerText = saveNumber;
            remaining.forEach((e)=>{
                e.innerText = saveNumber;
            })
            
        } else if (buttonText == 'Decrease') {
            output.innerText--;
            // remaining.innerText = saveNumber - output.innerText
            remaining.forEach((e)=>{
                e.innerText = saveNumber - output.innerText
            })
            output.style.color = 'red'
            if (output.innerText <= 0) {
                output.innerText = 0;
                output.style.color = 'green'
                // remaining.innerText = saveNumber
                remaining.forEach((e)=>{
                e.innerText = saveNumber

            })

            }
        }
    })
}
