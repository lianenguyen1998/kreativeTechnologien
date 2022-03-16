<script>
    
    defineProps({
        bilder:{
            type:Array,
        },

    });
    export default({
        data(){
            return{
                nextBild: false,
            }
        },
        method:{
            nextpic(){
                randomCounter = Math.random() * (10 - 1) + min
                Pic =  bilder.find(element => element.counter === randomCounter);
                return Pic;
            }
        }
    });
    
</script>

<template>
    <div v-if="nextBild">
        <div class="bild"><img alt="Gemälde" v-bind:src="cu"></div>
    </div>
    <div v-else >
        <div class="bild"><img alt="Gemälde" src="./images/gemaelde1"></div>
    </div>
    <v-divider></v-divider>
    <button @click="nextPic">Next</button>

</template>