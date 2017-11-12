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
	cube.init( 3, 2, 1,'FIDO WOR','./jsp_folder/images/howfidowork_vi.png');
	this.addObject(cube);
	
	var cube2 = new Cube();
	cube2.init( -3, 2, 1,'FIDO WHA','./jsp_folder/images/whatisFIDO_vi.png');
	this.addObject(cube2);
	
	var cube3 = new Cube2();
	cube3.init( 0, 2, 1,'FIDO USE','./jsp_folder/images/howtouseFIDO_vi.png');
	this.addObject(cube3);
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
    cube.scale.set(1.5, 1.5, 1.5)
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
	if(this.name == "FIDO WHA") //for uaf
	 document.location.href="Whatis"; 
	else if(this.name =="FIDO WOR")
		document.location.href="Fidowork";
	else if(this.name =="FIDO USE")
		document.location.href="Howuse";
}
Cube.prototype.handleMouseOver = function(x, y, position)
{
	this.mesh.scale.set(2, 2, 2);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}
Cube.prototype.handleMouseOut = function(x, y, position)
{
	this.mesh.scale.set(1.5, 1.5, 1.5);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}
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
	//this.object3D.rotation.y += Cube.ROTATION_Y;
	if(this.name == "FIDO WHA")
	this.object3D.rotation.x += Cube.ROTATION_X;
	else
		this.object3D.rotation.y += Cube.ROTATION_Y;
}


Cube.ROTATION_X = 0.0050;
Cube.ROTATION_Y = 0.0075;
Cube.TILT = 0.41;

//cube 2
Cube2 = function(){
	Sim.Object.call(this);
}

Cube2.prototype = new Sim.Object();

Cube2.prototype.init = function(x,y,z, name, imagepath)
{
	this.name = name;
	this.imagepath = imagepath;
	var material = new THREE.MeshPhongMaterial({
        map: THREE.ImageUtils.loadTexture(imagepath)
    });
    var geometry = new THREE.CubeGeometry(1,1,1);
    cube2 = new THREE.Mesh( geometry, material );
    cube2.rotation.x = Math.PI / 5;
    cube2.rotation.y = Math.PI / 5;
    cube2.position.set( x,y,z);
    cube2.scale.set(1.5, 1.5, 1.5)
    // Add the cube to our scene
    this.setObject3D(cube2);
    
    this.mesh = cube2;
    // Have the framework show the pointer when over
    this.overCursor = 'pointer';
}

Cube2.prototype.handleMouseDown = function(x, y, position)
{
	this.mesh.scale.set(1.05, 1.05, 1.05);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
	//alert("You select: " +this.name + ". Thank you for your selection!");
	if(this.name == "FIDO WHA") //for uaf
	 document.location.href="Whatis"; 
	else if(this.name =="FIDO WOR")
		document.location.href="Fidowork";
	else if(this.name =="FIDO USE")
		document.location.href="Howuse";
}
Cube2.prototype.handleMouseOver = function(x, y, position)
{
	this.mesh.scale.set(2, 2, 2);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}
Cube2.prototype.handleMouseOut = function(x, y, position)
{
	this.mesh.scale.set(1.5, 1.5, 1.5);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}
Cube2.prototype.select = function(){
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


Cube2.prototype.update = function()
{
	// "I feel the Earth move..."
	//this.object3D.rotation.y += Cube.ROTATION_Y;
	if(this.name == "FIDO UAF")
	this.object3D.rotation.x += Cube2.ROTATION_X;
	else
		this.object3D.rotation.y += Cube2.ROTATION_X;
}


Cube2.ROTATION_X = 0.0050;
Cube2.ROTATION_Y = 0.0025;
Cube2.TILT = 0.41;
