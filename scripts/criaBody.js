const criaBody = (outputContainer, meanings) => {
  meanings.map((objeto, index) => {
    const { partOfSpeech, definitions } = objeto;
    outputContainer.innerHTML += `<section class="card_definicao">
    <p class="title">${partOfSpeech}</p>
    <p class="subtitle">Meaning</p>
    <ul class="lista_significados">
      
    </ul>
  </section>`;

    //todo Escrevendo os significados no container correspondente --

    const listaSignificados = document.querySelectorAll('.lista_significados');

    console.log(partOfSpeech, definitions);
    for (let i = 0; i < definitions.length && i < 5; i++) {
      console.log(definitions.length);
      const { definition } = definitions[i];
      console.log(definition);

      listaSignificados[index].innerHTML += `<li>${definition}</li>`;
    }
  });
};
export default criaBody;
