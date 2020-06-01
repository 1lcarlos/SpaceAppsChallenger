 (function(w,d,t,f){  w[f]=w[f]||function(c,k,n){s=w[f],k=s['k']=(s['k']||(k?('&k='+k):''));s['c']=  
 c=(c  instanceof  Array)?c:[c];s['n']=n=n||0;L=d.createElement(t),e=d.getElementsByTagName(t)[0];  
 L.async=1;L.src='//feed.aqicn.org/feed/'+(c[n].city)+'/'+(c[n].lang||'')+'/feed.v1.js?n='+n+k;  
 e.parentNode.insertBefore(L,e);  };  })(  window,document,'script','_aqiFeed'  ); 

 /*$('#ciudades').click(function ciudad() {//selecciono el id:ciudades para que me ejecute la siguiente funcion

    var ciudad = document.getElementById("ciudad").value;//tomo el valor del input		
    console.log(ciudad);

    _aqiFeed({  container:"city-aqi-container1",  city:ciudad,  lang:"es",callback:function(aqi){  
    $("#city-aqi-container2").html(aqi.details); 
    console.log(aqi.details); 
  }  });

}); */





var  cities  =  ["bogota", "kanpur",   "temuco"];
 
  
var  aqiWidgetConfig  =  [];    
cities.forEach(function(city){
  aqiWidgetConfig.push({city:city, lang:"es", callback:  displayCity}); 
 });  
  

 _aqiFeed(aqiWidgetConfig);  
  
function  displayCity(aqi)  {  
  $("#city-aqi-container1").append(aqi.text("<center>%details</center>"));  
  
}
//_aqiFeed(aqiWidgetConfig);  

/*var  cities1  =  ["shanghai",  "paris","hongkong"]; 
_aqiFeed(aqiWidgetConfig)
var  aqiWidgetConfig1  =  [];    
cities1.forEach(function(city)  {  aqiWidgetConfig1.push({city:city, lang:"es", callback:  displayCity});  });  

 
/*function  displayCity1(aqi)  {  
  $("#city-aqi-container2").append(aqi.text("<center>%details</center>"));  
}*/


$('#ciudades1').click(function ciudad() {//selecciono el id:ciudades para que me ejecute la siguiente funcion

  var ciudad = document.getElementById("ciudad1").value;//tomo el valor del input		
  console.log(ciudad);

  /*_aqiFeed({  container:"city-aqi-container1",  city:ciudad,  lang:"es",callback:function(aqi){  
  $("#city-aqi-container2").html(aqi.details); 
  console.log(aqi.details); 
}  });*/

}); 
