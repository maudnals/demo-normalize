# demo-normalize 

A web app that normalizes artworks into a WebGL scene - the WEBGL scene is always the same, only the  

## Demo:  

* The cube's rotation speed depends on overall artwork saturation 
* The 3D scene's colors depend on the averaged color of the artwork. 



## Artists credits 

* Christian Marclay, Good Liquor Caused My Heart for to Sing, 2015 // https://www.sfmoma.org/artwork/2017.48.3.A-B
* Wayne Thiebaud, Display Cakes, 1963 // https://www.sfmoma.org/artwork/73.52
* Andrew Schoultz, Ten Thousand Leaves In Darkness, 2009 // https://www.sfmoma.org/artwork/2010.197
* Richard Mayhew, Delusions, 2000 // https://www.sfmoma.org/artwork/2017.73
* Harry Holtzman, Horizontal Volume, 1938-1946 // https://www.sfmoma.org/artwork/87.88

## Built with  
* Parcel
* WebGL 
* Custom imge operations in JS, could be replaced by WASM for efficiency! 

## Start project 

```
npm install
parcel serve index.html --public-url /
```
