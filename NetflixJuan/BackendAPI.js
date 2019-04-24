var urlAPI = "http://www.omdbapi.com/?apikey=141cc9d0&" //+"t=Frozen"

//let var (es local a este archivo)

function infoMovie(url,string){
	var request = new XMLHttpRequest();
	request.open('GET',url + string,true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		//console.log(data.Title,data.Year,data.Poster)
		document.getElementById("titleMovie").innerHTML=data.Title
		document.getElementById("titleYear").innerHTML=data.Year
		document.getElementById("image").src=data.Poster
	};
	request.send();
}

var string="t=frozen"
infoMovie(urlAPI,string)