import fetchData from './fetchData.js';
import alteraOutput from './alteraOutput.js';

const realizaPesquisa = () => {
  const palavraPesquisada = document.querySelector('#wordInput').value;
  console.log(palavraPesquisada);

  fetchData(palavraPesquisada).then((data) => {
    alteraOutput(data);
  });
};

export default realizaPesquisa;
