<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
	<head>
	<style type="text/css">
	a {
    color: #00f;
}
p, a span {
    color: #000;
}
	</style>
		<title>FIDO U2F</title>
		<link rel="stylesheet" href="${pageContext.request.contextPath}/jsp_folder/css/webglbook.css" />
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/Three.js"></script>
<!-- 		<script src='http://mrdoob.github.com/three.js/build/three.min.js'></script> -->
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/RequestAnimationFrame.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/Tween.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery-3.2.1.min.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery.mousewheel.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/sim.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/sim/animation.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/js/h2u2.js"></script>
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>  -->
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<%-- 			<link rel="stylesheet" href="${pageContext.request.contextPath}/jsp_folder/css/bootstrap.min.css"> --%>
<%-- 			<script src="${pageContext.request.contextPath}/jsp_folder/js/jquery.min.js"></script> --%>
<%-- 			<script src="${pageContext.request.contextPath}/jsp_folder/js/bootstrap.min.js"></script> --%>

		<script>
			var renderer = null;
			var scene = null;
			var camera = null;
			var mesh = null;
			var light = null;

			$(document).ready(
					function() {
						var container = document.getElementById("container");
						var app = new H2U1Controller();
						app.init({ container: container });
						app.run();
					}
				);
		</script>
	</head>	
	<body>
		<div style="text-align:center">
			<h1>CÁCH SỬ DỤNG FIDO U2F</h1>
			<h3>Giao thức xác thực hai yếu tố</h3>
			<!-- <button onClick="showSteps()">Vui lòng nhấp chọn vào đây để bắt đầu</button> -->
			
			<a href="${pageContext.request.contextPath}/"><img style="width: 50px;height: 50px;" alt="" src="${pageContext.request.contextPath}/jsp_folder/images/home.png" >  </a>&nbsp;
			<img style="width: 50px;height: 50px;" alt="" src="${pageContext.request.contextPath}/jsp_folder/images/Play1Hot.png" onclick="showSteps();"> &nbsp;
		<a href="${pageContext.request.contextPath}/h2uU2F"><img style="width: 50px;height: 50px;" alt="" src="${pageContext.request.contextPath}/jsp_folder/images/reload.png" >  </a>
		
			
		</div>
   		<div id="container" style="width:100%; height:80%; position:absolute;"></div>
		
		<div id="prompt" style="width:100%; height:6%; bottom:0; text-align:center; position:absolute;">
	<a href="${pageContext.request.contextPath}/">Trang chủ</a> | <a href="${pageContext.request.contextPath}/h2uU2F">Làm mới</a>
	</div>
	</body>
</html>