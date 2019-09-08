import images from "../assets/imgs/*.jpg";

export const imgs = images;

export const artworks = {
  // keys are used to match the artwork image file with the artwork info
  back: {
    openUrl:
      "https://www.metmuseum.org/art/collection/search/483434?&searchField=All&when=A.D.+1900-present&what=Paintings&ft=*&offset=0&rpp=20&amp;pos=9",
    title: "Seated Woman, Back View",
    year: "1917",
    author: "Egon Schiele",
    src: "MET"
  },
  gipsy: {
    openUrl:
      "https://www.metmuseum.org/art/collection/search/264528?&searchField=All&sortBy=Relevance&when=A.D.+1900-present&ft=*&offset=0&rpp=80&amp;pos=39",
    title: "A Gypsy Dancing-Girl, Kathiawar",
    year: "1915",
    author: "E. Taurines",
    src: "MET"
  },
  kirche: {
    openUrl:
      "https://www.metmuseum.org/art/collection/search/647787?&searchField=All&sortBy=Relevance&when=A.D.+1900-present&ft=*&offset=0&rpp=80&amp;pos=35",
    title: "Vienna: St. Michael's Church (Wien: Die Michaelerkirche)",
    year: "1908",
    author: "Urban Janke",
    src: "MET"
  },
  lion: {
    openUrl:
      "https://www.metmuseum.org/art/collection/search/438822?&searchField=All&when=A.D.+1900-present&what=Paintings&ft=*&offset=80&rpp=80&amp;pos=85",
    title: "The Repast of the Lion",
    year: "1907",
    author: "Henri Rousseau (le Douanier)",
    src: "MET"
  },
  moon: {
    openUrl:
      "https://www.metmuseum.org/art/collection/search/786297?&searchField=All&sortBy=Relevance&when=A.D.+1900-present&ft=*&offset=0&rpp=80&amp;pos=69",
    title:
      "Buzz Aldrin Walking on the Surface of the Moon Near a Leg of the Lunar Module",
    year: "1969",
    author: "Neil Armstrong",
    src: "MET"
  },
  prisoner: {
    openUrl:
      "https://www.metmuseum.org/art/collection/search/55368?&searchField=All&sortBy=Relevance&when=A.D.+1900-present&ft=*&offset=0&rpp=80&amp;pos=71",
    title: "Young Woman Looks at Silhouette of a Male Prisoner being Led Away",
    year: "Early 20th century",
    author: "Tomioka Eisen",
    src: "MET"
  },
  south: {
    openUrl:
      "https://www.metmuseum.org/art/collection/search/459094?&searchField=All&when=A.D.+1900-present&ft=*&offset=240&rpp=80&amp;pos=262",
    title: "Valley with Fir (Shade on the Mountain)",
    year: "1909",
    author: "Henri-Edmond Delacroix",
    src: "MET"
  },
  sumer: {
    openUrl:
      "https://www.metmuseum.org/art/collection/search/327394?&searchField=All&sortBy=Relevance&when=8000-2000+B.C.&ft=*&offset=640&rpp=80&amp;pos=652",
    title: "Foundation figure of a deity",
    year: "ca. 2500–2350 B.C",
    author: "Sumerian",
    src: "MET"
  },
  train: {
    openUrl:
      "https://www.metmuseum.org/art/collection/search/380531?&searchField=All&when=A.D.+1900-present&ft=*&offset=0&rpp=80&amp;pos=17",
    title: "Exactitude",
    year: "1929",
    author: "Pierre Fix-Masseau",
    src: "MET"
  }
};

export const imgIds = Object.keys(imgs);

export const info = imgIds.map(id => artworks[id]);

// Picture I liked: https://www.sfmoma.org/artwork/2010.203
