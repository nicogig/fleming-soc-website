// NeoPixel Ring simple sketch (c) 2013 Shae Erisson
// released under the GPLv3 license to match the rest of the AdaFruit NeoPixel library

#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

// Which pin on the Arduino is connected to the NeoPixels?
// On a Trinket or Gemma we suggest changing this to 1
#define PIN            6

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS      12

// When we setup the NeoPixel library, we tell it how many pixels, and which pin to use to send signals.
// Note that for older NeoPixel strips you might need to change the third parameter--see the strandtest
// example for more information on possible values.
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);


void setup() {
  pixels.begin(); // This gets teh NeoPixel Library started.
}

void loop() {

  // For a set of NeoPixels the first NeoPixel is 0, second is 1, all the way up to the count of pixels minus one.

  //To set the colour of a single LED you need to know number of the LED
  //and the coulour you want. It uses RedGreenBlue(RGB). They can have
  //a value from 0 to 255

  //To light all LEDs it is easiest to use a for loop
  //This look sets all LEDS to the same colour
  for (char led = 0; led<NUMPIXELS; led++){
    //The code below sets the first three leds to red green and blue
    pixels.setPixelColor(led, pixels.Color(255,0,0)); 
  }


  //Whenever you change the colout of an LED you have to tell it to update.
  //This command does that!
  pixels.show();
}
