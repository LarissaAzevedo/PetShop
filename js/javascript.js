// Definição de variáveis
cGato = document.getElementById("gato")
cHamster = document.getElementById("hamster")
cPassaro = document.getElementById("passaro")
cPeixe = document.getElementById("peixe")
cCao = document.getElementById("cao")

cCard = document.getElementById("card")

// chamada do texto - página de informações
function abreCard(event){
    cCard.classList.add('texto_info_abre')
    cCard.classList.remove('texto_info')
    cCard.classList.add('animated','bounceInDown')
    event.preventDefault()

}