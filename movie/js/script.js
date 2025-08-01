const images = [
  "https://i.imgur.com/UePbdph.jpg", // Inception
  "https://i.imgur.com/2l5xBQ0.jpg", // Interstellar
  "https://i.imgur.com/qRZ6XHa.jpg", // Parasite
  "https://i.imgur.com/K3a9PTx.jpg", // The Batman
  "https://i.imgur.com/Hz3twB2.jpg", // Whiplash
  "https://i.imgur.com/TrwYjC1.jpg", // Joker
  "https://i.imgur.com/DWSVEqB.jpg", // La La Land
  "https://i.imgur.com/RfSYlpc.jpg", // Avengers Endgame
  "https://i.imgur.com/8ATrQFU.jpg", // The Matrix
  "https://i.imgur.com/lrEq0JZ.jpg", // The Dark Knight
  "https://i.imgur.com/6LXb6xu.jpg", // Fight Club
  "https://i.imgur.com/OhRweKT.jpg", // Dune
  "https://i.imgur.com/jJtKTpV.jpg", // Spirited Away
  "https://i.imgur.com/o8xKEBY.jpg", // Barbie
  "https://i.imgur.com/6pYBkN4.jpg"  // Oppenheimer
];

let index = 0;
const bg = document.getElementById("bg");

function changeBackground() {
  bg.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

// Set initial background immediately
changeBackground();

// Then start slideshow every 5 seconds
setInterval(changeBackground, 5000);

