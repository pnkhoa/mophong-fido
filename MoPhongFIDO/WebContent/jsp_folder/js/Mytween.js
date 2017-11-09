// Constructor
TweenApp = function()
{
	Sim.App.call(this);
}

// Subclass Sim.App
TweenApp.prototype = new Sim.App();

// Our custom initializer
TweenApp.prototype.init = function(param)
{
	// Call superclass init code to set up scene, renderer, default camera
	Sim.App.prototype.init.call(this, param);
	
    // Create a point light to show off the MovingBall
	//var light = new THREE.PointLight( 0xffffff, 1, 100);
	 var light = new THREE.DirectionalLight( 0xffffff, 1.5);
	light.position.set(0, 0, 1);
	this.scene.add(light);
	
	//this.camera.position.z = 6.667;
	
    // Create the MovingBall and add it to our sim
    var movingBall = new MovingBall();
    movingBall.init();
    this.addObject(movingBall);
    
    this.movingBall = movingBall;
    
}

TweenApp.prototype.update = function()
{
    TWEEN.update();

	Sim.App.prototype.update.call(this);
    
}

TweenApp.prototype.handleMouseUp = function(x, y)
{
	this.movingBall.animate();
}

// Custom MovingBall class
MovingBall = function()
{
	Sim.Object.call(this);
}

MovingBall.prototype = new Sim.Object();

MovingBall.prototype.init = function()
{
    // Create our MovingBall
	/*var BALL_TEXTURE = "./jsp_folder/images/cubetexture.png";
    var geometry = new THREE.SphereGeometry(1, 32, 32);
    var material = new THREE.MeshPhongMaterial( 
    		{ map: THREE.ImageUtils.loadTexture(BALL_TEXTURE) } );*/
    
	 // Grab our container div
	 var container = document.getElementById("container");
	 // Create the Three.js renderer, add it to our div
	 renderer = new THREE.WebGLRenderer( { antialias: true } );
	 renderer.setSize(container.offsetWidth, container.offsetHeight);
	 container.appendChild( renderer.domElement );
	 // Create a new Three.js scene
	 scene = new THREE.Scene();
	 // Put in a camera
	 camera = new THREE.PerspectiveCamera( 45,
	 container.offsetWidth / container.offsetHeight, 1, 4000 );
	 camera.position.set( 0, 0, 3 );
	 // Create a directional light to show off the object
	/* var light = new THREE.DirectionalLight( 0xffffff, 1.5);
	 light.position.set(0, 0, 1);
	 scene.add( light );*/
	 // Create a shaded, texture-mapped cube and add it to the scene
	 // First, create the texture map
	 var mapUrl =path+ "/jsp_folder/images/cubetexture.png";
	 //alert(mapUrl);
	 var map = THREE.ImageUtils.loadTexture(mapUrl);
	 // Now, create a Phong material to show shading; pass in the map
	 var material = new THREE.MeshPhongMaterial({ map: map });
	 // Create the cube geometry
	 var geometry = new THREE.CubeGeometry(0.5, 0.5, 0.5);
	 // And put the geometry and material together into a mesh
	 var mesh = new THREE.Mesh(geometry, material);
	 // Turn it toward the scene, or we won't see the cube shape!
	 mesh.rotation.x = Math.PI / 5;
	 mesh.rotation.y = Math.PI / 5;
	 
    
    //var mesh = new THREE.Mesh( geometry, material ); 
    //mesh.position.x = -3.333;
	
	 
    // Tell the framework about our object
    this.setObject3D(mesh);  
    
    
}

MovingBall.prototype.animate = function()
{
	
	var newpos;
	if (this.object3D.position.x > 0)
	{
		newpos = this.object3D.position.x - 2.5;
	}
	else
	{
		newpos = this.object3D.position.x + 2.5;
	}
	
	new TWEEN.Tween(this.object3D.position)
    .to( {
        x: newpos
    }, 1000).start();
}

