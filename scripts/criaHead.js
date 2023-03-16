const criaHead = (outputContainer, word, pronunciation, audio) => {
  outputContainer.innerHTML += ` <section class="head_definicao">
  <div class="lado_esquerdo">
    <h2 class="palavra_pesquisada">${word}</h2>
    <p class="pronuncia_palavra">${pronunciation ? pronunciation : '--'}</p>
  </div>
  <img class="play_sound_icon" src="./assets/images/icon-play.svg" alt="" />
</section>`;
};

export default criaHead;
