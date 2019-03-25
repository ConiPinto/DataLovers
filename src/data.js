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

 const average = showAll => {
  let calc = showAll.reduce((acum, element) => {
    return acum + element.level;
  }, 0);
  return calc / 10;
};

/*const computerStats = (showAll,condition) =>{
let counter = 0; 
showAll.forEach(element => {
  if(element.author.includes(condition)){
    counter=counter+1;

  }
  
});
return Math.round((counter/10)*100) + "%";
// al counter se le pasa la regla 3 para sacar el porcentaje y después se redondea con el math.round al número que está más cerca
 }; */

 window.filterAuthor = filterAuthor;
 window.selectOrder = selectOrder;
 //window.computerStats = computerStats;
 window.average = average;






