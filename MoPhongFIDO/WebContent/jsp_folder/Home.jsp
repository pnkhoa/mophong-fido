<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<title>What is FIDO</title>
 <link rel="stylesheet" href="${pageContext.request.contextPath}/jsp_folder/css/webglbook.css" />
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/Three.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/RequestAnimationFrame.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/Tween.js"></script>
 <script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery-3.2.1.min.js"></script>
     <script src="${pageContext.request.contextPath}/jsp_folder/libs/jquery.mousewheel.js"></script>
	<script src="${pageContext.request.contextPath}/jsp_folder/libs/sim.js"></script>
	<script src="${pageContext.request.contextPath}/jsp_folder/sim/animation.js"></script>
	<script src="${pageContext.request.contextPath}/jsp_folder/js/interaction-simple2.js"></script>
	
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>  -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	
<%-- 	 <link rel="stylesheet" href="${pageContext.request.contextPath}/jsp_folder/css/bootstrap.min.css">
 <script src="${pageContext.request.contextPath}/jsp_folder/js/jquery.min.js"></script>
  <script src="${pageContext.request.contextPath}/jsp_folder/js/bootstrap.min.js"></script> --%>

	<script>

	var renderer = null;
	var scene = null;
	var camera = null;
	var mesh = null;
	
	$(document).ready(
			function() {
				var container = document.getElementById("container");
				var app = new InteractionApp();
				app.init({ container: container });
				app.run();
			}
		);
	
	


	</script>

<style type="text/css">

/* Style the Image Used to Trigger the Modal */
#myImg {
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

#myImgu2f {
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
}

#myImgu2f:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-content, #caption { 
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)} 
    to {-webkit-transform:scale(1)}
}

@keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
}

/* The Close Button */
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
    .modal-content {
        width: 100%;
    }
}
</style>

</head>
<body>
	<center><h1>What is FIDO ?</h1>
	<h3>FIDO is the World's Largest Ecosystem for Standards-Based,
Interoperable Authentication</h3>
	
	</center>
	
    <div id="container" style="width:95%; height:80%; position:absolute;"></div>
    <div id="common" style="width:95%; height:40%; bottom:2px;padding-left:20px; text-align:left; position:absolute;" class="row">
    <div  class="col-xs-4 " style="text-align: center;">
   <!--  <img id ="imguaf" class="mask flex-center" > -->
    
    <!-- Trigger the Modal -->
<div id="myImg"  alt="" width="400" height="250">
</div>
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- The Close Button -->
  <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01">

  <!-- Modal Caption (Image Text) -->
  <div id="caption"></div>
</div>
    
    </div>
<div  class="col-xs-4 "></div>
	<div  class="col-xs-4 " style="text-align: center;">
	<!--  <img id ="imgu2f" class="img-rounded zoom" > -->
	
	<!-- Trigger the Modal -->
<div id="myImgu2f"  alt="" width="400" height="250">
</div>
<!-- The Modal -->
<div id="myModalu2f" class="modal">

  <!-- The Close Button -->
  <span class="close" onclick="document.getElementById('myModalu2f').style.display='none'">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01u2f">

  <!-- Modal Caption (Image Text) -->
  <div id="caption"></div>
</div>
	
	</div>
	
</div>







<div id="prompt" style="width:95%; height:6%; bottom:0; text-align:center; position:absolute;">
	<a href="${pageContext.request.contextPath}/">Home</a> | <a href="${pageContext.request.contextPath}/Home">Refresh</a>
	</div>
	
	
<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    //modalImg.src = this.src;
    modalImg.src = "./jsp_folder/images/uaf.png";
    captionText.innerHTML = "FIDO UAF";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

<script>
// Get the modal
var modal = document.getElementById('myModalu2f');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImgu2f');
var modalImg = document.getElementById("img01u2f");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    //modalImg.src = this.src;
    modalImg.src = "./jsp_folder/images/u2f.png";
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</body>
</html>