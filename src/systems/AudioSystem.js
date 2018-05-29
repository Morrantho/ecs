const AudioSystem =()=>{
	Entities.execute(Components.AUDIO_MASK,(id)=>{
		let audio = Entities.AudioComponent[id];

		if(!audio.audio.isPlaying()){
			// audio.audio.play();
		}
	});
}
Systems.register(AudioSystem);