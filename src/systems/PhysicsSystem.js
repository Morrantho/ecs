const PhysicsSystem=()=>{
	Entities.execute(Components.COMPONENT_COLLISION,(a)=>{
		console.log("PHYS");
	});	
}
Systems.register(PhysicsSystem);