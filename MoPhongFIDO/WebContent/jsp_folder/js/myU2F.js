// Constructor
MyApp = function()
{
	Sim.App.call(this);
}

// Subclass Sim.App
MyApp.prototype = new Sim.App();

var controls = []
//Our custom initializer
MyApp.prototype.init = function(param)
{	
	
	// Call superclass init code to set up scene, renderer, default camera
	
	Sim.App.prototype.init.call(this, param);
	light = new THREE.DirectionalLight( 0xffffff, 1.5);
	light.position.set(0, 0, 1);
	this.scene.add(light);
	this.camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 1, 4000 );
	this.camera.position.set( 0, 0.5, 9 );
			
	var cube = new Cube();
	cube.init( 3, 2, 1,'Auth','./jsp_folder/images/fidou2fauth.png');
	this.addObject(cube);
	
	var cube2 = new Cube();
	cube2.init( -3, 2, 1,'Reg','./jsp_folder/images/fidou2fReg.png');
	this.addObject(cube2);
}

Cube = function(){
	Sim.Object.call(this);
}

Cube.prototype = new Sim.Object();

Cube.prototype.init = function(x,y,z, name, imagepath)
{
	this.name = name;
	this.imagepath = imagepath;
	var material = new THREE.MeshPhongMaterial({
        map: THREE.ImageUtils.loadTexture(imagepath)
    });
    var geometry = new THREE.CubeGeometry(1,1,1);
    cube = new THREE.Mesh( geometry, material );
    cube.rotation.x = Math.PI / 5;
    cube.rotation.y = Math.PI / 5;
    cube.position.set( x,y,z);
    cube.scale.set(1.5, 1.5, 1.5);
    // Add the cube to our scene
    this.setObject3D(cube);
    
    this.mesh = cube;
    // Have the framework show the pointer when over
    this.overCursor = 'pointer';
}

Cube.prototype.handleMouseDown = function(x, y, position)
{
	this.mesh.scale.set(1.05, 1.05, 1.05);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
	//alert("You select: " +this.name + ". Thank you for your selection!");
	if(this.name == "Auth") //for uaf
	 document.location.href="FIDOu2fauth"; 
	else
		document.location.href="FIDOu2fReg";
}
Cube.prototype.handleMouseOver = function(x, y, position)
{
	this.mesh.scale.set(2, 2, 2);
	this.mesh.material.ambient.setRGB(.777,.777,.777);

}
/*Control.prototype.handleMouseOut = function(x, y)
{
	this.mesh.scale.set(1, 1, 1);
	this.mesh.material.ambient.setRGB(.667, .667, .667);
	
}*/
Cube.prototype.select = function(){
	if (!this.savedposition)
	{
		this.savedposition = this.mesh.position.clone();
	}
	
	new TWEEN.Tween(this.mesh.position)
    .to({
        x : 0,
        y : 0,
        z: 0
    	}, 500).start();
	
	this.selected = true;
	this.publish("selected", this, true);
}


Cube.prototype.update = function()
{
	// "I feel the Earth move..."
	if(this.name == "FIDO UAF") //for uaf
	this.object3D.rotation.y += Cube.ROTATION_Y;
	else
	this.object3D.rotation.x += Cube.ROTATION_Y;
}



Cube.ROTATION_Y = 0.0025;
Cube.TILT = 0.41;
