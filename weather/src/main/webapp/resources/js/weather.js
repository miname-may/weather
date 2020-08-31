	var weatheris = document.querySelector(".js-weather");
	
	var COORDS = "coords";
	var API_KEY = "aadb6c3af3c2ef08af264e2f6d815498";
		
	function getWeather(lat, lng) {
		fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + API_KEY + "&units=metric&lang=kr"
				).then(function(response) {	/* then = 앞의 fetch 실행 후 실행 */
					return response.json();
				}).then(function(json) {
					var temperature = json.main.temp;
					var weather = json.weather[0].icon;
					
					document.querySelector("#temp").innerHTML = "현재 온도 <b>" + json.main.temp + "℃</b>";
					document.querySelector("#min-temp").innerHTML = "최저 온도 <b>" + json.main.temp_min + "℃</b>";
					document.querySelector("#max-temp").innerHTML = "최고 온도 <b>" + json.main.temp_max + "℃</b>";
					document.querySelector("#weather").innerHTML = "<b>" + json.weather[0].description + "</b>";
					document.querySelector("#wind").innerHTML = "바람 <b>" + json.wind.speed + "</b>m/s";
					document.querySelector("#clouds").innerHTML = "구름 <b>" + json.clouds.all + "</b>%";
					
					switch (json.weather[0].icon) {
					case "01d":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-day-sunny'></i>";
						break;
					case "01n":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-night-clear'></i>";
						break;
					case "02d":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-day-cloudy'></i>";
					case "02n":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-night-alt-cloudy'></i>";
						break;
					case "03d": case "03n":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-cloud'></i>";
						break;
					case "04d": case "04n":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-cloudy'></i>";
					console.log(json.weather[0].icon);
						break;
					case "09d": case "09n":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-rain'></i>";
						break;
					case "10d":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-day-rain'></i>";
						break;
					case "10n":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-night-alt-rain'></i>";
						break;
					case "11d": case "11n":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-lightning'></i>";
						break;
					case "13d": case "13n":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-snowflake-cold'></i>";
						break;
					case "50d": case "50n":	
						document.querySelector("#weather-img").innerHTML = "<i class='icon-img wi wi-fog'></i>";
						break;
					}
					
				})
	}
		
	function saveCoords(coordsObj) {
		localStorage.setItem(COORDS, JSON.stringify(coordsObj));
	}
	
	function loadCoords() {
		var loadedCoords = localStorage.getItem(COORDS);
		if(loadedCoords === null){
			askForCoords();
		}else{
//			getWeather
			const parseCoords = JSON.parse(loadCoords);
				getWeather(parseCoords.latitude, parseCoords.longitude);
		}
	}
		
	function handleGeoSucces(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var coordsObj = {	/* 좌표 저장 */
				latitude,
				longitude
		};
		saveCoords(coordsObj);
		getWeather(latitude, longitude);
	}

	function handleGeoError() {
		console.log('위치를 읽어올 수 없습니다.');
	}

	function askForCoords() {
		if('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
			} else {
			  alert('GPS를 지원하지 않습니다.');
			}
	}
	
	function init() {
		askForCoords();
	}
	init();
		