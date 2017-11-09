<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<title>Welcome to WebGL</title>
 <script>var path = "${pageContext.request.contextPath}"; </script>
 <link rel="stylesheet" href="${pageContext.request.contextPath}/jsp_folder/css/webglbook.css" />
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/Three.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/RequestAnimationFrame.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/Tween.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery-1.6.4.js"></script>
     <script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery.mousewheel.js"></script>
	<script src="${pageContext.request.contextPath}/jsp_folder/libs/sim.js"></script>
	<script src="${pageContext.request.contextPath}/jsp_folder/js/Mytween.js"></script>
	
		<script>

	var renderer = null;
	var scene = null;
	var camera = null;
	var mesh = null;
	
	$(document).ready(
		function() {
			var container = document.getElementById("container");
			var app = new TweenApp();
			app.init({ container: container });
			app.run();
		}
	);
	

	</script>
	
</head>
<body  style="">
 <center><h1>Welcome to FIDO!</h1></center>
 <div id="container"
 style="width:95%; height:80%; position:absolute;">
 </div>
 <div id="prompt"
 style="width:95%; height:6%; bottom:0; position:absolute;">
 Click to animate the cube
 </div>
</body>
</html>