let offset = 1;
let last   = 0;

const Components = {
	classes:{},

	enum:(alias,mask)=>{
		Components[alias] = mask;
		console.log("Registered Enum: ",alias,mask);
	},

	register:(alias,ctor)=>{
		Components[alias] = offset<<last++; // Enum
		Components.classes[Components[alias]] = ctor; // Store constructor.
		if(ctor) console.log("Registered Component:",ctor.name);
	},
};
Components.register("COMPONENT_NONE",undefined);