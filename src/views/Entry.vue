<template>
     <v-container fluid>
        <v-layout wrap justify-content-center>
          <v-flex xs6>
            <div class="title">
              <p>{{ this.spec.title }} | {{this.spec.date}}</p>
            </div>
          </v-flex>
          <v-flex xs6>
             <div class="text">
              <p>{{this.spec.text}}</p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>


</template>

<script>
export default {
    name: "Entry",
    props: {
      spec: Object,
    },
}
</script>

<style lang="scss" scoped>
  div.title {
    height: 100%;
    width: 100%;
    border-bottom: 2px solid aqua;
  }
  div.text {
      height: 100%;
    width: 100%;
  }


</style>
