var urlAPI = "http://www.omdbapi.com/?apikey=141cc9d0&t=" //+"t=Frozen"

//let var (es local a este archivo)

function infoMovie(url,string,titleId,imageId,descriptionId,yearId,ratingId){
    var request = new XMLHttpRequest();
    request.open('GET',url + string,true);
    request.onload = function(){
        var data = JSON.parse(this.response);
        console.log(data)
        document.getElementById(titleId).innerHTML=data.Title
        document.getElementById(imageId).src=data.Poster
        document.getElementById(descriptionId).innerHTML=data.Plot
        document.getElementById(yearId).innerHTML=data.Year
        document.getElementById(ratingId).innerHTML=data.Genre
    };
    request.send();
}

function holi(){
	x=document.getElementById("titleInput").value
	if(x!=""){
		infoMovie(urlAPI,x,"titleMoviex","imagex","descripcionx","yearx","genrex")
	}
}

var string="interstellar"
infoMovie(urlAPI,string,"titleMovie1","image1","descripcion1","None","None")
string="shrek"
infoMovie(urlAPI,string,"titleMovie2","image2","descripcion2","None","None")
string="titanic"
infoMovie(urlAPI,string,"titleMovie3","image3","descripcion3","None","None")
string="superman"
infoMovie(urlAPI,string,"titleMovie4","image4","descripcion4","None","None")
string="inside out"
infoMovie(urlAPI,string,"titleMovie5","image5","descripcion5","None","None")

string="frozen"
infoMovie(urlAPI,string,"titleMoviex","imagex","descripcionx","yearx","genrex")
