<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
		<title>FIDO UAF Works</title>
		<link rel="stylesheet" href="${pageContext.request.contextPath}/jsp_folder/css/webglbook.css" />
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/Three.js"></script>
<!-- 		<script src='http://mrdoob.github.com/three.js/build/three.min.js'></script> -->
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/RequestAnimationFrame.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/Tween.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery-3.2.1.min.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery.mousewheel.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/libs/sim.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/sim/animation.js"></script>
		<script src="${pageContext.request.contextPath}/jsp_folder/js/uafauth.js"></script>
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
			<h1>XÁC THỰC TÀI KHOẢN FIDO UAF</h1>
			<h3>Giao thức xác thực không cần mật khẩu</h3>
			<h4>Vui lòng chọn biểu tượng<img style="width: 40px;height: 40px;" alt="" src="${pageContext.request.contextPath}/jsp_folder/images/PlayButton1.png">để bắt đầu</h4>
		</div>
   		<div id="container" style="width:95%; height:80%; position:absolute;"></div>
   		<div id="prompt" style="width:95%; height:6%; bottom:0; text-align:center; display:none">
			<div class="contentarea">
			    <h1>
			       Chụp ảnh để xác thực tài khoản 
			    </h1>
			    <div class="camera" style="text-align:center">
			        <video id="video">Video stream not available.</video>
			        <img style="display:none" id="photo" height="280" width="320" src="${pageContext.request.contextPath}/jsp_folder/images/facewomen.png"/>
			        <br/>
			        <button id="startbutton">Chụp ảnh</button>
			    </div>
			    <canvas id="canvas" style="display:none"></canvas>
			</div>
		</div>
		<div id="prompt2" style="width:95%; height:6%; bottom:0; text-align:center; display:none">
			<div class="contentarea">
			    <h1>
			        So sánh với ảnh đã đăng ký  
			    </h1>
			    <div style="text-align:center">
					<img id="photox1" height="240" width="320" />
					<img id="photox2" height="240" width="320" />
			    </div>
			</div>
		</div>
		
		<div id="prompt" style="width:95%; height:6%; bottom:0; text-align:center; position:absolute;">
	<a href="${pageContext.request.contextPath}/">Trang chủ</a> | <a href="${pageContext.request.contextPath}/FIDOuafauth">Làm mới</a>
	</div>
	</body>
	<script>
	var iid = 0;//capture times
	function init() {
        // The width and height of the captured photo. We will set the
        // width to the value defined here, but the height will be
        // calculated based on the aspect ratio of the input stream.
		var permission =false;
        var width = 320;    // We will scale the photo width to this
        var height = 0;     // This will be computed based on the input stream

        // |streaming| indicates whether or not we're currently streaming
        // video from the camera. Obviously, we start at false.

        var streaming = false;

        // The various HTML elements we need to configure or control. These
        // will be set by the startup() function.

        var video = null;
        var canvas = null;
        var photo = null;
        var startbutton = null;

        function startup() {
            video = document.getElementById('video');
            canvas = document.getElementById('canvas');
            //photo = document.getElementById('photo');
            startbutton = document.getElementById('startbutton');

            navigator.getMedia = (navigator.getUserMedia ||
                                   navigator.webkitGetUserMedia ||
                                   navigator.mozGetUserMedia ||
                                   navigator.msGetUserMedia);

            navigator.getMedia(
              {
                  video: true,
                  audio: false
              },
              function (stream) {
                  if (navigator.mozGetUserMedia) {
                      video.mozSrcObject = stream;
                  } else {
                      var vendorURL = window.URL || window.webkitURL;
                      video.src = vendorURL.createObjectURL(stream);
                  }
                  video.play();
                  permission = true;
              },
              function (err) {
                  console.log("An error occured! " + err);
                  $("#photo").css('display', 'unset');
                  $("#video").css('display', 'none');
                  $("#startbutton").text("Sử dụng ảnh mẫu");
                  localStorage.setItem('localImg', "${pageContext.request.contextPath}/jsp_folder/images/facewomen.png");
              }
            );

            video.addEventListener('canplay', function (ev) {
                if (!streaming) {
                    height = video.videoHeight / (video.videoWidth / width);

                    // Firefox currently has a bug where the height can't be read from
                    // the video, so we will make assumptions if this happens.

                    if (isNaN(height)) {
                        height = width / (4 / 3);
                    }

                    video.setAttribute('width', width);
                    video.setAttribute('height', height);
                    canvas.setAttribute('width', width);
                    canvas.setAttribute('height', height);
                    streaming = true;
                }
            }, false);

            startbutton.addEventListener('click', function (ev) {
                takepicture();
                ev.preventDefault();
            }, false);

            clearphoto();
        }
        startup();

        // Fill the photo with an indication that none has been
        // captured.

        function clearphoto() {
            var context = canvas.getContext('2d');
            context.fillStyle = "#AAA";
            context.fillRect(0, 0, canvas.width, canvas.height);

            var data = canvas.toDataURL('image/png');
            //photo.setAttribute('src', data);
        }

        // Capture a photo by fetching the current contents of the video
        // and drawing it into a canvas, then converting that to a PNG
        // format data URL. By drawing it on an offscreen canvas and then
        // drawing that to the screen, we can change its size and/or apply
        // other changes before drawing it.

        function takepicture() {
        	if(permission){
        		var key = 'localImg2';
        		var context = canvas.getContext('2d');
	            if (width && height) {
	                canvas.width = width;
	                canvas.height = height;
	                context.drawImage(video, 0, 0, width, height);

	                var data = canvas.toDataURL('image/png');
	                //photo.setAttribute('src', data);
	                localStorage.setItem(key, data);
	        		$('#prompt').css('display', 'none');
	        		$('#container').css('display', 'block');
	        		$('#container').css('position', 'absolute');
	        		setImageToIcon(localStorage.getItem('localImg2'));
	        		controls[3].control.moving(steps[step].to);
	        		console.log('step: '+step);
	        		step=step+1;
	        		setTimeout(function(){goSteps2();},2000)
	        		
	            } else {
	                clearphoto();
	            }   
        	}else{
        		$('#prompt').css('display', 'none');
        		$('#container').css('display', 'block');
        		$('#container').css('position', 'absolute');
                setImageToIcon(localStorage.getItem('localImg'));
                controls[3].control.moving(steps[step].to);
        		step=step+1;
        		setTimeout(function(){goSteps2();},2000)
        	}
        }

        // Set up our event listener to run the startup process
        // once loading is complete.
        /* window.addEventListener('load', startup, false); */
    };
	</script>	
</html>