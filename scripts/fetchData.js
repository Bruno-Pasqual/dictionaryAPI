const fetchData = async (palavra) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`;

  //---
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('deu merda');
  }
};

/* fetchData().then((data) => {
  console.log(data);
}); */

export default fetchData;
