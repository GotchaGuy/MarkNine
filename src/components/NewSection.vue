<template>
    <v-container fluid class="newSec">
        <v-layout wrap justify-center align-content-center >
            <!-- title -->
          <v-flex xs2 >
            <div class="title">
             <input type="text" v-model="this.addNew.title" placeholder="Title" >
            </div>
          </v-flex>
           </v-layout>
           <v-layout wrap  align-content-center>
          <!-- text -->
         <v-flex xs4 offset-xs4 >
            <div class="text">
            <textarea v-model="this.addNew.text" placeholder=" Dear Diary," ></textarea>
            </div>
          </v-flex>
            <!-- img -->
          <v-flex xs3 offset-md4 offset-xs2>
            <div class="file">
            <div v-if="!this.image">
          <h2>Pick a pic</h2>
          <input type="file" @change="onFileChange">
           </div>
        <div v-else>
    <img :src="image" />
    <button @click="removeImage">Remove image</button>
          </div>
            </div>
          </v-flex>
           <!-- submit button -->
          <v-flex xs1 >
            <div class="submit">
            <button @click="doIt">save</button>
            </div>
          </v-flex>
        </v-layout>
        <Entries v-bind:newData="this.entry"/>
      </v-container>

<!-- v bind the index in the home page v-for to transfer -->
</template>

<script>
import Entries from './Entries.vue'
export default {
  name: "New",
    data() {
        return {
          image: "",
            addNew: {
            newTitle: "",
            newText: "",
            newTime: "",
            newImage: "",
            },
          //  ../assets/storage/hello.jpg
            entry: 
                {
                    title: "",
                    text: "",
                    time: "",
                    image: ""
                }
          
        }
    },
    methods: {
      doIt: function() {
        this.addNew.newImage = this.image;
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        this.addNew.newTime = date;
        if (this.addNew.newTitle == "") {
          this.addNew.newTitle = "Story of the" + today.getDate() + ". of " + (today.getMonth()+1) ;
        }
        if (this.addNew.newText == "") {
          // alert("Writing text is mandatory for making a new entry. :)");
          // return;
          this.addNew.newText = "words words words";
        }
          this.entry.title = this.addNew.newTitle;
          this.entry.text = this.addNew.newText;
          this.entry.time = this.addNew.newTime;
          this.entry.image = this.addNew.newImage;

        this.addNew = {
           newTitle: "",
            newText: "",
            newTime: "",
            newImage: "",
        }
            this.$router.push({ path: '/' });
      },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      this.image = '';
    }
  }
}
</script>

<style lang="scss">

div.newSec {
  div {
  height: 100%;
  width: 100%;
    div.title {
     height: 100%;
    width: 250px;;
    margin-left: 30px;
    input {
      border-bottom: 2px solid black;
    }
    }
    div.text {
      margin-top: 20px;
      min-height: 300px;
      width: 100%;

      
      textarea {
        padding: 5px;
        min-height: 300px;
        width: 100%;
      border: 2px solid aqua;
        box-sizing: border-box;
        text-decoration: underline solid black;
      }
    }
    div.file {
      height: 100%;
      width: 100%;
      h2 {
        font-size: 16px;
        font-weight: normal;
      }
      input {
        border-bottom: 2px solid black;
      }
       img {
    width: 50%;
     margin-top: 10px;
     display: block;
     margin-bottom: 10px;
     }
     button {
       font-size: bold;
        border-radius: 50px;
        border: 2px solid aqua;
        width: 100px;
        transition: 0.7s ease-out;
        margin-bottom: 20px;
     }
     button:hover {
        background-color: black;
        color: white;
     }
    }
    div.submit {
      padding-top: 25px;
      text-align: right;
      button {
        font-size: bold;
        border-radius: 50px;
        border: 2px solid aqua;
        width: 60px;
        transition: 0.7s ease-out;
      }
      button:hover {
        background-color: black;
        color: white;
      }
    }
  
  }

}

</style>
