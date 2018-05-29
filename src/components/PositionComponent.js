class PositionComponent{
	constructor(x=0,y=0){
		this.x=x;
		this.y=y;
	}
}
Components.register("COMPONENT_POSITION",PositionComponent);