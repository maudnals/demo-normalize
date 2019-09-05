# demo-normalize 

Normalize is a demo web app, that **translates artworks into a WebGL scene**.  
The scene's geomerty is always the same, but its features depend on the artwork displayed at its side.

## Demo  
<p align="center">
<img width="460" height="300" src="https://raw.githubusercontent.com/maudnals/demo-normalize/49012eecbb96275fca056bcb259be0e034c34813/doc/demo.gif">
</p> 

* The cube's **rotation speed** depends on overall artwork saturation;
* The 3D scene's **colors** depend on the averaged color of the artwork.  

## Artists credits 

* Christian Marclay, Good Liquor Caused My Heart for to Sing, 2015 // https://www.sfmoma.org/artwork/2017.48.3.A-B
* Wayne Thiebaud, Display Cakes, 1963 // https://www.sfmoma.org/artwork/73.52
* Andrew Schoultz, Ten Thousand Leaves In Darkness, 2009 // https://www.sfmoma.org/artwork/2010.197
* Richard Mayhew, Delusions, 2000 // https://www.sfmoma.org/artwork/2017.73
* Harry Holtzman, Horizontal Volume, 1938-1946 // https://www.sfmoma.org/artwork/87.88 

## Roadmap/todosuse open images

Refactor:

* [ ] arrow functions vs others
* [ ] clean ALL
* [ ] special functions for side effects!!! and dom commands!!!
* [ ] turn pixel functions into wasm via rust or assemblyscript
* [ ] async script in html?
* [ ] use ts
* [ ] move what can be to config file
* [ ] use redux for img etc
* [ ] separate data

Concept:

* [ ] do some more pixel operations (small coding challenge)
* [ ] use more data from the images/ do something more spectacular 
* [ ] make a cooler scene: add balls and other effects
* [ ] make it overall cooler: use microphone, camera, make it interactive... ???
* [ ] use some more nice webGL effects such as shaky shake

Doc:

* [ ] document functions and files

Bugs:

* [ ] why is image animation happening only certain times?

UI:

* [ ] use background position so that image is always nicely displayed
* [ ] support mobile devices: viewport, resize screen, but also buttons instead of arrows
* [ ] add window resize event
* [ ] add "noise" animation in between img changes
* [ ] use arrows to navigate and display this tip on screen
* [ ] display text on screen to explain what's happening

Artworks:

* [ ] use open images
* [ ] display artist credits  / artwork information
* [ ] automate artwork information retrieval -- write a scraper in node JS!

Social:

* [ ] publish on twitter

## Built with  
* Parcel
* WebGL 
* Custom imge operations in JS, should be replaced by Wasm for a better perf :)

## Start project 

```
npm install
parcel serve index.html --public-url /
```

## Feature ideas
Color
Histogram (contrast)
Signal to noise ratio 
Symetry
https://stackoverflow.com/questions/23213390/calculate-brighness-contrast-hue-and-saturation-level-in-an-image-using-java
