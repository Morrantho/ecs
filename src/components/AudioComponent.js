class AudioComponent{
	constructor(src="res/snd/click.mp3"){
		this.audio=new Audio(src);
	}
}
Components.register("COMPONENT_AUDIO",AudioComponent);
Components.enum("AUDIO_MASK",Components.COMPONENT_AUDIO);