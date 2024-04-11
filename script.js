
var isParagraphAdded = false;

function sm() {
    if (!isParagraphAdded) {
    var p = document.createElement("p")
        var txt = document.createTextNode('Arduino é uma plataforma programável de prototipagem eletrônica (para testes e projetos eletrônicos) de placa única e hardware livre (código aberto), que permite aos usuários criar objetos eletrônicos interativos e independentes, usando o microcontrolador Atmel AVR ou ARM com suporte de entrada/saída embutido.')

        p.appendChild(txt)

        var btn = document.getElementById('res')
        btn.appendChild(p)

        btn.addEventListener('mouseleave', function() {
        mo(p); // Passando a referência do parágrafo criado para a função mo()
        })

        function restartAnimation() {
            btn.style.animation = 'none'; // Remova a animação
            btn.offsetHeight; /* Trigger reflow, caso contrário, a nova animação não seria aplicada corretamente */

            btn.removeEventListener('animationend', restartAnimation)
        }

        btn.addEventListener('animationend', restartAnimation);

        btn.style.animation = 'panim .6s ease-in-out'

        isParagraphAdded = true
    }
}

function mo(paragrafo) {
if (paragrafo && paragrafo.parentNode) { // Verifica se o parágrafo existe e tem um pai
paragrafo.parentNode.removeChild(paragrafo); // Remove o parágrafo do seu pai
p = null

isParagraphAdded = false
}
}

function sm2() {
if (!isParagraphAdded) {
var p2 = document.createElement('p')
var txt2 = document.createTextNode('A programação é feita por meio do programa IDE Arduino, o qual pode ser baixado diretamente no site oficial arduino.cc, além disso, a conexão com o computador é feita via cabo usb, permitindo que os comandos definidos no programa sejam devidamente transferidos até a placa.')

p2.appendChild(txt2)

var btn2 = document.getElementById('res2')
        btn2.appendChild(p2)
btn2.addEventListener('mouseleave', function() {
    mo2(p2)
})

function restartAnimation() {
            btn2.style.animation = 'none'; // Remova a animação
            btn2.offsetHeight; /* Trigger reflow, caso contrário, a nova animação não seria aplicada corretamente */

            btn2.removeEventListener('animationend', restartAnimation)
        }

        btn2.addEventListener('animationend', restartAnimation);

        btn2.style.animation = 'panim2 .6s ease-in-out'

        isParagraphAdded = true
    }
}

function mo2(paragrafo2) {
if (paragrafo2 && paragrafo2.parentNode) {
    paragrafo2.parentNode.removeChild(paragrafo2);
    p2 = null
    isParagraphAdded = false
}
}

const menu = document.querySelector('.social-container .social')
const integrantes = document.querySelector('.soc-container')
menu.addEventListener('click', () => {
integrantes.classList.toggle("active");
});