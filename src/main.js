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
	    <h2>${element.title}</h2>
	    </div>
			
			<h3>Autor: Without author</h3>
			<p>Feed Label: ${element.feedlabel}</p>
			<h6>${element.appid}</h6>
			
	    </div>
	    </div>
	    </div>`
	  } else {
	    result = rootContainer.innerHTML += `
	    <div>
	    <div class='card'>
			<div class='box'>
			<h2>${element.title}</h2>
	    </div>
			
			<h3>${element.author}</h3>
			<p>Feed Label: ${element.feedlabel}</p>
			<h6>${element.appid}</h6>
			
	    </div>
	    </div>
	    </div>` 
	  }
	  });
return result;
}

window.onload = showData(showAll);
