class CollisionComponent{
	constructor(aPos=null,aSize=null,bPos=null,bSize=null){
		this.aPos=aPos;
		this.aSize=aSize; 
		this.bPos=bPos;
		this.bSize=bSize;
	}
}
Components.register("COMPONENT_COLLISION",CollisionComponent);
Components.enum("COLLISION_MASK",Components.COMPONENT_COLLISION|Components.COMPONENT_SIZE|Components.COMPONENT_POSITION);