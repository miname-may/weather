

		const COORDS = "coords";
		const API_KEY = "aadb6c3af3c2ef08af264e2f6d815498";
		
		function getWeather(lat, lng) {
			fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + API_KEY + "&units=metric"
					).then(function(response) {	/* then = 앞의 fetch 실행 후 실행 */
						return response.json();
					}).then(function(json) {
						console.log(json);
					})
		}
		
		function saveCoords(coordsObj) {
			localStorage.setItem(COORDS, JSON.stringify(coordsObj));
		}
		
		function loadCoords() {
			const loadedCoords = localStorage.getItem(COORDS);
			if(loadedCoords === null){
				askForCoords();
			}else{
//				getWeather
				const parseCoords = JSON.parse(loadCoords);
				getWeather(parseCoords.latitude, parseCoords.longitude);
			}
		}
		
		function handleGeoSucces(position) {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			const coordsObj = {	/* 좌표 저장 */
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
		