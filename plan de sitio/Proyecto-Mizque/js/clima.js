const requestURL= "https://api.openweathermap.org/data/2.5/weather?id=3910291&units=metric&appid=9062e0e181557a2fff0a54bdca6eb699";
const request = new XMLHttpRequest();
request.open('GET',requestURL);

request.responseType = 'json';
request.send();

request.onload = function()
{
    const clima_mizque = request.response;
    console.log(clima_mizque);

    Most_info(clima_mizque);
}
function Most_info(objson)
{
    var En1 = document.querySelector('header');
    var Ciudad= document.createElement('h1');
    var temperatura_actual= document.createElement('h2');
    var temperatura_max= document.createElement('h3');
    var temperatura_min= document.createElement('h3');
    var humedad= document.createElement('h3');
    

    Ciudad.textContent= 'Provincia de '+ objson.name;
    temperatura_actual.textContent= 'Temperatura actual: '+ objson.main.temp + '°C';
    temperatura_max.textContent= 'Temperatura maxima: '+ objson.main.temp_max + '°C';
    temperatura_min.textContent= 'Temperatura minima: '+ objson.main.temp_min + '°C';
    humedad.textContent= 'Humedad relativa: '+ objson.main.humidity + '%';

    En1.appendChild(Ciudad);
    En1.appendChild(temperatura_actual);
    En1.appendChild(temperatura_max);
    En1.appendChild(temperatura_min);
    En1.appendChild(humedad);
}