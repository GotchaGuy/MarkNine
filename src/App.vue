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
            <ul>
              <li>
          <router-link to="/" >Entries</router-link>
           </li> |
           <li>
           <router-link to="/about" >About</router-link>
            </li> |
            <li>
            <router-link to="/contact" >Contact</router-link>
             </li> |
             <li>
             <router-link to="/settings" >Settings</router-link>
              </li>
            </ul>
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
            <ul>
              <li>
          <router-link to="/" >Entries</router-link>
           </li> |
           <li>
           <router-link to="/about" >About</router-link>
            </li> |
            <li>
            <router-link to="/contact" >Contact</router-link>
             </li> |
             <li>
             <router-link to="/settings" >Settings</router-link>
              </li>
            </ul>
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
html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  position: relative;
  padding-bottom: -75px;
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
      ul {
        display: inline-block;
        padding: 0;
        li {
           display: inline-block;
          list-style-type: none;
          a {
       text-decoration: none;
        color: white;
      }
        }
      }
      
    }

  }

  footer {
    height: 75px;
    background-color: black;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    div {
      height: 100%;
      width: 100%;
      text-align: left;
      p {
        color: white;
      }
    }
    nav {
      height: 100%;
      width: 100%;
      text-align: right;
      ul {
        display: inline-block;
        padding: 0;
        li {
           display: inline-block;
          list-style-type: none;
          a {
       text-decoration: none;
        color: white;
      }
        }
      }
    }

  }
}




</style>