//! Realizando importações de funções

import realizaPesquisa from './realizaPesquisa.js';
import fetchData from './fetchData.js';

//! Declarando variáveis globais

const iconePesquisa = document.querySelector('.search_icon');

//! Event Listeners

iconePesquisa.addEventListener('click', realizaPesquisa);
