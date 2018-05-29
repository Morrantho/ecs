// Systems.register(()=>{
// 	Entities.execute(Components.COMPONENT_SIZE|Components.COMPONENT_POSITION,(a)=>{
// 		let aPos  = Entities.PositionComponent[a];
// 		let aSize = Entities.SizeComponent[a];

// 		Entities.execute(Components.COMPONENT_SIZE|Components.COMPONENT_POSITION,(b)=>{
// 			let bPos  = Entities.PositionComponent[b];
// 			let bSize = Entities.SizeComponent[b];
// 			// Two entities collided. Add collision component.
// 			if( aPos.x < bPos.x+bSize.w &&
// 				bPos.x < aPos.x+aSize.w &&
// 				aPos.y < bPos.y+bSize.h &&
// 				bPos.y < aPos.y+aSize.h 
// 				&& a != b
// 			){
// 				if(!Entities.CollisionComponent[a]){
// 					Entities.CollisionComponent[a] = new CollisionComponent(aPos,aSize,bPos,bSize);
// 				}
// 			}
// 		});		
// 	});
// });