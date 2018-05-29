const CANVAS  = document.createElement("canvas");
const CONTEXT = CANVAS.getContext("2d");
document.body.appendChild(CANVAS);

const Run = function(t){		
	for(let system in Systems.classes)		
		Systems.classes[system]();
	window.requestAnimationFrame(Run);
}
window.requestAnimationFrame(Run);

let a = Entities.create(Components.RENDER_MASK);
Entities.addComponentsByMask(a,Components.COMPONENT_COLLISION);
// Entities.removeComponentsByMask(a,Components.COMPONENT_COLLISION);

let b = Entities.create(Components.IMAGE_MASK);
Entities.addComponentsByMask(b,COMPONENT_COLLISION);

console.log(Entities);
// console.log(MASK);