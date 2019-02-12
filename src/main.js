const rootContainer = document.getElementById('root');
const showAll = (STEAM.appnews.newsitems);
	

	
	
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
			
			<h5>Autor: Without author</h5>
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
			
			<h5>${element.author}</h5>
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
