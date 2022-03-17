import {Gemaelde} from "./model/gemaelde.js";

let gemaelde = [];
gemaelde.push(new Gemaelde(1, './images/gemaelde1.jpg', 'Michelangelo', 'Vincent Van Gogh', 'Leonardo da Vinci', 'Wer ist der Künstler?', 'antwort1'));
gemaelde.push(new Gemaelde(2, './images/gemaelde2.jpg', 'Claude Monet', 'Leonardo da Vinci', 'Albrecht Dürer', 'Wer ist der Künstler?', 'antwort2'));
gemaelde.push(new Gemaelde(3, './images/gemaelde3.jpg', 'Pablo Picasso', 'Vincent Van Gogh', 'Johannes Vermeer', 'Wer ist der Künstler?', 'antwort3'));
gemaelde.push(new Gemaelde(4, './images/gemaelde4.jpg', 'Peter Paul Rubens', 'Georges Seurat', 'Pablo Picasso', 'Wer ist der Künstler?', 'antwort3'));
gemaelde.push(new Gemaelde(5, './images/gemaelde5.jpg', 'Claude Monet', 'Salvador Dali', 'Vincent Van Gogh', 'Wer ist der Künstler?', 'antwort1'));
gemaelde.push(new Gemaelde(6, './images/gemaelde6.jpg', 'Edward Munch', 'Peter Paul Rubens', 'Salvador Dali', 'Wer ist der Künstler?', 'antwort3'));
gemaelde.push(new Gemaelde(7, './images/gemaelde7.jpg', 'Georges Seurat', 'Michelangelo', 'Salvador Dali', 'Wer ist der Künstler?', 'antwort1'));
gemaelde.push(new Gemaelde(8, './images/gemaelde8.jpg', 'Albrecht Dürer', 'Vincent Van Gogh', 'Edward Munch', 'Wer ist der Künstler?','antwort3'));
gemaelde.push(new Gemaelde(9, './images/gemaelde9.jpg', 'Michelangelo', 'Leonardo da Vinci', 'Pablo Picasso', 'Wer ist der Künstler?', 'antwort1'));
gemaelde.push(new Gemaelde(10, './images/gemaelde10.jpg', 'Pablo Picasso', 'Vincent Van Gogh', 'Claude Monet', 'Wer ist der Künstler?', 'antwort2'));
/* Richtige Antworten
1: Michelangelo
2: Leonardi da Vinci
3: Johannes Vermeer
4: Pablo Picasso
5: Claude Monet
6: Salvador Dali
7: Georges Seurat
8: Edward Munch
9: Michelangelo
10: VincentVan Gogh

 */
let vm = new Vue({
    el: "#app",

    data:{
        gemaelde: gemaelde,
        nextBild: false,
        currentPic: gemaelde[0]

    },
    methods:{
        getRandomInt(min,max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        //nächstes Bild
        nextpic(){
            let randomCounter = this.getRandomInt(1,10);
            console.log(randomCounter);
            this.currentPic =  gemaelde.find(element => element.counter === randomCounter);
            console.log(this.currentPic);
            this.nextBild = true;
            
            //change color back to black
            document.getElementById("antwort1").style.background='#000000';
            document.getElementById("antwort2").style.background='#000000';
            document.getElementById("antwort3").style.background='#000000';

            return this.currentPic;
        },

        //color changing Answers
        checkAnswer1(){
            if('antwort1' === this.currentPic.richtig){
                document.getElementById("antwort1").style.background='#228B22';
            } else {
                document.getElementById("antwort1").style.background='#B22222';
            }
        },

        checkAnswer2(){
            if('antwort2' === this.currentPic.richtig){
                document.getElementById("antwort2").style.background='#228B22';
            } else {
                document.getElementById("antwort2").style.background='#B22222';
            }
        },

        checkAnswer3(){
            if('antwort3' === this.currentPic.richtig){
                document.getElementById("antwort3").style.background='#228B22';
            } else {
                document.getElementById("antwort3").style.background='#B22222';
            }
        },


    }
});

console.log(vm);