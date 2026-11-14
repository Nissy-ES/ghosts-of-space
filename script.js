const artifacts = [
 {id:"sojourner",name:"Sojourner",destination:"MARS · 1997",icon:"🤖",intro:"A tiny rover carried inside Pathfinder became the first wheeled vehicle to operate on Mars.",facts:[["Mission","Mars Pathfinder"],["Role","Technology + science demonstrator"],["Status","Inactive on Mars"]],steps:[
  ["01 · WHY","NASA needed to prove that a rover could survive landing on Mars and move around its surface. Sojourner was small, but its mission tested a completely new way of exploring another planet."],
  ["02 · ARRIVAL","Mars Pathfinder landed in Ares Vallis on July 4, 1997. Sojourner rolled down from the lander and began examining rocks and soil around the landing site."],
  ["03 · SCIENCE","The rover used cameras and an Alpha Proton X-ray Spectrometer to study rocks and soil. Its work helped scientists interpret the geology around the landing site."],
  ["04 · LEGACY","Sojourner demonstrated that mobile robotic exploration on Mars was practical. Later generations — Spirit, Opportunity, Curiosity and Perseverance — could build on that path."],
  ["05 · TODAY","Sojourner is no longer operating. But the small rover remains on Mars as a physical reminder that one of the biggest changes in planetary exploration began with a machine only about the size of a microwave oven."]
 ]},
 {id:"spirit",name:"Spirit",destination:"MARS · 2004",icon:"🛞",intro:"Designed for a 90-sol mission, Spirit kept exploring for years and uncovered evidence of ancient water activity.",facts:[["Mission","Mars Exploration Rover"],["Designed for","90 sols"],["Last contact","2010"],["Status","Inactive on Mars"]],steps:[
  ["01 · THE PLAN","Spirit was one half of NASA's twin Mars Exploration Rover mission. Its original mission was designed for roughly 90 Martian days — a deliberately cautious target."],
  ["02 · THE SURFACE","After landing in Gusev Crater, Spirit used its instruments to examine rocks, soil and the Martian landscape, moving far beyond the assumptions of a short demonstration."],
  ["03 · WATER'S TRACE","Spirit's investigations found geological evidence consistent with past water-related activity, including altered minerals and deposits formed under ancient environmental conditions."],
  ["04 · THE EXTRAORDINARY","Spirit survived far beyond its planned mission. It eventually became stuck in soft soil and, after surviving multiple harsh Martian winters, communication was lost in 2010."],
  ["05 · LEGACY","Spirit showed that long-lived robotic fieldwork could turn a landing site into a geological story. Its sister rover Opportunity continued this legacy on the other side of Mars."]
 ]},
 {id:"ingenuity",name:"Ingenuity",destination:"MARS · 2021–2024",icon:"🚁",intro:"A small experimental helicopter became the first aircraft to achieve powered, controlled flight on another planet.",facts:[["Mission","Mars 2020"],["First flight","April 19, 2021"],["Flights","72"],["Status","Stationary on Mars"]],steps:[
  ["01 · THE BET","Ingenuity was not originally the main science mission. It was a technology demonstration: could a rotorcraft actually fly in Mars' extremely thin atmosphere?"],
  ["02 · FIRST FLIGHT","On April 19, 2021, Ingenuity completed the first powered, controlled flight on another planet. The flight lasted less than a minute, but its significance was enormous."],
  ["03 · BEYOND FIVE","The helicopter was designed for just a handful of demonstration flights. Instead, it completed 72 flights and became a scouting partner for the Perseverance rover."],
  ["04 · THE END","In January 2024, rotor damage prevented Ingenuity from continuing normal flight operations. The helicopter remains on Mars, while Perseverance continues its own mission."],
  ["05 · LEGACY","Ingenuity changed the engineering conversation around aerial exploration of Mars. Future rotorcraft concepts can now begin from real flight experience rather than theory alone."]
 ]},
 {id:"lrv",name:"Lunar Rover",destination:"MOON · 1971–1972",icon:"🌙",intro:"The Apollo Lunar Roving Vehicles let astronauts travel farther from their lunar landing sites and bring science home.",facts:[["Missions","Apollo 15, 16, 17"],["Type","Battery-powered vehicle"],["Drivers","Astronauts"],["Status","Parked on the Moon"]],steps:[
  ["01 · WHY WHEELS?","Walking limited how far astronauts could safely travel while carrying scientific equipment. A lightweight electric rover could multiply the area they could investigate."],
  ["02 · APOLLO 15","The first Lunar Roving Vehicle was deployed during Apollo 15. Astronauts used it to travel across the lunar surface, carrying tools and collecting samples."],
  ["03 · THREE MISSIONS","LRVs were used on Apollo 15, Apollo 16 and Apollo 17. Each mission expanded the amount of terrain astronauts could reach and study."],
  ["04 · LEFT BEHIND","The rovers were never designed to return to Earth. Their final parking places remain on the Moon, where they are among humanity's most literal pieces of off-world hardware."],
  ["05 · LEGACY","The LRV demonstrated the value of mobility in planetary exploration — an idea echoed by robotic rovers that followed decades later."]
 ]},
 {id:"near",name:"NEAR Shoemaker",destination:"EROS · 2000–2001",icon:"☄️",intro:"A spacecraft designed to orbit an asteroid became the first mission to land on one.",facts:[["Target","433 Eros"],["Orbit","2000"],["Landing","2001"],["Status","Resting on Eros"]],steps:[
  ["01 · THE TARGET","433 Eros is an asteroid — a leftover building block from the early Solar System. Studying it offered scientists a close look at material preserved from planetary formation."],
  ["02 · FIRST ORBIT","NEAR Shoemaker entered orbit around Eros in February 2000, becoming the first spacecraft to orbit an asteroid."],
  ["03 · CLOSE ENCOUNTER","The mission mapped Eros and studied its surface composition, geology, mass and internal structure, turning a distant point of light into a detailed world."],
  ["04 · THE LANDING","On February 12, 2001, controllers guided NEAR Shoemaker down to the surface. It became the first spacecraft to land on an asteroid."],
  ["05 · NOT REALLY THE END","Although the spacecraft was not originally designed as a surface lander, it survived the landing and transmitted additional scientific data. Its final resting place is now part of the asteroid itself."]
 ]}
];

