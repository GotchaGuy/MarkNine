<template>
     <v-container fluid>
        <v-layout wrap justify-content-center column>
          <v-flex xs4 offset-md4>
            <div class="title">
              <p>{{ this.tempo.title }} | {{this.tempo.time}}</p>
            </div>
          </v-flex>
          <v-flex xs2 sm3 md4  offset-md4>
             <div class="text">
              <p>{{this.tempo.text}}</p>
            </div>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: "Old",
    props: {
      spec: Object,
    },
    data() {
        return {
              tempo: {
            title: "Awsum",
            text: "loremIpsumNessAtudeOcity say it with me... Lorem..Ipsum...Ness....Atude....Ocity loremIpsumNessAtudeOcity loremIpsumNessAtudeOcity loremIpsumNessAtudeOcity loremIpsumNessAtudeOcity loremIpsumNessAtudeOcity loremIpsumNessAtudeOcity loremIpsumNessAtudeOcity loremIpsumNessAtudeOcity",
            time: "now-now-2019",
            image: "../assets/storage/hello.jpg",
            },
        }
    }
}
</script>

<style lang="scss" scoped>
  div.title {
    height: 70px;
    max-width: 450px;
    padding-left: 20px;
    p {
    border-bottom: 2px solid rgb(50, 144, 143); 

    }
  }
  div.text {
      height: 100%;
    max-width: 600px;
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    padding: 20px;
  }


</style>
