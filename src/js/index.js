const personagens = document.querySelectorAll(".personagem");

const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarpersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});
function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}