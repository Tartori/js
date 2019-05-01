var alphabetString =
  "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
  "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
  "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..;!=-.-.--";

function Char(value, string) {
  this.value = value;
  this.string = string;
}

function Font(name, chars) {
  this.name = name;
  this.alphabet = Object.create(null);
  self = this;
  chars.forEach((item, index) => {
    self.alphabet[item.value] = item.string;
  });
}
Font.prototype.render = function (text) {
  r = "";
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (this.alphabet[char]) {
      r += this.alphabet[char];
    }
    else {
      r += char;
    }
  }
  return r;
}

var chars = [];
var alphabet = alphabetString.split(";");

for (var i = 0; i < alphabet.length; i++) {
  var char = alphabet[i].split("=");
  chars.push(new Char(char[0], char[1]));
}


var morse = new Font("morse", chars);
console.log(morse.render("JS sucks"));

morse.render = function (text) {
  r = "";
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (this.alphabet[char]) {
      r += this.alphabet[char] + "/";
    }
    else {
      r += char;
    }
  }
  return r;
}


console.log(morse.render("JS sucks"));


(function($){
  //dostuff

  $.fn.morsefy=function(options){}
})(jquery)

var http = function(url){

}




// --- H E L P E R S ---
function log(text) {
	var l = document.getElementById('log');
	l.innerHTML += "<p>" + text + "</p>";
}

function state(text) {
	var s = document.getElementById('state');
	s.innerHTML = text;
}

function error(text) {
	var e = document.getElementById('error');
	e.innerHTML += "ERROR: " + text + "<br>";
}

// --- P R O M I S E S ---
function getQuote() {
	return new Promise(function(resolve, reject){

		var req = new XMLHttpRequest();
		req.open("GET", "https://www.sws.bfh.ch/~locher/cas-sd/js/services/quote.php");
		req.onreadystatechange = function() {
			if (this.readyState == 4 ) {
				if (this.status == 200) {
					resolve(this.responseText);
				} else {
					reject("An error occured (" + this.status + "): " + this.responseText );
				}
			}
		};
		req.send(null);
	});
}

function toMorse(text) {
	return new Promise(function(resolve, reject){
		var req = new XMLHttpRequest();
		req.open("GET", "https://www.sws.bfh.ch/~locher/cas-sd/js/services/morse.php?text="+text);
		req.onreadystatechange = function() {
			if (this.readyState == 4 ) {
				if (this.status == 200) {
					resolve(text + "<br/>" + this.responseText);
				} else {
					reject("An error occured (" + this.status + "): " + this.responseText);
				}
			}
		};
		req.send(null);
	});
}

function getQuoteMorse() {
	return getQuote()
		.then(quote => toMorse(quote))
		.then(morse => log(morse))
		.catch(e => {
			error(e);
			return getQuoteMorse();
		});
}

var promises = [];
for (var i = 0; i < 4; i++) {
	promises.push(getQuoteMorse());
}


Promise.all(promises)
	.then(results => state("DONE."));




//