// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/


//filter

const filterAuthor = (showAll, condition) => {
  
  const filteredAuthor= showAll.filter(element => {
      return element.author === condition
  })
  return filteredAuthor;
 }
 window.filterAuthor = filterAuthor;


