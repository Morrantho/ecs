const RenderSystem=()=>{
	CANVAS.width=window.innerWidth;
	CANVAS.height=window.innerHeight;
	CONTEXT.fillStyle="rgb(0,0,0)";
	CONTEXT.fillRect(0,0,window.innerWidth,window.innerHeight);

	Entities.execute(Components.RENDER_MASK,(id)=>{
		let pos  = Entities.PositionComponent[id];
		let size = Entities.SizeComponent[id];
		let col  = Entities.ColorComponent[id];

		if(col){
			CONTEXT.fillStyle="rgb("+col.r+","+col.g+","+col.b+")";
			CONTEXT.fillRect(pos.x,pos.y,size.w,size.h);
		}
	});
}
Systems.register(RenderSystem);