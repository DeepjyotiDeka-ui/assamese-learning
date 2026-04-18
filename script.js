
const vowels = [
  { letter: "অ", sound: "sounds/a.mp3", image: "images/a.png" },
  { letter: "আ", sound: "sounds/aa.mp3", image: "images/aa.png" },
  { letter: "ই", sound: "sounds/i.mp3", image: "images/i.png" },
  { letter: "ঈ", sound: "sounds/ii.mp3", image: "images/ii.png" },
  { letter: "উ", sound: "sounds/u.mp3", image: "images/u.png" },
  { letter: "ঊ", sound: "sounds/uu.mp3", image: "images/uu.png" },
  { letter: "ঋ", sound: "sounds/ri.mp3", image: "images/ri.png" },
  { letter: "এ", sound: "sounds/e.mp3", image: "images/e.png" },
  { letter: "ঐ", sound: "sounds/ai.mp3", image: "images/ai.png" },
  { letter: "ও", sound: "sounds/o.mp3", image: "images/o.png" },
  { letter: "ঔ", sound: "sounds/au.mp3", image: "images/au.png" }
];

const consonants = [
  { letter: "ক", sound: "sounds/ka.mp3", image: "images/ka.png" },
  { letter: "খ", sound: "sounds/kha.mp3", image: "images/kha.png" },
  { letter: "গ", sound: "sounds/ga.mp3", image: "images/ga.png" },
  { letter: "ঘ", sound: "sounds/gha.mp3", image: "images/gha.png" },
  { letter: "ঙ", sound: "sounds/nga.mp3", image: "images/nga.png" },
  { letter: "চ", sound: "sounds/cha.mp3", image: "images/cha.png" },
  { letter: "ছ", sound: "sounds/chha.mp3", image: "images/chha.png" },
  { letter: "জ", sound: "sounds/ja.mp3", image: "images/ja.png" },
  { letter: "ঝ", sound: "sounds/jha.mp3", image: "images/jha.png" },
  { letter: "ঞ", sound: "sounds/nya.mp3", image: "images/nya.png" },
  { letter: "ট", sound: "sounds/ta.mp3", image: "images/ta.png" },
  { letter: "ঠ", sound: "sounds/tha.mp3", image: "images/tha.png" },
  { letter: "ড", sound: "sounds/da.mp3", image: "images/da.png" },
  { letter: "ঢ", sound: "sounds/dha.mp3", image: "images/dha.png" },
  { letter: "ণ", sound: "sounds/naa.mp3", image: "images/naa.png" },
  { letter: "ত", sound: "sounds/too.mp3", image: "images/too.png" },
  { letter: "থ", sound: "sounds/tho.mp3", image: "images/tho.png" },
  { letter: "দ", sound: "sounds/do.mp3", image: "images/do.png" },
  { letter: "ধ", sound: "sounds/dho.mp3", image: "images/dho.png" },
  { letter: "ন", sound: "sounds/no.mp3", image: "images/na.png" },
  { letter: "প", sound: "sounds/pa.mp3", image: "images/pa.png" },
  { letter: "ফ", sound: "sounds/fha.mp3", image: "images/fha.png" },
  { letter: "ব", sound: "sounds/ba.mp3", image: "images/ba.png" },
  { letter: "ভ", sound: "sounds/bha.mp3", image: "images/bha.png" },
  { letter: "ম", sound: "sounds/ma.mp3", image: "images/ma.png" },
  { letter: "য", sound: "sounds/ya.mp3", image: "images/ya.png" },
  { letter: "ৰ", sound: "sounds/ra.mp3", image: "images/ra.png" },
  { letter: "ল", sound: "sounds/la.mp3", image: "images/la.png" },
  { letter: "শ", sound: "sounds/sha.mp3", image: "images/sha.png" },
  { letter: "ষ", sound: "sounds/ssa.mp3", image: "images/ssa.png" },
  { letter: "স", sound: "sounds/sa.mp3", image: "images/sa.png" },
  { letter: "হ", sound: "sounds/ha.mp3", image: "images/ha.png" },
  { letter: "ক্ষ", sound: "sounds/khy.mp3", image: "images/ksha.png" },
  { letter: "ড়", sound: "sounds/roh.mp3", image: "images/roh.png" },
  { letter: "ঢ়", sound: "sounds/dhroh.mp3", image: "images/dhroh.png" },
  { letter: "য়", sound: "sounds/yaa.mp3", image: "images/yaa.png" },
  { letter: "ৎ", sound: "sounds/tt.mp3", image: "images/tt.png" },
  { letter: "ং", sound: "sounds/uno.mp3", image: "images/uno.png" },
  { letter: "ঃ", sound: "sounds/bisa.mp3", image: "images/bisa.png" },
  { letter: "ঁ", sound: "sounds/chon.mp3", image: "images/chon.png" }
];

let group = localStorage.getItem("group");
let letters = group === "vowels" ? vowels : consonants;

let index = 0;

const preloadedImages = {};

function preloadImages() {
  letters.forEach(item => {
    const img = new Image();
    img.src = item.image;
    preloadedImages[item.image] = img;
  });
}
preloadImages();

function showLetter() {
  document.getElementById("letter").innerText = letters[index].letter;
  const imgElement = document.getElementById("letterImage");
  imgElement.src = preloadedImages[letters[index].image].src;
}

function goHome() {
  window.location.href = "index.html";
}

function nextLetter() {
  index++;
  if (index >= letters.length) index = 0;
  showLetter();
}

function playSound() {
  let audio = new Audio(letters[index].sound);
  audio.play();
}

function prevLetter() {
  index--;
  if (index < 0) index = letters.length - 1;
  showLetter();
}
showLetter();