const cards = document.querySelector("#cards");
artifacts.forEach(a=>{
 const el=document.createElement("article"); el.className="card"; el.tabIndex=0;
 el.innerHTML=`<div><div class="card-art">${a.icon}</div><small>${a.destination}</small><h3>${a.name}</h3><p>${a.intro}</p></div><div class="arrow">→</div>`;
 el.onclick=()=>openStory(a); el.onkeydown=e=>{if(e.key==="Enter")openStory(a)};
 cards.appendChild(el);
});

let current, step=0;
const story=document.querySelector("#story");
function openStory(a){
 current=a; step=0; story.classList.remove("hidden"); renderStory();
 story.scrollIntoView({behavior:"smooth",block:"start"});
}
function renderStory(){
 document.querySelector("#storyVisual").textContent=current.icon;
 document.querySelector("#storyDestination").textContent=current.destination;
 document.querySelector("#storyTitle").textContent=current.name;
 document.querySelector("#storyIntro").textContent=current.intro;
 document.querySelector("#storyFacts").innerHTML=current.facts.map(f=>`<div class="fact"><strong>${f[0]}</strong>${f[1]}</div>`).join("");
 document.querySelector("#storyProgress").textContent=`CHAPTER ${step+1} / ${current.steps.length} · ${current.steps[step][0]}`;
 document.querySelector("#storyText").textContent=current.steps[step][1];
 document.querySelector("#prevStep").disabled=step===0;
 document.querySelector("#nextStep").textContent=step===current.steps.length-1?"Explore another artifact →":"Next chapter →";
}
document.querySelector("#closeStory").onclick=()=>story.classList.add("hidden");
document.querySelector("#prevStep").onclick=()=>{if(step>0){step--;renderStory()}};
document.querySelector("#nextStep").onclick=()=>{if(step<current.steps.length-1){step++;renderStory()}else{story.classList.add("hidden");document.querySelector("#explore").scrollIntoView({behavior:"smooth"})}};
document.querySelector("#randomBtn").onclick=()=>openStory(artifacts[Math.floor(Math.random()*artifacts.length)]);

const soundBtn = document.querySelector("#soundBtn");

soundBtn.onclick = () => {

    // Check whether a story has been opened
    if (!current) {
        alert("Please select an artifact first!");
        return;
    }

    // Check whether the browser supports speech
    if (!("speechSynthesis" in window)) {
        alert("Text-to-speech is not supported in this browser.");
        return;
    }

    // If narration is already playing, stop it
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        soundBtn.textContent = "🔊";
        return;
    }

    // Prepare the current chapter for narration
    const textToRead =
        current.name + ". " +
        current.steps[step][0] + ". " +
        current.steps[step][1];

    // Convert text into speech
    const speech = new SpeechSynthesisUtterance(textToRead);

    speech.rate = 0.9;

    // Start narration
    speechSynthesis.speak(speech);

    soundBtn.textContent = "🔇";

    // Restore icon after narration finishes
    speech.onend = () => {
        soundBtn.textContent = "🔊";
    };
};
