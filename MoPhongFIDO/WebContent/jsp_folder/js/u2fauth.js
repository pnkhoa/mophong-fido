var serverPos =  [4,3,0];
var clientPos =  [-4,3,0];
var userPos =    [0,0,2];
var startPos =    [0,1,2];
var readingPos = [0,1.5,3];
var movingTime  = 1000;
var readingTime = 4000;
var loopingTime = 7000;
var steps = [{stepId:0, stepImg:'./jsp_folder/images/fidou2fauth1.png',	stepDes:'', from:userPos, 	to:clientPos},
             {stepId:1, stepImg:'./jsp_folder/images/fidou2fauth2.png',	stepDes:'', from:clientPos, to:serverPos},
	         {stepId:2, stepImg:'./jsp_folder/images/fidou2fauth3.png',	stepDes:'', from:serverPos, to:serverPos},
	         {stepId:3, stepImg:'./jsp_folder/images/fidou2fauth4.png',	stepDes:'', from:serverPos, to:clientPos},
	         {stepId:4, stepImg:'./jsp_folder/images/fidou2fauth5.png',	stepDes:'', from:clientPos, to:clientPos},
	         {stepId:5, stepImg:'./jsp_folder/images/fidou2fauth6.png',	stepDes:'', from:clientPos, to:userPos},
	         {stepId:6, stepImg:'./jsp_folder/images/fidou2fauth7.png',	stepDes:'', from:userPos, 	to:userPos},
	         {stepId:7, stepImg:'./jsp_folder/images/fidou2fauth8.png',	stepDes:'', from:userPos, 	to:userPos},
	         {stepId:8, stepImg:'./jsp_folder/images/fidou2fauth9.png',	stepDes:'', from:userPos, 	to:clientPos},
	         {stepId:9, stepImg:'./jsp_folder/images/fidou2fauth10.png',	stepDes:'', from:clientPos, to:serverPos},
	         {stepId:10,stepImg:'./jsp_folder/images/fidou2fauth11.png',	stepDes:'', from:serverPos, to:serverPos},
	         {stepId:11,stepImg:'./jsp_folder/images/fidou2fauth12.png',	stepDes:'', from:serverPos, to:clientPos}];
var controls = [];
U2FController = function()
{
	Sim.App.call(this);
}

U2FController.prototype = new Sim.App();

U2FController.prototype.init = function(param)
{	
	Sim.App.prototype.init.call(this, param);
	light = new THREE.DirectionalLight( 0xffffff, 1);
	light.position.set(0, 0, 1);
	this.scene.add(light);
	this.camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 1, 4000 );
	this.camera.position.set(0, 1, 7);	
	this.controls = [];
	
	// Create the Control and add it to our sim
    var client = new Control();
    client.init({ id : Control.ID_FIDOCLIENT, icon : "./jsp_folder/images/fidoclientserverU2F.png", position:clientPos });
    this.addObject(client);
    controls.push({control:client, icon:'./jsp_folder/images/fidoclientserverU2F.png'});
    this.controls.push(client);
    // Create the Control and add it to our sim
    var server = new Control();
    server.init({ id : Control.ID_FIDOSERVER, icon : "./jsp_folder/images/fidoServer3.png", position:serverPos });
    this.addObject(server);
    controls.push({control:server, icon:'./jsp_folder/images/fidoServer3.png'});
    this.controls.push(server);
    // Create the Control and add it to our sim
    var user = new Control();
    user.init({ id : Control.ID_FIDOUSER, icon : "./jsp_folder/images/fidou2fRegUser.png", position:userPos });
    this.addObject(user);
    controls.push({control:user, icon:'./jsp_folder/images/fidou2fRegUser.png'});
    this.controls.push(user);
    // Create the Control and add it to our sim
    var runner = new Control();
    runner.init({ id : Control.ID_RUNNING, icon : "./jsp_folder/images/PlayButton1.png", position:userPos });
    this.addObject(runner);
    controls.push({control:runner, icon:'./jsp_folder/images/PlayButton1.png'});
    this.controls.push(runner);

}

U2FController.prototype.update = function()
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
	var map = THREE.ImageUtils.loadTexture(icon);
    var geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    var material = new THREE.MeshPhongMaterial( 
    		{ color: 0xffffff, ambient: 0xababab, transparent:true, map:map } );
    var mesh = new THREE.Mesh( geometry, material ); 
    mesh.doubleSided = true;
    param.position
    mesh.position.set(param.position[0], param.position[1], param.position[2]);
    this.setObject3D(mesh);
    this.mesh = mesh;
    this.selected = false;
    this.overCursor = 'pointer';
}

Control.prototype.handleMouseOver = function(x, y)
{
	this.mesh.scale.set(1.5, 1.5, 1.5);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}

Control.prototype.handleMouseOut = function(x, y)
{
	this.mesh.scale.set(1, 1, 1);
	this.mesh.material.ambient.setRGB(.667, .667, .667);
}

Control.ID_NONE = -1;
Control.ID_FIDOCLIENT = 0;
Control.ID_FIDOSERVER = 1;
Control.ID_FIDOUSER = 2;
Control.ID_RUNNING = 3;

Control.prototype.handleMouseDown = function()
{
	if(this.selected == false){
		this.selected = true;
		goSteps();
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
    	}, movingTime).start();
}
	
function goSteps(){
	var step=0;
	setImageToIcon(steps[step].stepImg)
	controls[3].control.moving(readingPos);
	setTimeout(function(){
		controls[3].control.moving(steps[step].to);
		step=step+1;
	},readingTime);
	var go = setInterval(function(){
		setImageToIcon(steps[step].stepImg);
		controls[3].control.moving(readingPos);
		if(step==6)
			setTimeout(function(){alert('Vui lòng nhấn vào nút trên thiết bị FIDO U2F để tiếp tục.');},movingTime+2000);
		setTimeout(function(){
			controls[3].control.moving(steps[step].to);
			step=step+1;
			if(step>=12)
				{clearInterval(go);
				//alert("Bạn vừa xem phần trình diễn xác thực tài khoản FIDO U2F. Vui lòng thực hiện phần khảo sát ý kiến người dùng để chúng tôi được phục vụ bạn tốt hơn. Xin cảm ơn!");
				if (window.confirm('Bạn vừa xem phần trình diễn xác thực tài khoản FIDO U2F. Vui lòng thực hiện phần khảo sát ý kiến người dùng để hệ thống được hoàn thiện hơn.\nChọn OK để đi đến phần khảo sát. Chọn CANCEL để ở lại trang mô phỏng.\nXin Cảm ơn!' )) 
				{
					//window.location.href='https://goo.gl/abPFMc';
					 window.open('https://goo.gl/abPFMc','_blank');
				};
				}
		},readingTime);
	},loopingTime);
}

function setImageToIcon(stepImg){
	controls[3].control.mesh.material = new THREE.MeshPhongMaterial( 
    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
    			map:THREE.ImageUtils.loadTexture(stepImg) } );
}