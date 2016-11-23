//                       Generador de oraciones simples
/* user input
var userArt = [];
var userSust = [];
var userAdj = []; */

// colecciones predeterminadas
var sust = {'el':'raton', 'la':'garra', 'la':'nave', 'la':'cobardía',
'el':'bazuca', 'el':'cuaderno', 'la':'caja', 'el':'ventanal', 'unos':'ladrones',
'las':'aves', 'unas':'cosas', 'una':'pata'};

var adj = ['genial', 'excelente', 'aburrido', 'estupido', 'nuevo', 'viejo',
'malisimo', 'malvado', 'humilde', 'generoso', 'inteligente', 'loco',
'dañado'];

var adv = [
// adverbios de lugar
'cerca', 'lejos', 'enfrente', 'detrás', 'arriba', 'encima',
'debajo', 'fuera', 'aquí', 'ahí', 'allí', 'acá', 'allá', 'acullá',

// adverbios de tiempo
 'antes', 'después', 'luego', 'despacio', 'aprisa', 'aun', 'todavía',
 'siempre', 'nunca', 'jamás'

];

var advModo = [
  // adverbios de modo
   'bien', 'mal', 'de buena manera', 'de mala manera',
   'fácilmente', 'justamente', 'espectacularmente'
];

var advInt = [
  // adverbios intensificadores
  'muy', 'apenas', 'casi', 'más que', 'sin duda', 'algunos dirian'
];

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var madlibs = function() {
  var oracion = [];
  var userSust = window.prompt('Escribe un sustantivo \
  (es decir el nombre de un objeto o cosa).');
  var userArt = window.prompt('Ahora escribe el artículo para ese \
   sustantivo (por ejemplo: El, La, Los, Las, Unos, Unas, etc)');
  var userAdj = window.prompt('Dame un adjetivo para tu objeto \
  (una caracteristica, por ejemplo: audaz, tonto, malvado, bueno, etc)');
  var userVerb = window.prompt('Elige un verbo! (una accion)');
  // El input se agrega a un array
  oracion.push(toLowerCase(userArt));
  oracion.push(toLowerCase(userSust));
  oracion.push(toLowerCase(userAdj));
  oracion.push(toLowerCase(userVerb));
// luego se agregan adverbios aleatorios
  oracion.push(advInt[randPick(advInt)]);
  oracion.push(advModo[randPick(advModo)]);
  // se crea un string
  var result = oracion.join(' ');
// finalmente se muestra al jugador
  document.getElementById('story').innerHTML = result;
};

var randPick = function(listado) {
  return getRandomInt(0, listado.length);
};
