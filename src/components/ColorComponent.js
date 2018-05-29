class ColorComponent{
	constructor(r=255,g=0,b=0){
		this.r=r;
		this.g=g;
		this.b=b;
	}
}
Components.register("COMPONENT_COLOR",ColorComponent);
Components.enum("RENDER_MASK",Components.COMPONENT_SIZE|Components.COMPONENT_POSITION|Components.COMPONENT_COLOR);