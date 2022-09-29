const showVerb= document.getElementById('showVerb');
const showImage= document.getElementById('showImage');
const showAudio= document.getElementById('showAudio');

const first = document.getElementById('first-verb');
const second = document.getElementById('second-verb');
const third = document.getElementById('third-verb');
const forth = document.getElementById('fourth-verb');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allrightCounter = document.getElementById('all-right-answare');
const verbsContainer = document.getElementById('verbs-container ');

//const numberOfVerbs = verbs.length;

let answareRoullete= [0,1,1,1];
let everyNumberOfVerbs = [];
let rightAnsware;
let allRightAnsware;

next.addEventListener('click', function(){
    ponerVerbo();
    //next.style.display='none';
});

function ponerVerbo(){
showVerb.innerHTML = "deposita 200 bitcoins para jugar"
}




