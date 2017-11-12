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
body {
    background-color: #ffffff !important;
}
	</style>
		<title>FIDO U2F Authentication</title>
		<link rel="stylesheet" href="${pageContext.request.contextPath}/jsp_folder/css/webglbook.css" />
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/Three.js"></script>
<!-- 		<script src='http://mrdoob.github.com/three.js/build/three.min.js'></script> -->
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/RequestAnimationFrame.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/Tween.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery-3.2.1.min.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery.mousewheel.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/sim.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/sim/animation.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/js/u2fauth.js"></script>
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
						var app = new U2FController();
						app.init({ container: container });
						app.run();
					}
				);
		</script>
	</head>	
	<body>
		<div style="text-align:center">
			<h1>XÁC THỰC TÀI KHOẢN FIDO U2F</h1>
			<h3>Giao thức xác thực hai yếu tố</h3>
			<h4>Vui lòng chọn biểu tượng<img style="width: 40px;height: 40px;" alt="" src="${pageContext.request.contextPath}/jsp_folder/images/PlayButton1.png">để bắt đầu</h4>
		</div>
   		<div id="container" style="width:100%; height:80%; position:absolute;"></div>
   		<div id="prompt" style="width:95%; height:6%; bottom:0; text-align:center; display:none">
			<div class="contentarea">
			    <h1>
			        Get photo for register 
			    </h1>
			    <div class="camera" style="text-align:center">
			        <video id="video">Video stream not available.</video>
			        <img style="display:none" id="photo" height="280" width="320" src="${pageContext.request.contextPath}/jsp_folder/images/facewomen.png"/>
			        <br/>
			        <button id="startbutton">Take photo</button>
			    </div>
			    <canvas id="canvas" style="display:none"></canvas>
			</div>
		</div>
		<div id="prompt2" style="width:95%; height:6%; bottom:0; text-align:center; display:none">
			<div class="contentarea">
			    <h1>
			        Compare with registered one  
			    </h1>
			    <div style="text-align:center">
					<img id="photox1" height="240" width="320" />
					<img id="photox2" height="240" width="320" />
			    </div>
			</div>
		</div>
		
		<div id="prompt" style="width:100%; height:6%; bottom:0; text-align:center; position:absolute; padding-top: 10px;">
	<a href="${pageContext.request.contextPath}/">Trang chủ</a> | <a href="${pageContext.request.contextPath}/FIDOu2fReg">Làm mới</a>
	</div>
	</body>
</html>