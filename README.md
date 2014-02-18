#qb_music

QuickBot playing music with its motors :)

## Introduction

QuickBot is a simple wheeled robot, built as part of [Coursera "Control of Mobile Robots"
class](https://class.coursera.org/conrob-002). It uses BeagleBone Black ARM-based mini-computer
as its "brains".

Robot motors are driven by [PWM](http://en.wikipedia.org/wiki/Pulse-width_modulation) signal from BeagleBone.
When signal has power that is too low, motors won't move, but some parts within the motor vibrate at modulation frequency
which is not loud, but still can be heard clearly. By changing the frequency of modulation one can play rudimentary music.

This is a simple example that takes notes written in letter notation and plays them out.

## Running the code

Code is just a single file `music.js`. You can run it using BeagleBone Cloud9 environment or you can run it from BeagleBone command prompt.

### Running with Cloud9

I assume you already know the IP address (or network name) of your QuickBot. From your desktop connect to the Cloud9 IDE of the BeagleBone by
navigating to:

      http://beaglebone.local:3000

There, create a new JavaScript file and copy content of `music.js` (use "raw" view to copy content without html markup), and paste it as a content
of this file. Then run it!

### Running with command line

Login to your BeagleBone, and clone this repository:

       git clone https://github.com/pgmmpk/qb_music.git
       cd qb_music

Start script with `node` command:

       node music.js

## License
MIT

