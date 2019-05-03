var urlAPI = "http://www.omdbapi.com/?apikey=141cc9d0&t=" //+"t=Frozen"

//let var (es local a este archivo)

function infoMovie(url,string,titleId,imageId,descriptionId,yearId,genreId,directorId){
    //console.log(string)
    var request = new XMLHttpRequest();
    request.open('GET',url + string,true);
    request.onload = function(){
        var data = JSON.parse(this.response);
        console.log(data)
        //console.log("#"+data.Title+"#")
        if(data.Title=="undefined" || data.Title==null){
            document.getElementById(titleId).innerHTML="Error"
            document.getElementById(imageId).src="undefined.jpg"
            document.getElementById(descriptionId).innerHTML="Puede que la internet haya fallado o no haya encontrado una pelicula con ese nombre."
            document.getElementById(yearId).innerHTML=""
            document.getElementById(genreId).innerHTML=""
            document.getElementById(directorId).innerHTML=""
        }
        else{
            document.getElementById(titleId).innerHTML=data.Title
            document.getElementById(imageId).src=data.Poster
            if(descriptionId!="None"){
                document.getElementById(descriptionId).innerHTML=data.Plot
            }
            if(yearId!="None"){
                document.getElementById(yearId).innerHTML=data.Year
            }
            if(genreId!="None"){
                document.getElementById(genreId).innerHTML=data.Genre
            }
            document.getElementById(directorId).innerHTML=data.Director
        }
            
    };
    request.send();
}

function holi(){
	x=document.getElementById("titleInput").value
	if(x!=""){
		infoMovie(urlAPI,x,"titleMoviex","imagex","descripcionx","yearx","genrex","directorx")
	}
}

var string="interstellar"
infoMovie(urlAPI,string,"titleMovie1","image1","None","None","None","director1")
string="shrek"
infoMovie(urlAPI,string,"titleMovie2","image2","None","None","None","director2")
string="titanic"
infoMovie(urlAPI,string,"titleMovie3","image3","None","None","None","director3")
string="superman"
infoMovie(urlAPI,string,"titleMovie4","image4","None","None","None","director4")
string="inside out"
infoMovie(urlAPI,string,"titleMovie5","image5","None","None","None","director5")

string="frozen"
infoMovie(urlAPI,string,"titleMoviex","imagex","None","yearx","genrex","directorx")
