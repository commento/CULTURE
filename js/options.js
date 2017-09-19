var metro = new Audio("snd/metro.mp3");
document.getElementById('metro').addEventListener('click', function(){
     if (metro.paused) {
       metro.play();
       document.getElementById('metrotext').style.visibility = 'visible';
       document.getElementById('metro').style.filter = 'brightness(20%)';
     }
});

metro.onended = function() {
  document.getElementById('metrotext').style.visibility = 'hidden';
  document.getElementById('metro').style.filter = 'brightness(100%)';
};

var gucci = new Audio("snd/gucci.mp3");
document.getElementById('gucci').addEventListener('click', function(){
     if (gucci.paused) {
       gucci.play();
       document.getElementById('guccitext').style.visibility = 'visible';
       document.getElementById('gucci').style.filter = 'brightness(20%)';
     }
});

gucci.onended = function() {
  document.getElementById('guccitext').style.visibility = 'hidden';
  document.getElementById('gucci').style.filter = 'brightness(100%)';
};

var savage = new Audio("snd/21.mp3");
document.getElementById('t1').addEventListener('click', function(){
     if (savage.paused) {
       savage.play();
       document.getElementById('21text').style.visibility = 'visible';
       document.getElementById('t1').style.filter = 'brightness(20%)';
     }
});

savage.onended = function() {
  document.getElementById('21text').style.visibility = 'hidden';
  document.getElementById('t1').style.filter = 'brightness(100%)';
};

var drake = new Audio("snd/drake.mp3");
document.getElementById('drake').addEventListener('click', function(){
     if (drake.paused) {
       drake.play();
       document.getElementById('draketext').style.visibility = 'visible';
       document.getElementById('drake').style.filter = 'brightness(20%)';
     }
});

drake.onended = function() {
  document.getElementById('draketext').style.visibility = 'hidden';
  document.getElementById('drake').style.filter = 'brightness(100%)';
};

var travis = new Audio("snd/travis.mp3");
document.getElementById('travis').addEventListener('click', function(){
     if (travis.paused) {
       travis.play();
       document.getElementById('travistext').style.visibility = 'visible';
       document.getElementById('travis').style.filter = 'brightness(20%)';
     }
});

travis.onended = function() {
  document.getElementById('travistext').style.visibility = 'hidden';
  document.getElementById('travis').style.filter = 'brightness(100%)';
};

var jahlil = new Audio("snd/jahlil.mp3");
document.getElementById('jahlil').addEventListener('click', function(){
     if (jahlil.paused) {
       jahlil.play();
       document.getElementById('jahliltext').style.visibility = 'visible';
       document.getElementById('jahlil').style.filter = 'brightness(20%)';
     }
});

jahlil.onended = function() {
  document.getElementById('jahliltext').style.visibility = 'hidden';
  document.getElementById('jahlil').style.filter = 'brightness(100%)';
};

var eoe = new Audio("snd/808.mp3");
document.getElementById('808').addEventListener('click', function(){
     if (eoe.paused) {
       eoe.play();
       document.getElementById('808text').style.visibility = 'visible';
       document.getElementById('808').style.filter = 'brightness(20%)';
     }
});

eoe.onended = function() {
  document.getElementById('808text').style.visibility = 'hidden';
  document.getElementById('808').style.filter = 'brightness(100%)';
};

var migos = new Audio("snd/migos.mp3");
document.getElementById('migos').addEventListener('click', function(){
     if (migos.paused) {
       migos.play();
       document.getElementById('migostext').style.visibility = 'visible';
       document.getElementById('migos').style.filter = 'brightness(20%)';
     }
});

migos.onended = function() {
  document.getElementById('migostext').style.visibility = 'hidden';
  document.getElementById('migos').style.filter = 'brightness(100%)';
};

var mike = new Audio("snd/mike.mp3");
document.getElementById('mike').addEventListener('click', function(){
     if (mike.paused) {
       mike.play();
       document.getElementById('miketext').style.visibility = 'visible';
       document.getElementById('mike').style.filter = 'brightness(20%)';
     }
});

mike.onended = function() {
  document.getElementById('miketext').style.visibility = 'hidden';
  document.getElementById('mike').style.filter = 'brightness(100%)';
};
