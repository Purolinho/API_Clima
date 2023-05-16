var país_escolhido;
var url;
var país;
var info;
var info_completa;

var botao = document.getElementById("botao").addEventListener("click", () => {
    país_escolhido = document.getElementById("nome_país").value
    url = "http://api.weatherapi.com/v1/current.json?key=e71b7c7a00df42e2a60100831231605&q="+país_escolhido+"&aqi=no"

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const país = data.location
        const clima = data.current
            info = document.getElementById("info").style.transition = "0.4s"
            info = document.getElementById("info").style.opacity = "1"
            info = document.getElementById("info").style.width = "20%"
            info = document.getElementById("info").style.transition = "1s"
        
        setTimeout(() => {
        }, 1000);       
        info_completa = document.getElementById("info_completa").style.display = "flex"
        info_completa = document.getElementById("info_completa").style.opacity = "1"
        info_completa = document.getElementById("info_completa").innerHTML = "<ul>" + "País: " + país.country + "<br>" + "Capital: " + país.name + "<br>" + "Região: " + país.region + "<br>" + "Horário atual: " + (país.localtime).slice(10) + "<br>" + "Clima: " + clima.condition.text + "</ul>" + '<img src='+clima.condition.icon+' >'
    })
    .catch(error => {
        alert('Não foi possível achar o país escolhido');
        console.log(error)
    });
})


