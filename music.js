/**
 * Mike Kroutikov (c) 2014
 * 
 * Plays music using QuickBot motor in under-powered mode.
 */
var bs = require('bonescript');

// generates table of frequencies for notes
// see: http://www.phy.mtu.edu/~suits/NoteFreqCalcs.html
function generateFrequencyTable() {
    var noteNames = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    var root12_2 = 1.059463094359;
    var freq_by_note = {};
    
    // fill 4, 5, 6, and 7 octaves
    var freq = 440.0; // A4
    ['4', '5', '6', '7'].forEach(function(octave) {
        var f = freq;
        noteNames.forEach(function(name) {
            freq_by_note[name + octave] = f;
            f *= root12_2;
        });
        freq *= 2;
    });
    
    return freq_by_note;
}

function play(pwm_pin, notes, tempo) {
    var freq_by_note = generateFrequencyTable();
    var noteSequence = notes.split(' ');
    
    console.log('Playing note sequence: ', noteSequence);
    
    var index = 0;
    (function playNextNote(){
        var name = noteSequence[index++];
        
        if (!name) {
            // stop the music
            bs.analogWrite(pwm_pin, 0.0, 100);
        } else {
            var freq = freq_by_note[name];
            
            if (!freq) {
                throw new Error('unknown note name: ' + name);
            }
            
            bs.analogWrite(pwm_pin, 0.1, freq);
            setTimeout(playNextNote, tempo);
        }
    })();
}

var fur_elise = 'E4 D#4 E4 D#4 E4 B4 D4 C4 A4';

play('P9_14', fur_elise, 500);
