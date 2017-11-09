// Constructor
MyApp = function()
{
	Sim.App.call(this);
}

// Subclass Sim.App
MyApp.prototype = new Sim.App();
function setImageToIcon(id){
	var key = 'localImg'+id;
	var id1 = Control.ID_COMMENT;
	if(id== -1){ //use default image
		controls[id1].control.select();
		controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
	    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
	    			map:THREE.ImageUtils.loadTexture(localStorage.getItem('localImg'))} );
		
		
		setTimeout(function(){//step 5
			controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
		    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
		    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes5.png") } );

			controls[id1].control.select1(0,1.5,3);
			
			setTimeout(function(){ //step 5.
				controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
			    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
			    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes5.png") } );

				controls[id1].control.select1(-4,3,0);
				
				setTimeout(function(){ //step 6.
					controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
				    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
				    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg6.png") } );

					controls[id1].control.select1(0,1.5,3);
					
					setTimeout(function(){ //step 6.
						controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
					    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
					    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg6.png") } );

						controls[id1].control.select1(4,3,0);
						
						
						setTimeout(function(){ //step 7.
							controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
						    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
						    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg7.png") } );

							controls[id1].control.select1(0,1.5,3);
							
							setTimeout(function(){ //step 7.
								controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
							    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
							    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg7.png") } );

								controls[id1].control.select1(4,3,0);
								
								
								setTimeout(function(){ //step 8.
									controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
								    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
								    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg8.png") } );

									controls[id1].control.select1(0,1.5,3);
									
									setTimeout(function(){ //step 8.
										controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
									    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
									    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg8.png") } );

										controls[id1].control.select1(-4,3,0);
										
									}, 4000);
									
								}, 3000);
								
								
							}, 4000);
							
						}, 3000);
						
					}, 4000);
					
				}, 3000);
				
				
			}, 6000);
			
		}, 4000);
	}
	if(id == -2){
		controls[3].control.deselect();
		controls[3].control.mesh.material = new THREE.MeshPhongMaterial( 
	    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
	    			map:THREE.ImageUtils.loadTexture(localStorage.getItem('localImg'))} );
	}
	if(id==1){//capture camera
		controls[id1].control.select();
		controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
	    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
	    			map:THREE.ImageUtils.loadTexture(localStorage.getItem(key))} );
		
		setTimeout(function(){//step 5
			controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
		    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
		    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes5.png") } );

			controls[id1].control.select1(0,1.5,3);
			
			setTimeout(function(){ //step 5.
				controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
			    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
			    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes5.png") } );

				controls[id1].control.select1(-4,3,0);
				
				setTimeout(function(){ //step 6.
					controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
				    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
				    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg6.png") } );

					controls[id1].control.select1(0,1.5,3);
					
					setTimeout(function(){ //step 6.
						controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
					    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
					    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg6.png") } );

						controls[id1].control.select1(4,3,0);
						
						
						setTimeout(function(){ //step 7.
							controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
						    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
						    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg7.png") } );

							controls[id1].control.select1(0,1.5,3);
							
							setTimeout(function(){ //step 7.
								controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
							    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
							    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg7.png") } );

								controls[id1].control.select1(4,3,0);
								
								
								setTimeout(function(){ //step 8.
									controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
								    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
								    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg8.png") } );

									controls[id1].control.select1(0,1.5,3);
									
									setTimeout(function(){ //step 8.
										controls[id1].control.mesh.material = new THREE.MeshPhongMaterial( 
									    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
									    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOReg8.png") } );

										controls[id1].control.select1(-4,3,0);
										
									}, 4000);
									
								}, 3000);
								
								
							}, 4000);
							
						}, 3000);
						
					}, 4000);
					
				}, 3000);
				
				
			}, 6000);
			
		}, 4000);
	}
	if(id==2){
		controls[3].control.select();
		controls[3].control.mesh.material = new THREE.MeshPhongMaterial( 
	    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
	    			map:THREE.ImageUtils.loadTexture(localStorage.getItem(key))} );
	}
}
var controls = []
//Our custom initializer
MyApp.prototype.init = function(param)
{	
	
	// Call superclass init code to set up scene, renderer, default camera
	
	Sim.App.prototype.init.call(this, param);
	light = new THREE.DirectionalLight( 0xffffff, 1);
	light.position.set(0, 0, 1);
	this.scene.add(light);
	this.camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 1, 4000 );
	this.camera.position.set( 0, 0, 9 );
	
	this.controls = [];
	

	// Create the Control and add it to our sim
    var comment = new Control();
    
    comment.init({ id : Control.ID_FIDOCLIENT, icon : "./jsp_folder/images/fidoclientserver2.png", position:[-4,3,0] });
    this.addObject(comment);
    controls.push({control:comment, icon:'./jsp_folder/images/fidoclientserver2.png'});
    this.controls.push(comment);
    
    comment.init({ id : Control.ID_COMMENT, icon : "./jsp_folder/images/fidoclientserver2.png", position:[-4,3,0] });
    this.addObject(comment);
    controls.push({control:comment, icon:'./jsp_folder/images/icons/comment.png'});
    this.controls.push(comment);

	

    
    // Create the Control and add it to our sim
    var info = new Control();
    info.init({ id : Control.ID_INFO, icon : "./jsp_folder/images/fidouser2.png", position:[0,0,2] });
    this.addObject(info);
    controls.push({control:info, icon:'./jsp_folder/images/icons/info.png'});
    this.controls.push(info);

    // Create the Control and add it to our sim
    var clock = new Control();
   clock.init({ id : Control.ID_CLOCK, icon : "./jsp_folder/images/fidoServer3.png", position:[4,3,0] });
    this.addObject(clock);
    controls.push({control:clock, icon:'./jsp_folder/images/fidoServer3.png'});
    this.controls.push(clock);
    
    clock.init({ id : Control.ID_CLOCK, icon : "./jsp_folder/images/fidoServer3.png", position:[4,3,0] });
    this.addObject(clock);
    controls.push({control:clock, icon:'./jsp_folder/images/fidoServer3.png'});
    this.controls.push(clock);

  /*  // Create the Control and add it to our sim
    var favorite = new Control();
    favorite.init({ id : Control.ID_FAVORITE, icon : "./jsp_folder/images/icons/favorite.png", position:[4,3,0] });
    this.addObject(favorite);
    controls.push({control:favorite, icon:'./jsp_folder/images/icons/favorite.png'});
    this.controls.push(favorite);*/
    
    // Create the Control and add it to our sim
  /*  var help = new Control();
    help.init({ id : Control.ID_HELP, icon : "./jsp_folder/images/icons/help.png", position:[8,3,0] });
    this.addObject(help);
    controls.push({control:help, icon:'./jsp_folder/images/icons/help.png'});
    this.controls.push(help);*/
    
    this.selectedControl = null;
