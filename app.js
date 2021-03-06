// Data arrays
const structureA = [
  "Champ,",
  "Fact:",
  "Everybody says",
  "Dang..",
  "Check it:",
  "Just saying...",
  "Superstar,",
  "Tiger,",
  "Self,",
  "Know this:",
  "News alert:",
  "Girl,",
  "Ace,",
  "Excuse me but",
  "Experts agree",
  "In my opinion",
  "Hear ye, hear ye:",
  "Okay, Listen up:",
];

const structureB = [
  "the mere idea of you",
  "your soul",
  "your hair today",
  "everything you do",
  "your personal style",
  "every thought you have",
  "that sparkle in your eye,",
  "your presence here",
  "what you got going on",
  "the essential you",
  "your life's journey",
  "that saucy personality",
  "your DNA",
  "that brain of yours",
  "your choice of attire",
  "the way you roll",
  "whatever your secret is",
  "all of y'all",
];

const structureC = [
  "has serious game,",
  "rains magic,",
  "deserves the Nobel Prize,",
  "raises the roof,",
  "breeds miracles,",
  "is paying off big time,",
  "shows mad skills,",
  "just shimmers,",
  "is a national treasure,",
  "gets the party hopping,",
  "is the next big thing,",
  "roars like a lion,",
  "is a rainbow factory,",
  "is made of diamonds,",
  "makes birds sing,",
  "should be taught in school,",
  "makes my world go 'round,",
  "is 100% legit,",
];

const structureD = [
  "24/7.",
  "can I get an amen?",
  "and that's a fact.",
  "so treat yourself.",
  "you feel me?",
  "that's just science",
  "would I lie?",
  "for reals.",
  "mic drop.",
  "you hidden gem.",
  "snuggle bear.",
  "period.",
  "can I get an amen?",
  "now let's dance.",
  "high five.",
  "say it again!",
  "according to CNN.",
  "so get used to it",
];

// initialize random indices
let randomIndexA = 0;
let randomIndexB = 0;
let randomIndexC = 0;
let randomIndexD = 0;

//initialize sentence string
let sentence = "";

// Selectors
const targetParagraph = document.getElementById("generated-sentence");
const button = document.querySelector("input");

// Functions

// get random indices for each of the 4 data arrays
const setRandomIndices = () => {
  randomIndexA = Math.floor(Math.random() * structureA.length);
  randomIndexB = Math.floor(Math.random() * structureB.length);
  randomIndexC = Math.floor(Math.random() * structureC.length);
  randomIndexD = Math.floor(Math.random() * structureD.length);
  sentenceGenerator();
};

// use interpolation to generate a string from the arrays. Then add the string to the DOM
const sentenceGenerator = () => {
  sentence = `"${structureA[randomIndexA]} ${structureB[randomIndexB]} ${structureC[randomIndexC]} ${structureD[randomIndexD]}"`;

  targetParagraph.textContent = sentence;
};

//Event Listener
button.addEventListener("click", setRandomIndices);
