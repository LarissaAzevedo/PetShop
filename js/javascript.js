// Definição de variáveis
cGato = document.getElementById("gato")
cHamster = document.getElementById("hamster")
cPassaro = document.getElementById("passaro")
cPeixe = document.getElementById("peixe")
cCao = document.getElementById("cao")
cCoelho = document.getElementById("coelho")

cCard = document.getElementById("card")

// GATO
function abreCardGato(event) {
    if (cGato.classList.contains('texto_info_abre')) {
        // se o texto estiver aparecendo - SAINDO - Quando clica para fechar
        cGato.classList.remove('animated', 'bounceInDown')
        cGato.classList.add('animated', 'bounceOutDown')

        setTimeout(() => {
            cGato.classList.add('texto_info')
            cGato.classList.remove('texto_info_abre')
            cGato.classList.remove('animated', 'bounceOutDown')

        }, 1000)
        event.stopPropagation()
        event.preventDefault()

    } else {
        // se o texto não estiver aparecendo - ABRINDO - Quando clica para abrir
        cGato.classList.add('texto_info_abre')
        cGato.classList.remove('texto_info')
        // cGato.classList.remove('impar')
        cGato.classList.add('animated', 'bounceInDown')
        setTimeout(() => {
            cGato.classList.remove('animated', 'bounceOutDown')
        }, 1000)
        event.stopPropagation()
        event.preventDefault()
    }
}

// HAMSTER
function abreCardHamster(event) {
    if (cHamster.classList.contains('texto_info_abre')) {
        // se o texto estiver aparecendo - SAINDO - Quando clica para fechar
        cHamster.classList.remove('animated', 'bounceInDown')
        cHamster.classList.add('animated', 'bounceOutDown')

        setTimeout(() => {
            cHamster.classList.add('texto_info')
            cHamster.classList.remove('texto_info_abre')
            cHamster.classList.remove('animated', 'bounceOutDown')

        }, 1000)
        event.stopPropagation()
        event.preventDefault()

    } else {
        // se o texto não estiver aparecendo - ABRINDO - Quando clica para abrir
        cHamster.classList.add('texto_info_abre')
        cHamster.classList.remove('texto_info')
        cHamster.classList.add('animated', 'bounceInDown')
        setTimeout(() => {
            cHamster.classList.remove('animated', 'bounceOutDown')
        }, 1000)
        event.stopPropagation()
        event.preventDefault()
    }
}

// PÁSSARO
function abreCardPassaro(event) {
    if (cPassaro.classList.contains('texto_info_abre')) {
        // se o texto estiver aparecendo - SAINDO - Quando clica para fechar
        cPassaro.classList.remove('animated', 'bounceInDown')
        cPassaro.classList.add('animated', 'bounceOutDown')

        setTimeout(() => {
            cPassaro.classList.add('texto_info')
            cPassaro.classList.remove('texto_info_abre')
            cPassaro.classList.remove('animated', 'bounceOutDown')

        }, 1000)
        event.stopPropagation()
        event.preventDefault()

    } else {
        // se o texto não estiver aparecendo - ABRINDO - Quando clica para abrir
        cPassaro.classList.add('texto_info_abre')
        cPassaro.classList.remove('texto_info')
        cPassaro.classList.add('animated', 'bounceInDown')
        setTimeout(() => {
            cPassaro.classList.remove('animated', 'bounceOutDown')
        }, 1000)
        event.stopPropagation()
        event.preventDefault()
    }
}

// peixe
function abreCardPeixe(event) {
    if (cPeixe.classList.contains('texto_info_abre')) {
        // se o texto estiver aparecendo - SAINDO - Quando clica para fechar
        cPeixe.classList.remove('animated', 'bounceInDown')
        cPeixe.classList.add('animated', 'bounceOutDown')

        setTimeout(() => {
            cPeixe.classList.add('texto_info')
            cPeixe.classList.remove('texto_info_abre')
            cPeixe.classList.remove('animated', 'bounceOutDown')

        }, 1000)
        event.stopPropagation()
        event.preventDefault()

    } else {
        // se o texto não estiver aparecendo - ABRINDO - Quando clica para abrir
        cPeixe.classList.add('texto_info_abre')
        cPeixe.classList.remove('texto_info')
        cPeixe.classList.add('animated', 'bounceInDown')
        setTimeout(() => {
            cPeixe.classList.remove('animated', 'bounceOutDown')
        }, 1000)
        event.stopPropagation()
        event.preventDefault()
    }
}

// cão
function abreCardCao(event) {
    if (cCao.classList.contains('texto_info_abre')) {
        // se o texto estiver aparecendo - SAINDO - Quando clica para fechar
        cCao.classList.remove('animated', 'bounceInDown')
        cCao.classList.add('animated', 'bounceOutDown')

        setTimeout(() => {
            cCao.classList.add('texto_info')
            cCao.classList.remove('texto_info_abre')
            cCao.classList.remove('animated', 'bounceOutDown')

        }, 1000)
        event.stopPropagation()
        event.preventDefault()

    } else {
        // se o texto não estiver aparecendo - ABRINDO - Quando clica para abrir
        cCao.classList.add('texto_info_abre')
        cCao.classList.remove('texto_info')
        cCao.classList.add('animated', 'bounceInDown')
        setTimeout(() => {
            cCao.classList.remove('animated', 'bounceOutDown')
        }, 1000)
        event.stopPropagation()
        event.preventDefault()
    }
}

// coelho
function abreCardCoelho(event) {
    if (cCoelho.classList.contains('texto_info_abre')) {
        // se o texto estiver aparecendo - SAINDO - Quando clica para fechar
        cCoelho.classList.remove('animated', 'bounceInDown')
        cCoelho.classList.add('animated', 'bounceOutDown')

        setTimeout(() => {
            cCoelho.classList.add('texto_info')
            cCoelho.classList.remove('texto_info_abre')
            cCoelho.classList.remove('animated', 'bounceOutDown')

        }, 1000)
        event.stopPropagation()
        event.preventDefault()

    } else {
        // se o texto não estiver aparecendo - ABRINDO - Quando clica para abrir
        cCoelho.classList.add('texto_info_abre')
        cCoelho.classList.remove('texto_info')
        cCoelho.classList.add('animated', 'bounceInDown')
        setTimeout(() => {
            cCoelho.classList.remove('animated', 'bounceOutDown')
        }, 1000)
        event.stopPropagation()
        event.preventDefault()
    }
}



// PAG ADOÇÃO

txtImg = document.getElementById("txt1")
txtImg = document.getElementById("txt2")
txtImg = document.getElementById("txt3")

function hover() {
    txtImg.classList.remove('text_img1')
}

function removeHover() {
    txtImg.classList.add('text_img1')
}