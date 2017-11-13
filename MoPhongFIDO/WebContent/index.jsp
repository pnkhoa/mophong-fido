<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>FIDO Graphic</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 <link rel="stylesheet" href="${pageContext.request.contextPath}/jsp_folder/css/webglbook.css" />
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/Three.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/RequestAnimationFrame.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/Tween.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery-1.6.4.js"></script>
     <script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery.mousewheel.js"></script>
	<script src="${pageContext.request.contextPath}/jsp_folder/libs/sim.js"></script>
	<script src="${pageContext.request.contextPath}/jsp_folder/sim/animation.js"></script>
<script src="${pageContext.request.contextPath}/jsp_folder/js/myFIDO.js"></script>

<style type="text/css">
body {
    background-color: #ffffff !important;
}
</style>
	<script>

	var renderer = null;
	var scene = null;
	var camera = null;
	var mesh = null;
	
	$(document).ready(
			function() {
				var container = document.getElementById("container");
				var app = new MyApp();
				app.init({ container: container });
				app.run();
			}
		);

	</script>
     <script type="text/javascript">
			var pathroot = '${pageContext.request.contextPath}';
	</script>
</head>
<body>
<div style="text-align: center;">
<h1>HỆ THỐNG MÔ PHỎNG GIẢI PHÁP KỸ THUẬT FIDO</h1>
<h3>Hệ thống sử dụng hình ảnh minh họa 2D hoặc 3D để mô phỏng lại toàn bộ hoạt động của giải pháp kỹ thuật FIDO.</h3>
<h4>Vui lòng chọn vào từng khối bên dưới để xem mô phỏng.</h4>
<%-- <br>
<a href="${pageContext.request.contextPath}/Home1">Click here to view FIDO Graphic </a> --%>
<br>



<%-- <h3>
<a style= "color: blue;" href="${pageContext.request.contextPath}/Whatis">FIDO là gì? </a>
</h3>
<h3>
<a style= "color: blue;" href="${pageContext.request.contextPath}/Howuse">Cách sử dụng FIDO? </a>
</h3>
<h3>
<a style= "color: blue;" href="${pageContext.request.contextPath}/Fidowork">FIDO hoạt động như thế nào? </a>
</h3> --%>
<div id="container" style="width:95%; height:80%; position:absolute;"></div>
		 	<div id="prompt" style="width:95%; height:6%; bottom:0; text-align:center; position:absolute;">
	<a href="https://goo.gl/abPFMc" target="_blank">Vui lòng thực hiện khảo sát hệ thống mô phỏng sau khi xem xong hệ thống. Xin chân thành cảm ơn!</a>
	</div> 
</div>
</body>
</html>