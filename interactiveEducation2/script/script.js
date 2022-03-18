import {Gemaelde} from "./model/gemaelde.js";

let gemaelde = [];
gemaelde.push(new Gemaelde(1, './images/gemaelde1.jpg', 'Michelangelo', 'Vincent Van Gogh', 'Leonardo da Vinci', 'Wer ist der Künstler?', 'antwort1', 'Die Erschaffung'));
gemaelde.push(new Gemaelde(2, './images/gemaelde2.jpg', 'Claude Monet', 'Leonardo da Vinci', 'Albrecht Dürer', 'Wer ist der Künstler?', 'antwort2', 'Mona Lisa'));
gemaelde.push(new Gemaelde(3, './images/gemaelde3.jpg', 'Pablo Picasso', 'Vincent Van Gogh', 'Johannes Vermeer', 'Wer ist der Künstler?', 'antwort3', 'Das Mädchen mit dem Perlenohrring'));
gemaelde.push(new Gemaelde(4, './images/gemaelde4.jpg', 'Peter Paul Rubens', 'Georges Seurat', 'Pablo Picasso', 'Wer ist der Künstler?', 'antwort3', 'Guernica'));
gemaelde.push(new Gemaelde(5, './images/gemaelde5.jpg', 'Claude Monet', 'Salvador Dali', 'Vincent Van Gogh', 'Wer ist der Künstler?', 'antwort1'));
gemaelde.push(new Gemaelde(6, './images/gemaelde6.jpg', 'Edward Munch', 'Peter Paul Rubens', 'Salvador Dali', 'Wer ist der Künstler?', 'antwort3','Die Beständigkeit der Erinnerung'));
gemaelde.push(new Gemaelde(7, './images/gemaelde7.jpg', 'Georges Seurat', 'Michelangelo', 'Salvador Dali', 'Wer ist der Künstler?', 'antwort1', 'Ein Sonntagnachmittag auf der Insel La Grande Jatte'));
gemaelde.push(new Gemaelde(8, './images/gemaelde8.jpg', 'Albrecht Dürer', 'Vincent Van Gogh', 'Edward Munch', 'Wer ist der Künstler?','antwort3','Der Schrei'));
gemaelde.push(new Gemaelde(9, './images/gemaelde9.jpg', 'Michelangelo', 'Leonardo da Vinci', 'Pablo Picasso', 'Wer ist der Künstler?', 'antwort1', 'Das letzte Abendmahl'));
gemaelde.push(new Gemaelde(10, './images/gemaelde10.jpg', 'Pablo Picasso', 'Vincent Van Gogh', 'Claude Monet', 'Wer ist der Künstler?', 'antwort2', 'Sternennacht'));
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
        currentPic: gemaelde[0],
        punktestand: 0

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
            document.getElementById("antwort1").style.backgroundColor='#000000';
            document.getElementById("antwort2").style.backgroundColor='#000000';
            document.getElementById("antwort3").style.backgroundColor='#000000';

            document.getElementById("antwort1").style.color='white'
            document.getElementById("antwort2").style.color='white'
            document.getElementById("antwort3").style.color='white'

            document.getElementById("antwort1").style.borderColor='#000000';
            document.getElementById("antwort2").style.borderColor='#000000';
            document.getElementById("antwort3").style.borderColor='#000000';
            return this.currentPic;
        },

        //color changing Answers
        checkAnswer1(){
            if('antwort1' === this.currentPic.richtig){
                document.getElementById("antwort1").style.borderColor='#228B22';
                document.getElementById("antwort1").style.backgroundColor='white';
                document.getElementById("antwort1").style.color='black'
                this.punktestand += 1;
            } else {
                document.getElementById("antwort1").style.borderColor='#B22222';
                document.getElementById("antwort1").style.backgroundColor='white';
                document.getElementById("antwort1").style.color='black'
                this.punktestand -= 0.5;
            }
        },

        checkAnswer2(){
            if('antwort2' === this.currentPic.richtig){
                document.getElementById("antwort2").style.borderColor='#228B22';
                document.getElementById("antwort2").style.backgroundColor='white';
                document.getElementById("antwort2").style.color='black'
                this.punktestand += 1;
            } else {
                document.getElementById("antwort2").style.borderColor='#B22222';
                document.getElementById("antwort2").style.backgroundColor='white';
                document.getElementById("antwort2").style.color='black'
                this.punktestand -= 0.5;
            }
        },

        checkAnswer3(){
            if('antwort3' === this.currentPic.richtig){
                document.getElementById("antwort3").style.borderColor='#228B22';
                document.getElementById("antwort3").style.backgroundColor='white';
                document.getElementById("antwort3").style.color='black'
                this.punktestand += 1;
            } else {
                document.getElementById("antwort3").style.borderColor='#B22222';
                document.getElementById("antwort3").style.backgroundColor='white';
                document.getElementById("antwort3").style.color='black'
                this.punktestand -= 0.5;
            }
        },


    }
});

console.log(vm);