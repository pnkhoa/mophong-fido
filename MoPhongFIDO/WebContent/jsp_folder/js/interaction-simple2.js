// Constructor
InteractionApp = function()
{
	Sim.App.call(this);
}

// Subclass Sim.App
InteractionApp.prototype = new Sim.App();

// Our custom initializer
InteractionApp.prototype.init = function(param)
{
	// Call superclass init code to set up scene, renderer, default camera
	Sim.App.prototype.init.call(this, param);
	
    // Create a directional light to show off the Control
	var light = new THREE.DirectionalLight( 0xffffff, 1);
	light.position.set(1, 0, 1).normalize();
	this.scene.add(light);
	
	this.camera.position.set(0, -1, 6);
	this.camera.lookAt(this.root);
	
	this.controls = [];
	
    // Create the Control and add it to our sim
    var comment = new Control();
    comment.init({ id : Control.ID_COMMENT, icon : "./jsp_folder/images/fidou2f2.png" });
    this.addObject(comment);
    this.controls.push(comment);

  /*  // Create the Control and add it to our sim
    var info = new Control();
    info.init({ id : Control.ID_INFO, icon : "./jsp_folder/images/FidoU2F.png" });
    this.addObject(info);
    this.controls.push(info);*/

    // Create the Control and add it to our sim
    var clock = new Control();
    clock.init({ id : Control.ID_CLOCK, icon : "./jsp_folder/images/fidouaf4.png" });
    this.addObject(clock);
    this.controls.push(clock);

    /*// Create the Control and add it to our sim
    var favorite = new Control();
    favorite.init({ id : Control.ID_FAVORITE, icon : "./jsp_folder/images/icons/favorite.png" });
    this.addObject(favorite);
    this.controls.push(favorite);*/
    
    // Create the Control and add it to our sim
    var help = new Control();
    //help.init({ id : Control.ID_HELP, icon : "./jsp_folder/images/icons/help.png" });
    help.init({ id : Control.ID_HELP, icon : "./jsp_folder/images/fidoalliance2.png" });
    this.addObject(help);
    this.controls.push(help);
    
 // Create the Control and add it to our sim
   /* var u2f = new Control();
    u2f.init({ id : Control.ID_U2F, icon : "./jsp_folder/images/u2f.png" });
    this.addObject(u2f);
    this.controls.push(u2f);
    
    // Create the Control and add it to our sim
    var uaf = new Control();
    uaf.init({ id : Control.ID_UAF, icon : "./jsp_folder/images/uaf.png" });
    this.addObject(uaf);
    this.controls.push(uaf);*/
    
    this.layoutControls();
    
    this.selectedControl = null;
    
}

InteractionApp.prototype.layoutControls = function()
{
	var scale = 2;
	var theta = 0;
	var x = scale * Math.sin(theta);
	var z = scale * Math.cos(theta);
	var y = 0;

	var nControls = this.controls.length;
	var left = (nControls - 1 )/ 2 * -scale;
	
	var i;

	x = left;
	y = z = 0;
	for (i = 0; i < nControls; i++)
	{
		
		x=0;
		this.controls[i].setPosition(x, y, z);
		//x += scale;
		
		this.controls[i].subscribe("selected", this, this.onControlSelected)
	}
	
}

InteractionApp.prototype.onControlSelected = function(control, selected)
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
				//auto return
				//this.selectedControl.deselect();
			}
			this.selectedControl = control;
		}
	}
}

InteractionApp.prototype.update = function()
{
    TWEEN.update();

    Sim.App.prototype.update.call(this);
}

// Custom Control class
Control = function()
{
	Sim.Object.call(this);
}

Control.prototype = new Sim.Object();

Control.prototype.init = function(param)
{
	this.id = param.id || Control.ID_NONE;
	
	var icon = param.icon || '';
	var map = THREE.ImageUtils.loadTexture(icon);
	
    // Create our Control
    var geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    var material = new THREE.MeshPhongMaterial( 
    		{ color: 0xffffff, ambient: 0xababab, transparent:true, map:map } );
    var mesh = new THREE.Mesh( geometry, material ); 
    mesh.doubleSided = true;
    // mesh.position.set(-2, 0, 2);
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
	this.mesh.scale.set(1.1, 1.1, 1.1);
	this.mesh.material.ambient.setRGB(.777,.777,.777);
}

Control.prototype.handleMouseOut = function(x, y)
{
	this.mesh.scale.set(1, 1, 1);
	this.mesh.material.ambient.setRGB(.667, .667, .667);
}

Control.prototype.handleMouseDown = function(x, y, position)
{
	if (!this.selected)
	{
		this.select();
	}
	else
	{
		this.deselect();
	}
}

Control.prototype.select = function()
{
	if (!this.savedposition)
	{
		this.savedposition = this.mesh.position.clone();
	}
	//alert(this.mesh.position);
	if(this.id == 2)//uaf
		{
	new TWEEN.Tween(this.mesh.position)
    .to({
        x : b,
        y : 0,
        z: 2
    	},500).start();
	}
	else if(this.id == -1) //u2f
		{
		new TWEEN.Tween(this.mesh.position)
	    .to({
	        x : a,
	        y : 0,
	        z: 2
	    	},500).start();
			
		}
	
	this.selected = true;
	this.publish("selected", this, true);
}

Control.prototype.deselect = function(param)
{
	//InteractionApp.prototype.controls[0].subscribe("selected", this, this.onControlSelected)
	//InteractionApp.prototype.selectedControl.deselect();
	//InteractionApp.prototype.removeObject(this.id);
	//var aa = new Sim.App();
	//Sim.App.prototype.init.call(this, param);
	//aa.removeObject(this.id);
	if(this.id == 2)
		{
		//alert("UAF welcome");
		//this.removeChild(2);
		show_image('./jsp_folder/images/uaf.png', 
                200, 
                200, 
                'FIDO UAF','myImg');
		
		}
	else
		{
		show_image('./jsp_folder/images/u2f.png', 
                200, 
                200, 
                'FIDO U2F','myImgu2f');
		
		}
	/*new TWEEN.Tween(this.mesh.position)
    .to({ x: this.savedposition.x, 
    	  y: this.savedposition.y,
    	  z: this.savedposition.z
    	}, 500).start();*/
	
	/*new TWEEN.Tween(this.mesh.position)
    .to({ x: 2, 
    	  y: 0,
    	  z: 0
    	}, 500).start();*/
	
	
	
	this.selected = false;
	this.publish("selected", this, false);
	
}

Control.ID_NONE = -1;
Control.ID_COMMENT = 0;
Control.ID_INFO = 1;
Control.ID_CLOCK = 2;
Control.ID_FAVORITE = 3;
Control.ID_HELP = 4;
Control.ID_UAF = 5;
Control.ID_U2F = 6;
var a = 2;
var b = -2;

function show_image(src, width, height, alt,id) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    //document.body.appendChild(img);
    var myNode = document.getElementById(id).innerHTML='';
    //document.getElementById("img01").appendChild(img);
    document.getElementById(id).appendChild(img);
   
}


