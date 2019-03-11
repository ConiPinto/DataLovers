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

//order

 const selectOrder = (showAll, condition) => {
  //console.log(condition);
  /* const sorted = showAll.sort((a, b) => (a[condition] > b[condition]) ? 1 : -1);
  return sorted; */

  
  if (condition === 'title1'){
    showAll.sort(function (a,b){
      if(a.title > b.title){
        return 1;
      }
      if (a.title < b.title){
        return -1;
      }
      return 0;
    });
  }else{
    showAll.sort(function (a,b){
      if(a.title < b.title){
        return 1;
      }
      if (a.title > b.title){
        return -1;
      }
      return 0;
    });
  }
return showAll;

 }
 window.selectOrder = selectOrder;

