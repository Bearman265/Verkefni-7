/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.')
  play();
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {

  var rettsvor = 0;
  var medaltal = 0;
  var byrjun = performance.now();

  for(let i=0; i<GAMES_TO_PLAY; i++) {
    var leikur = Boolean(ask());
    if(leikur==true) {
      rettsvor++;
    }
    else {
      rettsvor = rettsvor;
    }
  }

  var lok = performance.now();
  //til þess að skipta yfir í sekúndur úr millísekúndum.
  var timi = (lok-byrjun)/1000;
  var lokatimi = timi.toFixed(2);
  medaltal = rettsvor/lokatimi;
  rettMedal = medaltal.toFixed(2);
  alert('Þú svaraðir '+rettsvor+' spurningum rétt á '+ lokatimi+ ' sekúndum! \n Meðalrétt svör á sekúndu eru '+rettMedal);
  if(confirm('Spila annan leik?')==true) {
    start();
  }
  else {
    exit();
  }
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  const virkiFylki = ['+','-','*','/'];
  const virki = virkiFylki[randomNumber(0,3)];
  

  if(virki=='+') {
    const a = randomNumber(1,100);
    const b = randomNumber(1,100);
    const c = a+b;
    const input = prompt('Hvað er '+ a +'+'+b+'?');
    const parsedInput = parseGuess(input);
    if(parsedInput==c) {
      return true;
    }
    else if (parsedInput == null) {
      alert('Hætt í leik');
      if(confirm('Spila annan leik?')==true) {
        start();
      }
      else {
        exit();
      }
    }
    else {
      return false;
    }
  }
  else if(virki=='-') {
    const a = randomNumber(1,100);
    const b = randomNumber(1,100);
    const c = a-b;
    const input = prompt('Hvað er '+ a +'-'+b+'?');
    const parsedInput = parseGuess(input);
    if(parsedInput==c) {
      return true;
    }
    else if (parsedInput == null) {
      alert('Hætt í leik');
      if(confirm('Spila annan leik?')==true) {
        start();
      }
      else {
        exit();
      }
    }
    else {
      return false;
    }
  }
  else if(virki=='*') {
    const a = randomNumber(1,10);
    const b = randomNumber(1,10);
    const c = a*b;
    const input = prompt('Hvað er '+ a +'*'+b+'?');
    const parsedInput = parseGuess(input);
    if(parsedInput==c) {
      return true;
    }
    else if (parsedInput == null) {
      alert('Hætt í leik');
      if(confirm('Spila annan leik?')==true) {
        start();
      }
      else {
        exit();
      }
    }
    else {
      return false;
    }
  }
  else {
    const b = randomNumber(2,10);
    const a = b*randomNumber(2,10);
    const c = a/b;
    const input = prompt('Hvað er '+ a +'/'+b+'?');
    const parsedInput = parseGuess(input);
    if(parsedInput==c) {
      return true;
    }
    else if (parsedInput == null) {
      alert('Hætt í leik');
      if(confirm('Spila annan leik?')==true) {
        start();
      }
      else {
        exit();
      }
    }
    else {
      return false;
    }
  }
}

function parseGuess(input) {
  const parsed = parseInt(input,10);
  if(isNaN(parsed)) {
    return null;
  }
  return parsed;
}
/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();