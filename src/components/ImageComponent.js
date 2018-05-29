class ImageComponent{
	constructor(src="res/img/play.png"){
		this.img=new Image(src);
		this.img.src = src;
	}
}
Components.register("COMPONENT_IMAGE",ImageComponent);
Components.enum("IMAGE_MASK",Components.COMPONENT_IMAGE|Components.COMPONENT_SIZE|Components.COMPONENT_POSITION);