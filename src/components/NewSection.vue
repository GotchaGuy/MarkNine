<template>
    <v-container fluid>
        <v-layout wrap justify-center>
          <v-flex xs12>
            <!-- title -->
            <div class="title">
             <input type="text" v-model="this.addNew.title" placeholder="Title" >
            </div>
          </v-flex>
          <v-flex xs12>
            <!-- img -->
            <div class="file">
            <div v-if="!image">
          <h2>Select an image</h2>
          <input type="file" @change="onFileChange">
           </div>
        <div v-else>
    <img :src="image" />
    <button @click="removeImage">Remove image</button>
          </div>
            </div>
          </v-flex>
          <!-- text -->
         <v-flex xs12>
            <div class="text">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="submit">
            <input type="submit" value="save">
            </div>
          </v-flex>
        </v-layout>
      </v-container>

<!-- v bind the index in the home page v-for to transfer -->
</template>

<script>

export default {
  name: "New",
    data() {
        return {
            addNew: {
            newTitle: "",
            newText: "",
            newTime: "",
            newImage: "",
            },
           
            entries: [
                {
                    title: "",
                }
            ]
        }
    },
    methods: {
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
        vm.AddNew.NewImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.AddNew.NewImage = '';
    }
  }
}
</script>

<style lang="scss">
// div {
//   height: 100%;
//   width: 100%;
// for fucks sake please be careful mate
// }
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}


</style>
