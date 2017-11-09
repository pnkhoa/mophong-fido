var Poses =  [[-4,3,0],[-2,3,0],[0,3,0],[2,3,0],[4,3,0]];
var Pos1 = 	[-4,3,0];
var Pos2 =  [-2,3,0];
var Pos3 =  [0,3,0];
var Pos4 =  [2,3,0];
var Pos5 =  [4,3,0];
var movingTime  = 1000;
var readingTime = 4000;
var loopingTime = 7000;
var controls = [];
H2U1Controller = function()
{
	Sim.App.call(this);
}

H2U1Controller.prototype = new Sim.App();

H2U1Controller.prototype.init = function(param)
{	
	Sim.App.prototype.init.call(this, param);
	light = new THREE.DirectionalLight( 0xffffff, 1);
	light.position.set(0, 0, 1);
	this.scene.add(light);
	this.camera = new THREE.PerspectiveCamera( 65, container.offsetWidth / container.offsetHeight, 1, 4000 );
	//this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 4000 );
	this.camera.position.set( 0, 2, 5 );	
	
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth/2, window.innerHeight/2, false)
	document.body.appendChild( renderer.domElement );
	
	this.controls = [];
	
    // Create the Control and add it to our sim
    var H2U3 = new Control();
    H2U3.init({ id : Control.ID_H2U3, icon : "./jsp_folder/images/blank.png", position:Pos4 });
    this.addObject(H2U3);
    controls.push({control:H2U3, icon:'./jsp_folder/images/Howtouseuaf3.png'});
    this.controls.push(H2U3);
    
    var ARR2 = new Control();
    ARR2.init({ id : Control.ID_ARR2, icon : "./jsp_folder/images/blank.png", position:Pos3 });
    this.addObject(ARR2);
    controls.push({control:ARR2, icon:"./jsp_folder/images/HowtouseMuiTen1.png"});
    this.controls.push(ARR2);
    
    var H2U2 = new Control();
    H2U2.init({ id : Control.ID_H2U2, icon : "./jsp_folder/images/blank.png", position:Pos2 });
    this.addObject(H2U2);
    controls.push({control:H2U2, icon:"./jsp_folder/images/Howtouseuaf2.png"});
    this.controls.push(H2U2);
    
    var ARR1 = new Control();
    ARR1.init({ id : Control.ID_ARR1, icon : "./jsp_folder/images/blank.png", position:Pos1 });
    this.addObject(ARR1);
    controls.push({control:ARR1, icon:"./jsp_folder/images/HowtouseMuiTen1.png"});
    this.controls.push(ARR1);
    
    var H2U1 = new Control();
    H2U1.init({ id : Control.ID_H2U1, icon : "./jsp_folder/images/blank.png", position:Pos1 });
    this.addObject(H2U1);
    controls.push({control:H2U1, icon:"./jsp_folder/images/Howtouseuaf1.png"});
    this.controls.push(H2U1);



}

H2U1Controller.prototype.update = function()
{
  TWEEN.update();

  Sim.App.prototype.update.call(this);
}

Control = function()
{
	Sim.Object.call(this);
}

Control.prototype = new Sim.Object();

Control.prototype.init = function(param)
{
	this.id = param.id != null ? param.id : Control.ID_NONE;
	var icon = param.icon || '';
	var map = icon != '' ? THREE.ImageUtils.loadTexture(icon) : null;
    var geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    var material = new THREE.MeshPhongMaterial( 
    		{ color: 0xffffff, ambient: 0xababab, transparent:false, map:map } );
    var mesh = new THREE.Mesh( geometry, material ); 
    mesh.doubleSided = true;
    param.position
    mesh.position.set(param.position[0], param.position[1], param.position[2]);
    this.setObject3D(mesh);
    mesh.scale.set(2,2,2);
    this.mesh = mesh;
    this.selected = false;
    this.overCursor = 'pointer';
}

//Control.prototype.handleMouseOver = function(x, y)
//{
//	this.mesh.scale.set(1.5, 1.5, 1.5);
//	this.mesh.material.ambient.setRGB(.777,.777,.777);
//}
//
//Control.prototype.handleMouseOut = function(x, y)
//{
//	this.mesh.scale.set(1, 1, 1);
//	this.mesh.material.ambient.setRGB(.667, .667, .667);
//}

Control.ID_NONE = -1;
Control.ID_H2U1 = 1;
Control.ID_H2U2 = 2;
Control.ID_H2U3 = 3;
Control.ID_ARR1 = 4;
Control.ID_ARR2 = 5;

Control.prototype.handleMouseDown = function()
{
	if(this.selected == false){
		this.selected = true;
		showSteps();
		
	}else
		return;
}

Control.prototype.moving = function(pos){
	if (!this.savedposition)
	{
		this.savedposition = this.mesh.position.clone();
	}
	
	new TWEEN.Tween(this.mesh.position)
    .to({
        x : pos[0],
        y : pos[1],
        z : pos[2]
    	}, 1000).start();
}
	
function showSteps(){
	var id = 4;
	var pos = 0;
	setImageToIcon(id); id=id-1; pos=pos+1;
	var go = setInterval(function(){
		setImageToIcon(id);
		controls[id].control.moving(Poses[pos]);
		id=id-1;
		pos=pos+1;
		//if(id < 0)clearInterval(go);
	},2000);
	
}
function setImageToIcon(id){
	console.log(controls[id]);
	controls[id].control.mesh.material = new THREE.MeshPhongMaterial( 
    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
    			map:THREE.ImageUtils.loadTexture(controls[id].icon) } );
}