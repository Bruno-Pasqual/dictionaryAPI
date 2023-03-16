const existeAudio = (index) => {
  if (data[0].phonetics[index].audio) {
    return data[0].phonetics[index].audio;
  } else {
    return false;
  }
};
export default existeAudio;
