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
<title>FIDO U2F Works</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 <link rel="stylesheet" href="${pageContext.request.contextPath}/jsp_folder/css/webglbook.css" />
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/Three.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/RequestAnimationFrame.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/Tween.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery-1.6.4.js"></script>
     <script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery.mousewheel.js"></script>
	<script src="${pageContext.request.contextPath}/jsp_folder/libs/sim.js"></script>
	<script src="${pageContext.request.contextPath}/jsp_folder/sim/animation.js"></script>
	<script src="${pageContext.request.contextPath}/jsp_folder/js/myU2F.js"></script>

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
	<center><h1>HOẠT ĐỘNG FIDO U2F</h1>
	<h3>Giao thức xác thực hai yếu tố</h3>
<%-- 	<h2><a href="${pageContext.request.contextPath}/FIDOu2fReg">Đăng ký tài khoản</a></h2>
	<br>
    <h2><a href="${pageContext.request.contextPath}/FIDOu2fauth">Xác thực tài khoản</a></h2> --%>
    
    <h4>Vui lòng chọn vào từng khối để xem hoạt động đăng ký hoặc xác thực tài khoản FIDO U2F!</h4>
	</center>
	
    <div id="container" style="width:100%; height:80%; position:absolute;">
    
    
    
    </div> 
			<div id="prompt" style="width:95%; height:6%; bottom:0; text-align:center; position:absolute;">
	<a href="${pageContext.request.contextPath}/">Trang chủ</a> | <a href="${pageContext.request.contextPath}/Fidou2f">Làm mới</a>
	</div>

</body>
</html>