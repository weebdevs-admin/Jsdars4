var elForm = document.querySelector("form");
var elInput = document.querySelector(".input");
var elBtn = document.querySelector(".btn");
var elTitle = document.querySelector(".title")

elForm.addEventListener('submit',function(evn){
    evn.preventDefault()
    var num = elInput.value
    if(num % 2 == 0 && num % 1 == 0){
        console.log("Tub son emas");
        elTitle.textContent = "Tub son emas"
    }
    else if(num % 3 == 0 ){
        console.log("Tub Son Emas");
        elTitle.textContent = "Tub son emas"

    }
    else if(num % num == 0 && num % 1 == 0){
        console.log("tub son");
        elTitle.textContent = "Tub son "
    }
    else{
        console.log("Xato ");
        elTitle.textContent = "Xato"
    }
    elInput.value = ''
})