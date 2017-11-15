myFIDO1 = function()
{
 Sim.App.call(this);
}

myFIDO1.prototype = new Sim.App();

myFIDO1.prototype.init = function(param)
{
 Sim.App.prototype.init.call(this, param);
 light = new THREE.DirectionalLight( 0xffffff, 1);
 light.position.set(0, 0, 1);
 this.scene.add(light);
 this.camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 1, 4000 );
 this.camera.position.set(0, 0, 28);
 this.controls = [];
 this.scene.add(this.camera);

 var pyramid = new Pyramid();
 pyramid.init(null);
 this.addObject(pyramid);

 this.pyramid = pyramid;
}

myFIDO1.prototype.update = function()
{
  TWEEN.update();

  Sim.App.prototype.update.call(this);
}

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
	
	                 // To create a pyramid, we use THREE.CylinderGeometry. By its five parameters, we are 
	                 // able to create the geometry of the pyramid (subtype of a cylinder). 
	                 // Parameter 1 'radiusTop': Controls the radius of the upper end of the cylinder. If we 
	                 //                          set to to '0', we have a cone. 
	                 // Parameter 2 'radiusBottom': Controls the radius of the lower end. 
	                 // Parameter 3 'height': Sets the height of the cylinder. 
	                 // Parameter 4 'segments': Number of segments, forming the cylindrical shell. To create 
	                 //                         a pyramid, we choose '4'. 
	                 // Parameter 5 'openEnded': Allows to have open ends ('true') or closed ends ('false') 
	                 //                          of the cylindern. Since the pyramid shall have a bottom 
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