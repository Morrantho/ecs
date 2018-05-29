const ImageSystem=()=>{
	Entities.execute(Components.IMAGE_MASK,(id)=>{
		let pos  = Entities.PositionComponent[id];
		let size = Entities.SizeComponent[id];
		let img  = Entities.ImageComponent[id];

		if(img.img.src){
			CONTEXT.drawImage(img.img,pos.x,pos.y,size.w,size.h);
		}
	});	
}
Systems.register(ImageSystem);