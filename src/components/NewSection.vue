<template>
    <v-container fluid class="newSec">
        <v-layout wrap justify-content-center column >
            <!-- title -->
          <v-flex xs2 offset-md5>
            <div class="title">
             <input type="text" v-model="this.addNew.title" placeholder="Title" >
            </div>
          </v-flex>
           <!-- </v-layout> -->
           <!-- <v-layout wrap  align-content-center> -->
          <!-- text -->
         <v-flex xs3 sm4 md5 offset-md4>
            <div class="text">
            <textarea v-model="this.addNew.text" placeholder=" Dear Diary," ></textarea>
            </div>
          </v-flex>
            <!-- img -->
          <v-flex xs3 offset-md4 >
            <div class="file">
            <div v-if="!this.image">
          <h2>Pick a pic</h2>
          <input type="file" @change="onFileChange">
           </div>
        <div v-else>
         <img :src="image" />
        <button class="bottom" @click="removeImage">Remove image</button>
          </div>
            </div>
          </v-flex>
           <!-- submit button -->
          <v-flex xs1 offset-xs7  >
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
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
      var image = new Image();
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
    max-width: 250px;;
    margin-left: 30px;
    input {
      border-bottom: 2px solid black;
    }
    }
    div.text {
      margin-top: 20px;
      min-height: 300px;
      max-width: 600px;

      
      textarea {
        background-color: rgb(240, 240, 240);
        border-radius: 10px;
        padding: 5px;
        min-height: 300px;
        width: 100%;
      border: 2px solid rgb(50, 144, 143);
        box-sizing: border-box;
        text-decoration: underline solid black;
      }
    }
    // div.bottom.flex.xs3.offset-md4 {
    //    padding: 25px 0 75px 0;

    div.file {
      height: 200px;
      max-width: 300px;
      h2 {
        font-size: 16px;
        font-weight: normal;
      }
      input {
        border-bottom: 2px solid black;
      }
       img {
    width: 40%;
    height: auto;
     margin-top: 10px;
     display: block;
     margin-bottom: 2px;
     }
     button {
       font-size: bold;
        border-radius: 50px;
        border: 2px solid rgb(50, 144, 143);
        width: 100px;
        transition: 0.7s ease-out;
     }
     button:hover {
       background-color: rgb(43, 43, 43);
        color: white;
     }
    //  .bottom {
    //    margin-bottom: 50px;
    //  }
    }
    div.submit {
      height: 100%;
      max-width: 300px;
      padding: 0 0 75px 0;
      margin-top: -180px;
      margin-right: 20px;

      button {
        font-size: bold;
        border-radius: 50px;
        border: 2px solid rgb(50, 144, 143);
        width: 60px;
        transition: 0.7s ease-out;
      }
      button:hover {
        background-color: rgb(43, 43, 43);
        color: white;
      }
    }
    @media only screen and ( max-width: 950px) {
      div.submit {
        margin-top: -100px;
      }
    }
  
  }

}

</style>
