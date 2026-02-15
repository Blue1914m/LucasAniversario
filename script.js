var img = document.createElement('img')
    img.setAttribute('id', 'foto')

function abrirModal(){
    document.getElementById("overlay").style.display = "flex";
}

function fecharModal() {
    document.getElementById("overlay").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("texto").innerHTML =
    "Parabéns, seu ser banido do Galaxy há eras incontáveis. Hoje o universo inteiro comemora o dia em que surgiu essa entidade caótica, o único indivíduo capaz de ser ao mesmo tempo uma lenda, um problema e um patrimônio histórico do nosso grupo. Mesmo exilado, seu nome ainda ecoa pelos confins da lore, gravado como o eterno símbolo do pentagrama e das decisões duvidosas. Que seu dia seja tão aleatório quanto suas ideias, tão memorável quanto suas pérolas e tão único quanto você — porque convenhamos, não existe outro com o mesmo nível de energia questionável. Feliz aniversário, seu ícone intergaláctico. O Galaxy pode até ter te banido, mas jamais apagará seu legado duvidosamente glorioso."
    
    document.getElementById("kashimo").style.display = "block";
}