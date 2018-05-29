const MAX_ENTITIES = 1024;
let MASK = [];
let id = 0;

const Entities = {
	next:()=>{ // Returns next available id, else next undefined value.
		if(id < MAX_ENTITIES)
			return id++;
		else
			for(let i=0;i<MAX_ENTITIES;i++)
				if(MASK[i] == Components.COMPONENT_NONE)
					return i;
	},
	destroy:(id)=>{ // Destroy an entity and its components.
		let components = Entities.resolveMask(MASK[id]);
		MASK[id] = Components.COMPONENT_NONE;

		for(let component in components)
			delete Entities[components[component].name];
	},
	create:(mask)=>{ // Create an entity with given mask of components.
		let id = Entities.next();
		MASK[id] = mask;
		Entities.createFromMask(id,mask);
		return id;
	},
	createFromMask:(id,mask)=>{ // Builds components from a mask.
		for(let component in Components.classes)
			if( mask & component ){
				let cls = Components.classes[component].name;
				Entities[cls][id] = new Components.classes[component]();
			}
	},
	execute:(mask,cb)=>{ // Finds entities with given mask and operates on them.
		MASK.map((m,i)=>(m & mask) == mask ? cb(i):0);
	},
	resolveMask:(mask)=>{ // Finds component constructors from a mask.
		let ctors = [];

		for(let component in Components.classes)
			if(mask & component)
				ctors.push(Components.classes[component]);
		return ctors;
	},
	findComponentByClass:(id,cls)=>{ // Find a component by class with given entity id.
		return Entities[cls.name][id];
	},
	findComponentsByMask(mask){ // Returns entity id's whose components match a mask 
		return MASK.map((i,j)=>(i & mask) == mask ? j:0);
	},
	addComponentsByMask:(id,mask)=>{ // Adds one or more components to an entity, also updating its mask.
		let ents = Entities.resolveMask(mask);

		for(let ent of ents){
			if(Entities[ent.name][id]) throw new Error(id+" already has a "+ent.name);
			Entities[ent.name][id] = new ent();
		}
		MASK[id] |= mask; // Add bits to old mask.
	},
	removeComponentsByMask:(id,mask)=>{ // Removes one or more components from an entity, updating its mask.
		let ents = Entities.resolveMask(mask);

		for(let ent of ents){
			if(!Entities[ent.name][id]) throw new Error(id+" doesn't contain a "+ent.name);
			delete Entities[ent.name][id];
		}
		MASK[id] ^= mask; // Remove bits from old mask.
	},
	setValue(id,cmp,k,v){ // Set a component value for a given entity id.
		Entities[cmp.name][id][k] = v;
	},
	getValue(id,cmp,k){ // Get a component value for a given entity id.
		return Entities[cmp.name][id][k];
	}
}

for(let component in Components.classes){
	if(Components.classes[component])
		Entities[Components.classes[component].name] = [];
}