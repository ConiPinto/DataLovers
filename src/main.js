const rootContainer = document.getElementById('root');
const showAll = (STEAM.appnews.newsitems);
const selectByTitle = document.getElementById("btnfilter");
const orderBy = document.getElementById("btnorder")
	
const showData = (showAll) => { 
let result = '';
	  showAll.forEach(element => {
	  if (element.author === '' && element.feedlabel !== '') {
	    result = rootContainer.innerHTML += `
	    <div>
	    <div class='card'>
	    <div class='box'>
	    <h4>${element.title}</h4>
	    </div>
			<h6><span>Autor: Without author</span></h6>
			<h6>Feed Label: ${element.feedlabel}</h6>
			<h6>${element.appid}</h6>
	    </div>
	    </div>
	    </div>`
	  } else {
	    result = rootContainer.innerHTML += `
	    <div>
	    <div class='card'>
			<div class='box'>
			<h4>${element.title}</h4>
	    </div>
			<h6><span>${element.author}</span></h6>
			<h6>Feed Label: ${element.feedlabel}</h6>
			<h6>${element.appid}</h6>
	    </div>
	    </div>
	    </div>` 
	  }
	  });
return result;
}
window.onload = showData(showAll);



