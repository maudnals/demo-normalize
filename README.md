# demo-normalize

Normalize is a demo web app, that **translates artworks into a WebGL scene**.  
The scene's geomerty is always the same, but its features depend on the artwork displayed at its side.

## Demo
<p align="center">
<img width="460" height="300" src="https://raw.githubusercontent.com/maudnals/demo-normalize/49012eecbb96275fca056bcb259be0e034c34813/doc/demo.gif">
</p>

* The cube's **rotation speed** depends on overall artwork saturation;
* The 3D scene's **colors** depend on the average color of the artwork.  

## Sources

https://en.wikipedia.org/wiki/Cultural_homogenization 

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

// `img` vs `artwork`
// rename `go`
// img wrapper vs subwrapper in css
// add deep linking

Concept:

* [ ] do some more pixel operations (small coding challenge)
* [ ] use more data from the images/ do something more spectacular 
* [ ] make a cooler scene: add balls and other effects
* [ ] make it overall cooler: use microphone, camera, make it interactive... ???
* [ ] use some more nice webGL effects such as shaky shake
* [ ] input data to use: brightness, saturation, Year, Technique, Joyful, Crop

Doc/chore:

* [ ] document functions and files
* [ ] lint
* [ ] answer questions doc
* [ ] update README

Bugs:

* [ ] why is image animation happening only certain times?

UI:

* [x] use background position so that image is always nicely displayed
* [ ] support mobile devices: viewport, but also buttons instead of arrows
* [ ] add window resize event
* [ ] add "noise" animation in between img changes
* [ ] use arrows to navigate and display this tip on screen
* [ ] display text on screen to explain what's happening
* [ ] display variables on screen

Artworks:

* [x] use open images
* [x] display artist credits  / artwork information
* [ ] automate artwork information retrieval -- write a scraper in node JS!

Social:

* [ ] publish on twitter

## Built with

* Parcel
* WebGL
* Custom imge operations in JS, should be replaced by Wasm for a better perf :)

## Start project

```bash
npm install
parcel serve index.html --public-url /
```

## Feature ideas

Color
Histogram (contrast)
Signal to noise ratio
Symetry
https://stackoverflow.com/questions/23213390/calculate-brighness-contrast-hue-and-saturation-level-in-an-image-using-java
