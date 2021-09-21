var fundo = document.getElementById('fundo');
var fundoHeader = document.getElementById('fundo-header');
var aA = document.getElementById('aA');
var aB = document.getElementById('aB');
var aC = document.getElementById('aC');
var aD = document.getElementById('aD');
var aE = document.getElementById('aE');
var aF = document.getElementById('aF');
var scrol = document.getElementsByTagName("body");

var lampada = document.getElementById('lampada').addEventListener('click', () => {
    fundo.style.backgroundColor = "#121212";
    fundo.style.color = "#FEFEFE";

    fundoHeader.style.backgroundColor = "#121212";
    fundoHeader.style.color = "#FEFEFE";
    fundoHeader.style.textDecorationColor = "#FEFEFE";

    aA.style.color = "#FEFEFE";
    aB.style.color = "#FEFEFE";
    aC.style.color = "#FEFEFE";
    aD.style.color = "#FEFEFE";
    aE.style.color = "#FEFEFE";
    aF.style.color = "#FEFEFE";

});

