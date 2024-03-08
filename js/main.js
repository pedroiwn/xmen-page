const personagens = document.querySelectorAll('.personagem');


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // Remove a seleção do personagem
        // removerSelecaoDoPersonagem();


        personagem.classList.add('selecionado');

        // Alterar imagem do personagem grande
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;

        // Alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');


        // Alterar a descrição do personagem Grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})

// function removerSelecaoDoPersonagem() {
//     const personagemSelecionado = document.querySelector('.selecionado');
//     personagemSelecionado.classList.remove('selecionado');
// }
