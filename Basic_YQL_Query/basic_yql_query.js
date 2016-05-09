var weatherStn = "KDEN";
$.ajax({
   url:"http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fw1.weather.gov%2Fxml%2Fcurrent_obs%2F"+weatherStn+".xml'&amp;format=json&amp;diagnostics=true&amp;callback=",
   dataType : 'json',                
   success: function(data){
      var c = data.query.results.current_observation;
      document.write("The temperature at "+c.location+" is " + c.temperature_string);
   }                
});