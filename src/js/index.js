const botoes = document.querySelectorAll('.botao')

const personagens = document.querySelectorAll(".personagem")



botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");

        personagens[indice].classList.add("selecionado")

        
    })
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelcionado = document.querySelector(".botao.selecionado");
    botaoSelcionado.classList.remove("selecionado");
}