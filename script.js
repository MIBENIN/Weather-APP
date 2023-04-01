const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '16455c848dmsh78c2bd48b9ece90p126008jsn9fb9d59c86d6',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
let userSearch=document.getElementById("userSearchInput");
let submitBtn=document.getElementById("btn");
let weatherIn=document.getElementById("weather");
let temperature=document.getElementById("temp");
let minTemperature=document.getElementById("minTemp");
let maxTemperature=document.getElementById("maxTemp");
let searchedCity=document.getElementById("searchedCity");
let country=document.getElementById("country");

const getWeatherData =async(City) => {
	try{
		const response=await fetch(`https://open-weather13.p.rapidapi.com/city/${City}`,options);
        const weatherData=await response.json();
		showWeatherData(weatherData);
	}
	catch(error){
		console.log(error)
	}
};	

submitBtn.onclick=()=>{
    let City=userSearch.value;
	console.log(City)
	getWeatherData(City);
}

const showWeatherData=(weatherData)=>{
	searchedCity.innerHTML=weatherData.name;
    weatherIn.innerHTML=weatherData.weather[0].main;
	temperature.innerHTML=weatherData.main.temp;
	maxTemperature.innerHTML=weatherData.main.temp_max;
	minTemperature.innerHTML=weatherData.main.temp_min;
	country.innerHTML=weatherData.sys.country;
}



