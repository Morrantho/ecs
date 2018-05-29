const Systems = {
	classes:{},

	register:(cb)=>{
		Systems.classes[cb.name] = cb;
		console.log("Registered System: ",cb.name);
	}
};