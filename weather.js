   
        //Retrieve current date and time
function getCurrentDate(){
        var curDate=new Date();
        document.getElementById("showDate").innerHTML = curDate.toString();
        }

function getData(){

        getData.preventDefault;
        const apiurl = "http://api.openweathermap.org/data/2.5/weather?q=";
        const apikey = "&APPID=b81c4f92c241cdbffd910c8e91a15d98";
        var apicity = document.getElementById(`searchcity`).value;
        var url = apiurl + apicity + apikey;
                                
        $.ajax ({
        url: url,
        success: 

function(result){    

         /*Display relevant background image in dataoverlay
         var rawMain = (result.weather[0].main);
         if (rawMain == 'Rain') 
         {dataoverlay.style.backgroundImage = 'url(rain.jpg)'}
         else if (rawMain == 'Clear') 
         {dataoverlay.style.backgroundImage = 'url(clear.jpg)'}
         else if (rawMain == 'Snow') 
         {dataoverlay.style.backgroundImage = 'url(snow.jpg)'}
         else if (rawMain == 'Clouds') 
         {dataoverlay.style.backgroundImage = 'url(clouds.jpg)'}
         else if (rawMain == 'Extreme') 
         {dataoverlay.style.backgroundImage = 'url(extreme.jpg)'}
         else if (rawMain == 'Mist') 
         {dataoverlay.style.backgroundImage = 'url(mist.jpg)'}
         else {dataoverlay.style.backgroundcolor = 'black'}*/
                         
        //Reset search input box
        $('#searchcity').val('');
        
        //Display City
        let displayCity = `Location: ${result.name}`;
        $("#location").html(displayCity);
                
       //Display Temperature
        let F = Math.round(result.main.temp * (9/5) - 459.67);
        let displayTemp = `Temperature: ${F}&#176;`    
        $("#temperature").html(displayTemp);
        
        //Display Wind
        let windSpeed = Math.round(result.wind.speed /.44704);
        let windDirection = (result.wind.deg);
        let displaySpeed = `Wind Speed: ${windSpeed} Mph`;
        let displayDirection = `Wind Direction: ${windDirection}&#176`;
        $("#windspeed").html(displaySpeed);
        $("#winddirection").html(displayDirection);
        
        //Display Sky Conditions
        var rawSky = (result.weather[0].description);
        var capitalizeString = (str) => str[0].toUpperCase() + str.slice(1);
        var capitalizeWords = (str) => str.split(` `).map (capitalizeString).join(` `);
        var capitalSky = capitalizeWords(rawSky);
        let displaySky = `Sky Condition: ${capitalSky}`;        
        $("#sky").html(displaySky);
        
        //Display Pressure
        let rawPressure = (result.main.pressure / 33.863886666667);
        let displayPressure =`Pressure: ${rawPressure.toFixed(2)} in/Hg`;
            
        $("#pressure").html(displayPressure);
        
        }})}