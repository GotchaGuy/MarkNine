<template>
  <v-app>
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content> -->
    <header>

    <v-container fluid >
      <v-layout wrap justify-center justify-content-center>
        <v-flex xs12 >
          <div class="head" >
          <h1>Journally</h1>
          </div>
        </v-flex>
        <v-flex xs2 >
          <nav>
          <router-link to="/" >Entries</router-link> |
           <router-link to="/about" >About</router-link> |
            <router-link to="/contact" >Contact</router-link> |
             <router-link to="/settings" >Settings</router-link>
          </nav>
        </v-flex>




      </v-layout>
    </v-container>

    </header>

    <main>
      <router-view/>

    </main>

    <footer>
      <v-container fluid>
        <v-layout wrap justify-center>
          <v-flex xs6>
            <div>
              <p>Copyright C 2019</p>
            </div>
          </v-flex>
          <v-flex xs6>
            <nav>
          <router-link to="/" >Entries</router-link> |
           <router-link to="/about" >About</router-link> |
            <router-link to="/contact" >Contact</router-link> |
             <router-link to="/settings" >Settings</router-link>
          </nav>
          </v-flex>
        </v-layout>
      </v-container>

    </footer>

  </v-app>
</template>


<script>
import HelloWorld from './components/HelloWorld'
import Entries from './components/Entries'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Entries
  },
  data () {
    return {
      //
    }
  }
}
</script>


<style lang="scss" >
body {
  margin: 0;
  padding: 0;
  header {
    height: 250px;
    width: 100%;
    color: white;
    background-color: rgb(0, 0, 0);

  div.head {
    height: 100%;
    width: 100%;
    text-align: center;

    // background-color: rgb(0, 217, 255);
    }

    nav {
      text-align: center;
      padding-top: 30px;
      router-link {
        color: white;
        list-style-type: none;
      }
    }

  }
}




</style>