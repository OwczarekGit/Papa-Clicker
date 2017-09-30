//Functions
/*function musicVolume() {
    document.getElementById("bg-music").volume = 0.05;
}*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var autosaving = false;
var kremowki = 0;
var kremowkiPS = 0;
var kremowkiPC = 1;
var maledzieci = 0;
var cyganie = 0;
var studenci = 0;
var imigranci = 0;
var papaje = 0;

function savegame() {
    if (typeof (Storage) !== "undefined") {
        localStorage.ilosckrem = kremowki;
        localStorage.pckrem = kremowkiPC;
        localStorage.pskrem = kremowkiPS;
        localStorage.maledzieciilosc = maledzieci;
        localStorage.cyganieilosc = cyganie;
        localStorage.studenciilosc = studenci;
        localStorage.imigranciilosc = imigranci;
        localStorage.papajeilosc = papaje;
        autosaving = true;
        
        document.getElementById("infobox").innerHTML = 'Game Saved Succesfully';
        infobox();
    } else {
        alert("Nie można użyć localstorage");
    }
}
//Kremowka on click
function krmClicked() {
    clickAnim();
    kremowki += kremowkiPC;
    document.getElementById("ilosc").innerHTML = 'Kremówki: ' + kremowki;
}

//Male dzieci +1
function maledziecipc() {
    var koszt = 10 * Math.pow(1.15, maledzieci);
    
    koszt = Math.ceil(koszt);
    
    if (kremowki >= koszt) {
        maledzieci += 1;
        kremowki -= koszt;
        document.getElementById("maledzieciPC").innerHTML = 'Małe Dzieci: ' + maledzieci;
        kremowkiPC = 1 + maledzieci;
        document.getElementById("ilosc").innerHTML = 'Kremówki: ' + kremowki;
    } else {
        document.getElementById("infobox").innerHTML = 'Potrzebujesz: ' + koszt + ' kremówek';
        infobox();
    }
}

//Cyganie +1
function cyganieps() {
    var koszt = 1000*Math.pow(1.15, cyganie);
    koszt = Math.ceil(koszt);
    
    if (kremowki >= koszt) {
        cyganie += 1;
        kremowki -= koszt;
        document.getElementById("cyganieps").innerHTML = 'Cyganie: ' + cyganie;
        document.getElementById("ilosc").innerHTML = 'Kremówki: ' + kremowki;
    } else {
        document.getElementById("infobox").innerHTML = 'Potrzebujesz: ' + koszt + ' kremówek';
        infobox();
    }
}

//Studenci +1
function studencips() {
    var koszt = 10000*Math.pow(1.15, studenci);
    koszt = Math.ceil(koszt);

    if (kremowki >= koszt) {
        studenci += 1;
        kremowki -= koszt;
        document.getElementById("studencips").innerHTML = 'Studenci: ' + studenci;
        document.getElementById("ilosc").innerHTML = 'Kremówki: ' + kremowki;
    } else {
        document.getElementById("infobox").innerHTML = 'Potrzebujesz: ' + koszt + ' kremówek';
        infobox();
    }
}

//Imigranci +1
function imigrancips() {
    var koszt = 100000*Math.pow(1.15, imigranci);
    koszt = Math.ceil(koszt);
    
    if (kremowki >= koszt) {
        imigranci += 1;
        kremowki -= koszt;
        document.getElementById("imigrancips").innerHTML = 'Imigranci: ' + imigranci;
        document.getElementById("ilosc").innerHTML = 'Kremówki: ' + kremowki;
    } else {
        document.getElementById("infobox").innerHTML = 'Potrzebujesz: ' + koszt + ' kremówek';
        infobox();
    }
}

//Papaje +1
function papajeps() {
    var koszt = 10000000*Math.pow(1.15, papaje);
    koszt = Math.ceil(koszt);
    
    if (kremowki >= koszt) {
        papaje += 1;
        kremowki -= koszt;
        document.getElementById("papajeps").innerHTML = 'Papaje: ' + papaje;
        document.getElementById("ilosc").innerHTML = 'Kremówki: ' + kremowki;
    } else {
        document.getElementById("infobox").innerHTML = 'Potrzebujesz: ' + koszt + ' kremówek';
        infobox();
    }
}


//Click animation
async function clickAnim() {
    document.getElementById("click").classList.add("clicked-anim");
    await sleep(10);
    document.getElementById("click").classList.remove("clicked-anim");
}

//Kremowki per sec
function persec() {
    kremowki += kremowkiPS;
}

//Draw per sec
function drawpersec() {
    document.getElementById("displayps").innerHTML = 'Kremówek na sek: ' + kremowkiPS + " | " + kremowkiPC + " KPC";
    document.getElementById("ilosc").innerHTML = 'Kremówki: ' + kremowki;
}
setInterval(persec, 1000);
setInterval(drawpersec, 100);

//Count kremowki
function countall() {
    kremowkiPS = (cyganie * 5) + (studenci * 100) + (imigranci * 1000) + (papaje * 10000);
}
setInterval(countall, 100);

var hr = 0,
    min = 0,
    sec = 0;

function playtime() {
    document.getElementById("menu-item2").innerHTML = "Playtime <br/>" + hr + " Godzin <br/>" + min + " Minut <br/>" + sec + " Sekund <br/>";

    sec++;

    if (sec >= 60) {
        if(autosaving){
        savegame();
        }
        min++;
        sec = 0;
    }


    if (min >= 60) {
        hr++;
        min = 0;
    }
}
setInterval(playtime, 1000);

function refreshall() {
    document.getElementById("maledzieciPC").innerHTML = 'Małe Dzieci: ' + maledzieci;
    document.getElementById("cyganieps").innerHTML = 'Cyganie: ' + cyganie;
    document.getElementById("studencips").innerHTML = 'Studenci: ' + studenci;
    document.getElementById("imigrancips").innerHTML = 'Imigranci: ' + imigranci;
    document.getElementById("papajeps").innerHTML = 'Papaje: ' + papaje;
}

function loadgame() {
    if (typeof (Storage) !== undefined) {
        kremowki = parseInt(localStorage.ilosckrem);
        kremowkiPC = parseInt(localStorage.pckrem);
        kremowkiPS = parseInt(localStorage.pskrem);
        maledzieci = parseInt(localStorage.maledzieciilosc);
        cyganie = parseInt(localStorage.cyganieilosc);
        studenci = parseInt(localStorage.studenciilosc);
        imigranci = parseInt(localStorage.imigranciilosc);
        papaje = parseInt(localStorage.papajeilosc);
        refreshall();
        autosaving = true;
        
        document.getElementById("infobox").innerHTML = 'Game Loaded Succesfully';
        infobox();
    } else {}
}

async function infobox() {
        document.getElementById("infobox").classList.add("infoboxblink");
        await sleep(300);
        document.getElementById("infobox").classList.remove("infoboxblink");
}

//Executed onLoad
function defaultSettings() {
  loadSong();
}

window.onload = defaultSettings;

//Audio Player
var songs = ["Popsułe - JP2GMD.mp3","Wykop Beats - Inba Wciąż Trwa.mp3","Wzorowy Anon - Siedze na kurahenie.mp3","Wykop - Jan Paweł II jebał małe dzieci.mp3","Wadowice - Miasto Bestii.mp3","Jason Pawulo - Jebał.mp3","Jan Pawel 2 ft. Magik - To W Tym Miescie.mp3", "PSZCZÓŁKA MAJA SOBIE ZAPIERDALA.mp3","PAPIEŻ ZAWADIAKA.mp3"];

var song = new Audio();
var currentSong = 6;
song.volume = 0.05;
song.loop = true;

function loadSong(){
    song.src = "songs//" + songs[currentSong];
    document.getElementById("songTitle").textContent = songs[currentSong];
    nextSong = songs[currentSong + 1 % songs.length];
    song.play();
}

function playorpause(){
    if(song.paused){
        song.play();
        document.getElementById("playpause").innerHTML = "Pause";
    }else{
        song.pause();
        document.getElementById("playpause").innerHTML = "Play";
    }
}

function next(){
    if(currentSong > songs.length-2){
        currentSong = 0;
    }else{
        ++currentSong;
    }
    
    loadSong();
}

function previousSong(){
    currentSong--;
    currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
    loadSong();
}

function volumeup(){
    song.volume += 0.1;
}

function volumedown(){
    song.volume -= 0.1;
}

function mutesong(){
    if(!song.muted){
            song.muted = true;
            document.getElementById("muteUnmute").style.textDecoration = "line-through";

       }else{
           song.muted = false;
           document.getElementById("muteUnmute").style.textDecoration = "none";
       }
}