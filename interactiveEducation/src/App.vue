<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import {Gemaelde} from "./model/gemaelde.js";
import Quiz from "@/components/Quiz.vue"

</script>

<script>
 let gemaelde = [];
    gemaelde.push(new Gemaelde(1, './images/gemaelde1.jpg', 'Michelangelo', 'Van Gogh', 'Vermeer', 'Wer ist der Künstler?'));
    gemaelde.push(new Gemaelde(2, './images/gemaelde2.jpg', 'Michelangelo', 'Van Gogh', 'Vermeer', 'Wer ist der Künstler?'));
    gemaelde.push(new Gemaelde(3, './images/gemaelde3.jpg', 'Michelangelo', 'Van Gogh', 'Vermeer', 'Wer ist der Künstler?'));
    gemaelde.push(new Gemaelde(4, './images/gemaelde4.jpg', 'Michelangelo', 'Van Gogh', 'Vermeer', 'Wer ist der Künstler?'));
    gemaelde.push(new Gemaelde(5, './images/gemaelde5.jpg', 'Michelangelo', 'Van Gogh', 'Vermeer', 'Wer ist der Künstler?'));
    gemaelde.push(new Gemaelde(6, './images/gemaelde6.jpg', 'Michelangelo', 'Van Gogh', 'Vermeer', 'Wer ist der Künstler?'));
    gemaelde.push(new Gemaelde(7, './images/gemaelde7.jpg', 'Michelangelo', 'Van Gogh', 'Vermeer', 'Wer ist der Künstler?'));
    gemaelde.push(new Gemaelde(8, './images/gemaelde8.jpg', 'Michelangelo', 'Van Gogh', 'Vermeer', 'Wer ist der Künstler?'));
    gemaelde.push(new Gemaelde(9, './images/gemaelde9.jpg', 'Michelangelo', 'Van Gogh', 'Vermeer', 'Wer ist der Künstler?'));
    gemaelde.push(new Gemaelde(10, './images/gemaelde10.jpg', 'Michelangelo', 'Van Gogh', 'Vermeer', 'Wer ist der Künstler?'));

export default {
  data(){
    return {
      gemaelde: gemaelde
    }
    

  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <Quiz bilder="gemaelde"/>

      <nav>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
 @import "@/assets/style.css";
</style>
