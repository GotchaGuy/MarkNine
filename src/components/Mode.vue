<template>
  <v-container fluid >
    <v-layout wrap justify-content-center column>
        <v-flex xs12 >
           
            <div class="settings">
            <h1>Settings page</h1>
            <p>darkMode toggle</p>
            <div @click="changeLightMode" >mode</div>
            </div>

        </v-flex>
    </v-layout>
 </v-container>
  
</template>

<script>
export default {
    name: "Mode",
    data() {
        return { 

        }
    },
    mounted() {
    var lightMode = agCookie.read("mode");
    if (lightMode == null || lightMode == "light") {
      document.getElementById('unicorn').classList.add('light');
    } else {
      document.getElementById('unicorn').classList.add('dark');
    }
  },
  methods: {
    changeLightMode: function() {
      var lightMode = agCookie.read("mode");
      if (lightMode == null || lightMode == "light") {
        document.getElementById('unicorn').classList.add('dark');
        document.getElementById('unicorn').classList.remove('light');
        agCookie.create("mode", "dark", 10);
      }
      else {
        document.getElementById('unicorn').classList.add('light');
        document.getElementById('unicorn').classList.remove('dark');
        agCookie.create("mode", "light", 10);
      }
    }
  }
}
</script>

<style lang="scss">
    div.settings {
        text-align: center;
        div {
            margin: 0 auto;
            background-color: yellow;
            border-radius: 50px;
            line-height: 30px;
            height: 30px;
            width: 45px;
        }
        div:hover {
            font-weight: bold;
        }
    }

// mode coloring
// light
    .unicorn.light {
            background-color: lightgray;
    }
    .unicorn.dark {
       background-color: rgb(49, 56, 71);
      color: rgb(221, 183, 11);
    }

</style>
