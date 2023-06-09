// ! VKI hesaplama
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");

btn.onclick = function () {
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");

    let calculate = (Number(weight.value) / (Number(height.value) * Number(height.value))).toFixed(2);

    if (calculate <= 18.5) {
        result.innerHTML = "Düşük kilolu";
    }

    else if (calculate <= 24.9) {
        result.innerHTML = "Normal kilolu";
    }
    
    else if (calculate <= 29.9) {
        result.innerHTML = "Fazla kilolu";
    }
  
    else if (calculate < 40) {
        result.innerHTML = "Obez";
    }

    else if (calculate > 40) {
        result.innerHTML = "Aşırı obez";
    }

    else {
        result.innerHTML = "Doğru bir veri girmediniz."
    }

    let age = document.getElementById("age");
    let gender = document.getElementById("gender");

    if (gender.value == "male" && age.value > 50) {
        result1.innerHTML = "VKI: " + calculate + ", bol bol yürüyüş yapmalısınız.";
    }

    else if (gender.value == "female" && age.value > 60) {
        result1.innerHTML = "VKI: " + calculate + ", sebze tüketimini arttırmalısınız.";
    }

    else {
        result1.innerHTML = "Doğru bir veri girmediniz."
    }
}