




/*var mymap = L.map('mapid').setView([4, -74], 3);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(mymap);*/


    var  OSM_URL  =  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';  
    var  OSM_ATTRIB  =  '&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';  
    var  osmLayer  =  L.tileLayer(OSM_URL,  {attribution:  OSM_ATTRIB});  

    var  WAQI_URL    =  "https://tiles.waqi.info/tiles/usepa-pm25/{z}/{x}/{y}.png?token=GpTFzOAvLc8xt4Xl2E26XkoAVVWtpm38D8h5FedX";  
    var  WAQI_ATTR  =  'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';  
    var  waqiLayer  =  L.tileLayer(WAQI_URL,  {attribution:  WAQI_ATTR});  

    var  map  =  L.map('mapid').setView([4,  -74],  3);  
    map.addLayer(osmLayer).addLayer(waqiLayer); 


    const parametro1 ="";
    const parametro2 ="";
    const parametro3 ="";

   /* let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=GpTFzOAvLc8xt4Xl2E26XkoAVVWtpm38D8h5FedX";
    
    const xhr =new XMLHttpRequest();
    //Abrimos conexion
    xhr.open('GET', url, true);
    //Impresion de los datos
    xhr.onload = function(){
      if(this.status === 200)
      {
        console.log(this.responseText);
      }
    }
    xhr.send();*/

  
    