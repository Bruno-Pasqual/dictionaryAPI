import existeAudio from './existeAudio.js';
import criaHead from './criaHead.js';
import criaBody from './criaBody.js';

const alteraOutput = (data) => {
  // Selecionando elementos no DOM ---
  const outputContainer = document.querySelector('.output_container');

  //todo Testa se a palavra procurada foi achada ou não

  if (data.title) {
    console.log('Não achou');
  } else {
    console.log('achou');
    console.log(data);

    //todo -- Definindo as variáveis do objeto que serão utilizadas

    //url
    const sourceUrl = data[0].sourceUrls[0];
    console.log(sourceUrl);

    //word, phonetic, meanings
    const { word, phonetic, meanings } = data[0];

    //audio
    const audio = data[0].phonetics[0].audio
      ? data[0].phonetics[0].audio
      : false;
    console.log(`O audio ${data[0].phonetics[0].audio}`);
    console.log(audio);

    //! Container definição ---- body
    criaHead(outputContainer, word, phonetic);
    criaBody(outputContainer, meanings);

    console.log(meanings);
  }
};

export default alteraOutput;

//! Estava ajeitando as mensagens dos significados dentro do seu container. As mesmas não estavam com a formatação correta, o CSS precisa ser corrigido.
