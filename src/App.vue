<template>
  <v-app id="unicorn">
   <div  > 
    <header>

    <v-container fluid >
      <v-layout wrap justify-center justify-content-center>
        <v-flex xs12 >
          <div class="head" >
          <h1>Journally</h1>
          </div>
        </v-flex>
        <v-flex xs3 >
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
         <v-flex xs12>
          <div class="make" >
          <button>
            <router-link to="/new" >
              + <span>add new</span>
            </router-link>
             
            </button>
          </div>
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
    </div>
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
div.application--wrap {
    // background-color: lightgray;
  }
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
    background-color: rgb(43, 43, 43);

  div.head {
    height: 100%;
    width: 100%;
    text-align: center;

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
    div.make {
      height: 100%;
      width: 100%;
      text-align-last: center;
      transition: 0.3s;
     
        
      button {
        height: 30px;
        width: 90px;
        margin-left: 120px;
        border: 3px solid rgb(50, 144, 143);
        border-radius: 50px;
        margin-top: 30px;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
         a {
           display: inline-block;
          transition: all 0.3s ease-in-out;
           height: 100%;
           width: 100%;
           text-decoration: none;
           color: white;
         }
       
      }
      button:hover {
        height: 60px;
        width: 60px;
        padding-right: 0;
           }
       button:hover span {
        display: none;
           }
           button:hover a {
        padding-top: 15px;
           }
    }
      

  }

  

  footer {
    height: 75px;
    background-color: rgb(43, 43, 43);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 4px solid rgb(50, 144, 143);
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