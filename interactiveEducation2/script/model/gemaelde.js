let Gemaelde = function(counter, bild, antwort1, antwort2, antwort3, frage, richtig, name, text){
    if(!bild){
        this.image = '.images/gemaelde1.jpg'
    } else {
        this.bild = bild;
    }
    this.counter = counter;
    this.antwort1 = antwort1;
    this.antwort2 = antwort2;
    this.antwort3 = antwort3;
    this.richtig = richtig;
    this.frage = frage;
    this.name = name;
    this.text = text;
}

export{Gemaelde}