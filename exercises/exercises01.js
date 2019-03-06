var alphabetString =
  "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
  "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
  "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

var alphabet = alphabetString.split(";");

var dict = {};

for (var a in alphabet) {
  var s = alphabet[a].split("=");
  dict[s[0]] = s[1];
}

function transformChar(c) {
  return dict[c];
}

function transformString(s) {
  for (var a in s) {
    console.log(transformChar(s[a]));
  }
}

function transformCharStupid(c) {
  for (var a in alphabet) {
    s = split("=");
    if (c === s[0]) {
      return s[1];
    }
  }
  return "unknown";
}