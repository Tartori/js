(function ($) {
  function Char(value, string) {
    this.value = value;
    this.string = string;
  }

  function Font(name, chars) {
    this.name = name;
    this.alphabet = Object.create(null);
    self = this;
    chars.forEach((item, index) => {
      self.alphabet[item.value] = item;
    });
  }

  Font.prototype.render = function (text) {
    var line = "";
    for (var i in text) {
      var char = text[i];
      line += this.renderChar(char);
    }
    return line;
  }

  Font.prototype.renderChar = function (char) {
    if (this.alphabet[char]) {
      return this.alphabet[char].string;
    }
    else {
      return char;
    }
  }

  Font.prototype.write = function (text, to) {
    to = to || console.log;
    to(this.render(text));
  }

  var alphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =;.=.-.-.-;,=--..--;?=..--..";

  var chars = [];
  var alphabet = alphabetString.split(";");

  for (var i = 0; i < alphabet.length; i++) {
    var char = alphabet[i].split("=");
    chars.push(new Char(char[0], char[1]));
  }


  var morse = new Font("morse", chars);

  morse.render = function (text) {
    var line = "";
    for (var i = 0; i < text.length; i++) {
      var char = text[i].toLowerCase();
      if (i) {
        line += "/"
      }
      line += this.renderChar(char);
    }
    return line;
  }

  $.fn.morserify = function (_) {
    return this.each(function () {
      this.innerHtml = morse.render(this.innerHtml);
    });
  }

}
)(jQuery)