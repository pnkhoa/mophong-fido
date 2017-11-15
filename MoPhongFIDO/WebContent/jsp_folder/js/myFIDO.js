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
	
	var cube2 = new Cube2();
	cube2.init( -3, 2, 1,'FIDO WHA','./jsp_folder/images/whatisFIDO_vi.png');
	this.addObject(cube2);
	
	var cube3 = new Cube3();
	cube3.init( 0, 2, 1,'FIDO USE','./jsp_folder/images/howtouseFIDO_vi2.png');
	this.addObject(cube3);
	
	var cube = new Cube();
	cube.init( 3, 2, 1,'FIDO WOR','./jsp_folder/images/howfidowork_vi.png');
	this.addObject(cube);
	

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
    var geometry = new THREE.CubeGeometry(1,1,0.5);
    cube = new THREE.Mesh( geometry, material );
    cube.rotation.x = Math.PI / 5;
    cube.rotation.y = Math.PI / 5;
    cube.position.set( x,y,z);
    cube.scale.set(1.8, 1.8, 1.8)
    // Add the cube to our scene
    this.setObject3D(cube);
    
    this.mesh = cube;
    // Have the framework show the pointer when over
    this.overCursor = 'pointer';
}

Cube.prototype.handleMouseDown = function(x, y, position)
{
	this.mesh.scale.set(1.5, 1.5, 1.5);
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
	this.mesh.scale.set(1.8, 1.8, 1.8);
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
    cube2.scale.set(1.7, 1.7, 1.7)
    // Add the cube to our scene
    this.setObject3D(cube2);
    
    this.mesh = cube2;
    // Have the framework show the pointer when over
    this.overCursor = 'pointer';
}

Cube2.prototype.handleMouseDown = function(x, y, position)
{
	this.mesh.scale.set(1.5, 1.5, 1.5);
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
	this.mesh.scale.set(1.7, 1.7, 1.7);
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



//cube 3
Cube3 = function(){
	Sim.Object.call(this);
}

Cube3.prototype = new Sim.Object();

Cube3.prototype.init = function(x,y,z, name, imagepath)
{
	this.name = name;
	this.imagepath = imagepath;
	var material = new THREE.MeshPhongMaterial({
		color: 0xffffff, ambient: 0xababab, transparent:true, map: THREE.ImageUtils.loadTexture(imagepath)
		, vertexColors:THREE.VertexColors 
    });
    //var geometry = new THREE.CubeGeometry(1,1,1);
	 var geometry = new THREE.CylinderGeometry(0, 3.5, 4, 4, false); 
	 
	
	 for(i = 0; i < geometry.faces.length; i++){ 
		                      if(geometry.faces[i] instanceof THREE.Face4){ 
		                          geometry.faces[i].vertexColors[0] = new THREE.Color(0xFFFFFF); 
		                          if((i % 2) == 0){ 
		                              geometry.faces[i].vertexColors[1] = new THREE.Color(0xFFFFFF);  
		                              geometry.faces[i].vertexColors[2] = new THREE.Color(0x90FF5C); 
		                          } else { 
		                              geometry.faces[i].vertexColors[1] = new THREE.Color(0xFFFFFF); 
		                              geometry.faces[i].vertexColors[2] = new THREE.Color(0xB9F8FC); 
		                          } 
		                          geometry.faces[i].vertexColors[3] =  new THREE.Color(0xFFFF00);  
		                      } 
		                      else { 
		                    	  geometry.faces[i].vertexColors[0] = new THREE.Color(0xFFFFFF); 
		                    	  geometry.faces[i].vertexColors[1] = new THREE.Color(0xFFFFFF); 
		                    	  geometry.faces[i].vertexColors[2] = new THREE.Color(0xFFFFFF); 
		                    	                       } 
		                  } 
	 
	 
	 
    cube3 = new THREE.Mesh( geometry, material );
    cube3.rotation.x = Math.PI / 5;
    cube3.rotation.y = Math.PI / 5;
    cube3.position.set( x,y,z);
    cube3.scale.set(0.5, 0.5, 0.5)
    // Add the cube to our scene
    this.setObject3D(cube3);
    
    this.mesh = cube3;
    // Have the framework show the pointer when over
    this.overCursor = 'pointer';
}

Cube3.prototype.handleMouseDown = function(x, y, position)
{
	this.mesh.scale.set(0.5, 0.5, 0.5);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
	//alert("You select: " +this.name + ". Thank you for your selection!");
	if(this.name == "FIDO WHA") //for uaf
	 document.location.href="Whatis"; 
	else if(this.name =="FIDO WOR")
		document.location.href="Fidowork";
	else if(this.name =="FIDO USE")
		document.location.href="Howuse";
}
Cube3.prototype.handleMouseOver = function(x, y, position)
{
	this.mesh.scale.set(0.6, 0.6, 0.6);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}
Cube3.prototype.handleMouseOut = function(x, y, position)
{
	this.mesh.scale.set(0.5, 0.5, 0.5);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}
Cube3.prototype.select = function(){
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


Cube3.prototype.update = function()
{
	// "I feel the Earth move..."
	//this.object3D.rotation.y += Cube.ROTATION_Y;
	if(this.name == "FIDO UAF")
	this.object3D.rotation.x += Cube3.ROTATION_X;
	else
		this.object3D.rotation.y += Cube3.ROTATION_X;
}


Cube3.ROTATION_X = 0.0050;
Cube3.ROTATION_Y = 0.0025;
Cube3.TILT = 0.41;



Pyramid = function()
{
 Sim.Object.call(this);
}

Pyramid.prototype = new Sim.Object();

Pyramid.prototype.init = function(param)
{
/*	CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded, thetaStart, thetaLength)

	radiusTop — Radius of the cylinder at the top. Default is 1.
	radiusBottom — Radius of the cylinder at the bottom. Default is 1.
	height — Height of the cylinder. Default is 1.
	radiusSegments — Number of segmented faces around the circumference of the cylinder. Default is 8
	heightSegments — Number of rows of faces along the height of the cylinder. Default is 1.
	openEnded — A Boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.
	thetaStart — Start angle for first segment, default = 0 (three o'clock position).
	thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder.*/
 // var geometry = new THREE.CylinderGeometry( 1,7, 10, 4,1,false,0,6 );
	
	                 // To create a Pyramid, we use THREE.CylinderGeometry. By its five parameters, we are 
	                 // able to create the geometry of the Pyramid (subtype of a cylinder). 
	                 // Parameter 1 'radiusTop': Controls the radius of the upper end of the cylinder. If we 
	                 //                          set to to '0', we have a cone. 
	                 // Parameter 2 'radiusBottom': Controls the radius of the lower end. 
	                 // Parameter 3 'height': Sets the height of the cylinder. 
	                 // Parameter 4 'segments': Number of segments, forming the cylindrical shell. To create 
	                 //                         a Pyramid, we choose '4'. 
	                 // Parameter 5 'openEnded': Allows to have open ends ('true') or closed ends ('false') 
	                 //                          of the cylindern. Since the Pyramid shall have a bottom 
	                 //                          face, we set it to 'false'. 
  var geometry = new THREE.CylinderGeometry(0, 4, 5, 4, false); 
  var material = new THREE.MeshPhongMaterial(
      { color: 0xffffff, ambient: 0xababab, transparent:true, map:null } );
  var cylinder = new THREE.Mesh( geometry, material );
   this.setObject3D(cylinder);
   this.mesh = cylinder;
}
Pyramid.prototype.update = function()
{
 this.object3D.rotation.y += 0.005;
}