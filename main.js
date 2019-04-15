const piano = new Piano(document.getElementById("piano"), 
    { 
        whiteKeys: { width: 30, height: 100 }, 
        blackKeys: { width: 25, height: 50 }, 
        numKeys: 7 
    });

piano.draw();

/**
 * Example
 *  //create a synth and connect it to the master output (your speakers)
 *  var synth = new Tone.Synth().toMaster();
 *   
 *  //play a middle 'C' for the duration of an 8th note
 *  synth.triggerAttackRelease("C4", "8n");
 */ 

 //create a synth and connect it to the master output (your speakers)

 //var synth = new Tone.Synth().toMaster();

var distortion = new Tone.Distortion(0.6);
var tremolo = new Tone.Tremolo().start();

var polySynth = new Tone.PolySynth(4, Tone.Synth).chain(distortion, tremolo, Tone.Master);



//play a middle 'C' for the duration of an 8th note
//synth.triggerAttackRelease("D4", "8n");

document.addEventListener('keydown',function(evento){
    if(evento.keyCode == '65'){
        piano.setNote("C",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("C4", "8n");
    }
    if(evento.keyCode == '87'){//É nosso!!! 2008 também!!! Não somos....
        piano.setNote("C#",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("C#4", "8n");
    }
    if(evento.keyCode == '83'){
        piano.setNote("D",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("D4", "8n");
    }
    if(evento.keyCode == '69'){
        piano.setNote("D#",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("D#4", "8n");
    }
    if(evento.keyCode == '68'){
        piano.setNote("E",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("E4", "8n");
    }
    if(evento.keyCode == '70'){
        piano.setNote("F",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("F4", "8n");
    }
    if(evento.keyCode == '84'){
        piano.setNote("F#",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("F#4", "8n");
    }
    if(evento.keyCode == '71'){
        piano.setNote("G",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("G4", "8n");
    }
    if(evento.keyCode == '89'){
        piano.setNote("G#",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("G#4", "8n");
    }
    if(evento.keyCode == '72'){
        piano.setNote("A",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("A4", "8n");
    }
    if(evento.keyCode == '85'){
        piano.setNote("A#",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("A#4", "8n");
    }
    if(evento.keyCode == '74'){
        piano.setNote("B",true);
        piano.draw();
        
        //play a middle 'C' for the duration of an 8th note
        polySynth.triggerAttackRelease("B4", "8n");
    }
})

document.addEventListener('keyup',function(evento){
    if(evento.keyCode == '65'){
        piano.setNote("C",false);
        piano.draw();
        
    }
    if(evento.keyCode == '87'){
        piano.setNote("C#",false);
        piano.draw();
        
    }
    if(evento.keyCode == '83'){
        piano.setNote("D",false);
        piano.draw();
        
    }
    if(evento.keyCode == '69'){
        piano.setNote("D#",false);
        piano.draw();
        
    }
    if(evento.keyCode == '68'){
        piano.setNote("E",false);
        piano.draw();
        
    }
    if(evento.keyCode == '70'){
        piano.setNote("F",false);
        piano.draw();
        
    }
    if(evento.keyCode == '84'){
        piano.setNote("F#",false);
        piano.draw();
        
    }
    if(evento.keyCode == '71'){
        piano.setNote("G",false);
        piano.draw();
        
    }
    if(evento.keyCode == '89'){
        piano.setNote("G#",false);
        piano.draw();
        
    }
    if(evento.keyCode == '72'){
        piano.setNote("A",false);
        piano.draw();
        
    }
    if(evento.keyCode == '85'){
        piano.setNote("A#",false);
        piano.draw();
        
    }
    if(evento.keyCode == '74'){
        piano.setNote("B",false);
        piano.draw();
        
    }
})