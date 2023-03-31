document.querySelector(".convert-from-celsius").addEventListener('click', convertFC);
document.querySelector(".convert-from-farenheit").addEventListener('click', convertFF);
document.querySelector(".convert-from-kelvin").addEventListener('click', convertFK);
document.querySelector(".convert-from-rankine").addEventListener('click', convertFR);
document.querySelector(".reset-button").addEventListener('click', resetIN);

const celsiusTemp = document.querySelector('.input-celsius');
const farenheitTemp = document.querySelector('.input-farenheit');
const kelvinTemp = document.querySelector('.input-kelvin');
const rankineTemp = document.querySelector('.input-rankine');


function convertFC(e){
    e.preventDefault();
    if(!celsiusTemp.value){
        return;
    }
    farenheitTemp.value = (celsiusTemp.value * 9 / 5 + 32).toFixed(2);
    kelvinTemp.value = (parseFloat(celsiusTemp.value) + 273.15).toFixed(2);
    rankineTemp.value = ((celsiusTemp.value * 9 / 5) + 491.67).toFixed(2);
};

function convertFF(e){
    e.preventDefault();
    if(!farenheitTemp.value){
        return;
    }
    celsiusTemp.value = ((farenheitTemp.value - 32) * 5 / 9).toFixed(2);
    kelvinTemp.value = (parseFloat(celsiusTemp.value) + 273.15).toFixed(2)
    rankineTemp.value = (parseFloat(farenheitTemp.value) + 459.67).toFixed(2);
}

function convertFK(e){
    e.preventDefault();
    if(!kelvinTemp.value){
        return;
    }
    celsiusTemp.value = (kelvinTemp.value - 273.15).toFixed(2);
    farenheitTemp.value = ((kelvinTemp.value - 273.15) * 9 / 5 + 32).toFixed(2);
    rankineTemp.value = (kelvinTemp.value * 1.8).toFixed(2);
}

function convertFR(e){
    e.preventDefault();
    if(!rankineTemp.value){
        return;
    }
    celsiusTemp.value = ((rankineTemp.value - 491.67) * 5 / 9).toFixed(2);
    farenheitTemp.value = (rankineTemp.value - 459.67).toFixed(2);
    kelvinTemp.value = (rankineTemp.value * 5 / 9).toFixed(2);
}

function resetIN(e){
    e.preventDefault();
    celsiusTemp.value = '';
    farenheitTemp.value = '';
    kelvinTemp.value = '';
    rankineTemp.value = '';
}