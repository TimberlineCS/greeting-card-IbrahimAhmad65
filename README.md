# Project 2: Greeting Card

- Author: Ibrahim Ahmad
- Class: APCSP
- Semester: Fall 2023

## Overview

This creates a webpage that shows an interactive greeting card.

## Compiling and Using

Clone the repository
Load the index.html file into Firefox.

## Discussion

My Primary problems occured with the `Press Me for a Snowy Suprise` button. First, I struggled to bind a function to the button, then I struggled with properly creating the snowflakes randomly.

I struggled with random positioning for a little, before I learned to append `"px"` to the end of the randomized number.

To do the santa animation and the moving word animation, I had to learn how to use the set interval;

Once that was completed my primary issues occurred when I tried to load the `App.js` as a module, as this violated a CORS Policy, so I had to either host the website as a local server, or to load the `App.js` as a single file, which I chose to do.

## Testing

I have verfied that the santa picture moves at the correct rate, the Happy Holidays sign also moves properly. I also refreshed the webpage many times to ensure correct ornament placement when random and correct snowflake placement.

## Extra Credit

I used `setInterval` to animate the santa, button, and greeting word. I also have an infinite amount of elements due to the create snow button. I also learned how to do random position generation using `Math.random()`

## Sources used

I used w3schools.com and stack overflow considerably. Aside from those, I used information from Notes Set 20-22
