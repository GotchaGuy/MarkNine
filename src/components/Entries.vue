<template>
    
    <v-container fluid>
        <v-layout wrap justify-center column >
            <v-flex xs4 offset-md4 v-for="(item, index) in this.entries.chapters" v-bind:key="index" >
                <div class="entryPopUp">
               <router-link to="/entry" >
                  <div class="uno">
                    <h2>{{ item.title }}</h2>
                    <h3>{{ item.time }}</h3>
                    <p>{{ item.text }}</p>
                    </div>
                    <div class="optional">
                        <!-- img will be here -->
                    </div>
                </router-link>
                <button @click="remove(index)" class="del">x</button>
                </div>

            </v-flex>
        </v-layout>
    </v-container>

</template>


<script>
import axios from "axios"

export default {
    props: [
        
    ],
    data() {
        return{
             entries: {},
            myAPI: "https://api.myjson.com/bins/u2vcd"
        }
    },
    mounted() {
        axios.get(this.myAPI)
        .then ( response => {
            this.entries = response.data;
        })
    },
    methods: {
        remove: function(index) {
            this.entries.chapters.splice(index, 1);
        }
    }
}
</script>

<style lang="scss" >
    div.entryPopUp {
        height: 100px;
        max-width: 600px;;
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        border: 4px solid aqua;
        box-sizing: border-box;
        padding-left: 10px;
        margin-bottom: 10px;
        text-decoration: none;
        transition: 0.5s;
        position: relative;
        border-top-right-radius: 50px;
        a {
            text-decoration: none;
            color: white;
             div.uno {
                h2 {
            font-family: "Arial";
            font-size: 24px;
            
                }
                h3 {
            font-family: "Arial";
            font-size: 16px;
            padding-left: 10px;
                }
                 p {
            font-family: "Arial";
            font-size: 14px;
            padding-left: 10px;
            padding-top: 10px;
            height: 40px;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
             text-overflow: ellipsis;
                }
            }
        
        }

        button.del {
            display: none;
            height: 20px;
            width: 20px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            line-height: 16px;
            position: absolute;
            top: 0;
            right: 0;
            transition: 0.2s;
        }
        button.del:hover {
            color: rgb(122, 14, 14);
        }
    }
    div.entryPopUp:hover {
        transform: scale(1.05);
        border-top-right-radius: 0;
        button.del {
            display: inline;
        }
    }
// rgb(6, 45, 61);

// rgb(11, 84, 112);

</style>