//    controls = this.controls;
}

//Custom Control class
Control = function()
{
	Sim.Object.call(this);
}

Control.prototype = new Sim.Object();

Control.prototype.init = function(param)
{
	//console.log(param.id);
	this.id = param.id != null ? param.id : Control.ID_NONE;
	
	var icon = param.icon || '';
	var map = THREE.ImageUtils.loadTexture(icon);
	
    // Create our Control
    var geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    var material = new THREE.MeshPhongMaterial( 
    		{ color: 0xffffff, ambient: 0xababab, transparent:true, map:map } );
    var mesh = new THREE.Mesh( geometry, material ); 
    mesh.doubleSided = true;
    param.position
    mesh.position.set(param.position[0], param.position[1], param.position[2]);
    // mesh.rotation.x = Math.PI / 12;
    
    // Tell the framework about our object
    this.setObject3D(mesh);
    this.mesh = mesh;
    
    this.selected = false;
    
    // Have the framework show the pointer when over
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

Control.prototype.handleMouseDown = function(x, y, position)
{
	//console.log(this);
	if(this.id == Control.ID_COMMENT){
		this.movingComment();
		return;
	}
//	if (!this.selected)
//	{
//		this.select();
//	}
//	else
//	{
//		this.deselect();
//	}
}
Control.prototype.movingComment = function(){
	var curPos = this.mesh.position.clone();
	if(curPos.x>=4){
		//alert("End of instruction");
		
		localStorage.getItem('localImg');
		return;}
	
/*	controls[Control.ID_COMMENT].control.mesh.material = new THREE.MeshPhongMaterial( 
    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes.png") } );
	this.mesh.scale.set(1.55, 1.55, 1.55);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
	
		
	new TWEEN.Tween(this.mesh.position)
    .to({
        x : curPos.x +8,
        y : curPos.y ,
        z: curPos.z
    	}, 3000).start();*/
	
	var id = Control.ID_COMMENT;
	
		controls[id].control.mesh.material = new THREE.MeshPhongMaterial( 
	    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
	    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes.png") } );

		controls[id].control.select1(0,1.5,3);
		
		setTimeout(function(){ //step 1.
			controls[id].control.mesh.material = new THREE.MeshPhongMaterial( 
		    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
		    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes.png") } );

			controls[id].control.select1(4,3,0);
			
			setTimeout(function(){ //step 2.
				controls[id].control.mesh.material = new THREE.MeshPhongMaterial( 
			    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
			    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes2.png") } );

				controls[id].control.select1(0,1.5,3);
				
				setTimeout(function(){ //step 2.
					controls[id].control.mesh.material = new THREE.MeshPhongMaterial( 
				    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
				    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes2.png") } );

					controls[id].control.select1(-4,3,0);
					
					setTimeout(function(){ //step 3.
						controls[id].control.mesh.material = new THREE.MeshPhongMaterial( 
					    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
					    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes3.1.png") } );

						controls[id].control.select1(0,1.5,3);
						
						setTimeout(function(){ //step 3.
							controls[id].control.mesh.material = new THREE.MeshPhongMaterial( 
						    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
						    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes3.1.png") } );

							controls[id].control.deselect1(0,0,2);
							
							setTimeout(function(){
								
								$('#container').css('display', 'none');
								$('#container').css('position', 'unset');
								$('#prompt').css('display', 'block');
								
							$('#container').css('display', 'none');
							$('#container').css('position', 'unset');
							$('#prompt').css('display', 'block');
							init();
							
							
							
						
						},3000);
							
						}, 4000);
						
					}, 3000);
					
				}, 4000);
				
			}, 3000);
	
		}, 4000);
			
			
	
/*	function goStep(id){
		setTimeout(function(){
			
			
			controls[id].control.mesh.material = new THREE.MeshPhongMaterial( 
		    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
		    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes2.png") } );

			controls[id].control.select();
			setTimeout(function(){
				if(id == 1){
					$('#container').css('display', 'none');
					$('#container').css('position', 'unset');
					$('#prompt').css('display', 'block');
					init();
				}else if(id == 3){
					$('#container').css('display', 'none');
					$('#container').css('position', 'unset');
					$('#prompt').css('display', 'block');
				}
				else if (id == 4){
					$('#container').css('display', 'none');
					$('#container').css('position', 'unset');
					$('#prompt2').css('display', 'block');
					if(iid > 1){
						$("#photox1").attr("src",localStorage.getItem('localImg1'));
						$("#photox2").attr("src",localStorage.getItem('localImg2'));
					}else{
						$("#photox1").attr("src",localStorage.getItem('localImg'));
						$("#photox2").attr("src",localStorage.getItem('localImg'));
					}
					
				}
				else{
					
					
					controls[id].control.deselect();
					controls[id].control.mesh.material = new THREE.MeshPhongMaterial( 
				    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
				    			map:THREE.ImageUtils.loadTexture(controls[id].icon)} );
					
					controls[id].control.mesh.material = new THREE.MeshPhongMaterial( 
				    		{ color: 0xffffff, ambient: 0xababab, transparent:true, 
				    			map:THREE.ImageUtils.loadTexture("./jsp_folder/images/FIDOMes3.1.png") } );
					
					
				}
				
				
				
				setTimeout(function(){
					
						$('#container').css('display', 'none');
						$('#container').css('position', 'unset');
						$('#prompt').css('display', 'block');
						
					$('#container').css('display', 'none');
					$('#container').css('position', 'unset');
					$('#prompt').css('display', 'block');
					init();
					
					//
					
				
				},3000);
			},3000);
		},3000)
	}
	switch(curPos.x){
	case -8:
		goStep(1);
		break;
	case -4:
		goStep(3);
		break;
	case 0:
		goStep(3);
		break;
	case 4:
		goStep(4);
		break;
	default :
		//alert("End of instruction");
		break;
	}*/

	
}
Control.prototype.select = function()
{
	if (!this.savedposition)
	{
		this.savedposition = this.mesh.position.clone();
	}
	//alert(this.id);
	
	
	new TWEEN.Tween(this.mesh.position)
    .to({
        x : -4,
        y : 3,
        z: 0
    	}, 2000).start();
	
	this.selected = true;
	this.publish("selected", this, true);
	
	this.mesh.scale.set(1.55, 1.55, 1.55);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}

Control.prototype.deselect = function()
{
	
	
	/*new TWEEN.Tween(this.mesh.position)
    .to({ x: this.savedposition.x, 
    	  y: this.savedposition.y,
    	  z: this.savedposition.z
    	}, 2000).start();*/
	
	new TWEEN.Tween(this.mesh.position)
    .to({
        x : 0,
        y : 0,
        z: 0
    	}, 2000).start();
	
	this.selected = false;
	this.publish("selected", this, false);
	this.mesh.scale.set(1, 1, 1);
	this.mesh.material.ambient.setRGB(.667, .667, .667);
}


Control.prototype.select1 = function(x,y,z)
{
	if (!this.savedposition)
	{
		this.savedposition = this.mesh.position.clone();
	}
	//alert(this.id);
	
	
	new TWEEN.Tween(this.mesh.position)
    .to({
    	  x : x,
          y : y,
          z: z
      	}, 1000).start();
	this.selected = true;
	this.publish("selected", this, true);
	
	this.mesh.scale.set(1.55, 1.55, 1.55);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}
Control.prototype.deselect1 = function(x,y,z)
{
	
	
	/*new TWEEN.Tween(this.mesh.position)
    .to({ x: this.savedposition.x, 
    	  y: this.savedposition.y,
    	  z: this.savedposition.z
    	}, 2000).start();*/
	
	new TWEEN.Tween(this.mesh.position)
    .to({
        x : x,
        y : y,
        z: z
    	}, 1000).start();
	
	this.selected = false;
	this.publish("selected", this, false);
	this.mesh.scale.set(1.55, 1.55, 1.55);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}
Control.ID_NONE = -1;
Control.ID_COMMENT = 0;
Control.ID_INFO = 1;
Control.ID_CLOCK = 2;
Control.ID_FAVORITE = 3;
Control.ID_HELP = 4;
Control.ID_FIDOCLIENT = 100;
Control.ID_FIDOSERVER = 101;
Control.ID_FIDOUSER = 102;
MyApp.prototype.onControlSelected = function(control, selected)
{
	if (control == this.selectedControl)
	{
		if (!selected)
		{
			this.selectedControl = null;
		}
	}
	else
	{
		if (selected)
		{
			if (this.selectedControl)
			{
				this.selectedControl.deselect();
			}
			this.selectedControl = control;
		}
	}
}

MyApp.prototype.update = function()
{
  TWEEN.update();

  Sim.App.prototype.update.call(this);
}