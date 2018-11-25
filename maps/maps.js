var btn;
var laton;
var logon;
var polygon;
var a1;
var a2;
var b1;
var b2;
var resultado;

var mymap = L.map('mapid').setView([51.505, -0.09], 8);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		    maxZoom: 18,
		    id: 'mapbox.streets',
		    accessToken: 'pk.eyJ1IjoicGFsYWRpbm9zc2F1cm9zIiwiYSI6ImNqb2U1aGo1aDB4MzYzcWxmN3lhZGh4b3gifQ.bP-ef5EUfDznMp77Os6zvg'
		}).addTo(mymap);

		navigator.geolocation.getCurrentPosition(f1);


     function f1(pos){
			
			var lat = pos.coords.latitude;
			var log = pos.coords.longitude;
			mymap.setView([lat,log],8)
			var marker = L.marker([lat, log]).addTo(mymap);
			a1 = lat;
			a2 = log;


			marker.bindPopup("Você está aqui!").openPopup();

		}

	function action(){
			btn = document.getElementById("btnson");
			btn.addEventListener("click", nemo);
		}

	function nemo(){
			laton = document.getElementById("Lati").value;
			logon = document.getElementById("Long").value;
			b1 = laton;
			b2 = logon;

			mymap.setView([laton, logon],8);
			marker = L.marker([laton, logon]).addTo(mymap);
			marker.bindPopup("Seu Destino!").openPopup();

			haversine();
						
		}

			function haversine(){
				polygon = L.polygon([
			   [a1, a2],
			   [b1, b2],			    
			]).addTo(mymap);

			var rad = 0.017453292519943295;
			var cos = Math.cos;
			a1 *= rad;
			a2 *= rad;
			b1 *= rad;
			b2 *= rad;
			var demo = 12742;
			var dlat = b1 - a1;
			var dlon = b2 - a2;
			var a = ( (1-cos(dlat))+ (1 - cos(dlon)) * cos(a1) * cos(b1))/2;
			resultado = (demo * Math.asin(Math.sqrt(a))).toFixed(3);


			polygon.bindPopup("" + resultado);



			
		}




action();