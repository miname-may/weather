<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" contentType="text/html; charset=UTF-8"%>

<!DOCTYPE html>
<html>
<head>
	<title>우리 동네 날씨 알리미</title>
	<link rel="icon" href="./resources/images/weatherFavicon.png"> 
	<link rel="stylesheet" href="./resources/css/weather.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>
<body>
<div id="bodyDiv">
		<div id="title">
			<h1>오늘의 우리 동네 날씨는?</h1>
		</div>
	<div id="contents">
		<p id="weather-img"></p>
		<p id="mainWeather">오늘은 <span id="weather"></span></p>
		<p id="temp"></p>
		<p><span id="min-temp"></span> /
		<span id="max-temp"></span></p>
		<p id="wind"></p>
		<p id="clouds"></p>
	</div>
	
</div>
</body>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
	<script type="text/javascript" src="./resources/js/weather.js"></script>
</html>
