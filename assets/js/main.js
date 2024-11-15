AOS.init();

const horaDeEntrada = new Date();
const segundosParaUmaMulherSofrerViolencia = 34;

function montarStringDeTempo(minutos, segundos) {
    if (minutos === 0 && segundos === 0) {
        return "0 segundo"
    }

    let resultado = "";

    if (minutos > 0) {
        resultado += minutos + " minuto";

        if (minutos > 1) {
            resultado += "s"
        }
    }

    if (segundos > 0) {
        if (resultado.length > 0) {
            resultado += " e ";
        }

        resultado += segundos + " segundo";

        if (segundos > 1) {
            resultado += "s"
        }
    }

    return resultado;
}

function montarHtmlDeEstatistica(segundos) {
    if (segundos < segundosParaUmaMulherSofrerViolencia) {
        return `Dentro de <span class="destaque">${segundosParaUmaMulherSofrerViolencia - segundos} segundos</span>, uma mulher vai sofrer algum tipo de violência.`;
    }

    let numero = Math.floor(segundos / segundosParaUmaMulherSofrerViolencia);

    return `Nesse intervalo de tempo, <span class="destaque">${numero} mulher${numero > 1 ? "es" : ""} sofre${numero > 1 ? "ram" : "u"} algum tipo de violência</span>.`;
}

setInterval(() => {
    let segundosNaPagina = Math.floor(((new Date()) - horaDeEntrada) / 1000);
    let minutosNaPagina = Math.floor(segundosNaPagina / 60);
    let restoSegundos = segundosNaPagina % 60;

    document.getElementById("tempo").innerHTML = montarStringDeTempo(minutosNaPagina, restoSegundos);
    document.getElementById("estatistica").innerHTML = montarHtmlDeEstatistica(segundosNaPagina);
}, 200);
