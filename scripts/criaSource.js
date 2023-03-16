const criaSource = (url) => {
  const outputContainer = document.querySelector('.output_container');
  outputContainer.innerHTML += `<div class="source_container">
  <p class="source_title">Source</p>
  <div class="wrap_source">
    <p class="source_value">${url}</p>
    <img
      src="./assets/images/icon-new-window.svg"
      alt="new windows icon"
      class="source_icon"
    />
  </div>
</div>`;
};
export default criaSource;
