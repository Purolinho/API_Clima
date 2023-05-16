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
        info = document.getElementById("info").style.width = "50%"
        
        setTimeout(() => {
        }, 1000);       
        info_completa = document.getElementById("info_completa").style.opacity = "1"
        info_completa = document.getElementById("info_completa").innerHTML = "País: " + país.country + "<br>" + "Capital: " + país.name + "<br>" + "Região: " + país.region + "<br>"
    })
    .catch(error => {
        alert('Não foi possível achar o país escolhido');
        console.log(error)
    });
})
