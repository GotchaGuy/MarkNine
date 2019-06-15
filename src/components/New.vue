<template>
    <v-container fluid>
        <v-layout wrap justify-center>
          <v-flex xs12>
            <div>
             <input type="text" v-model="this.addNew.title" placeholder="Title" >
            </div>
          </v-flex>
         <v-flex xs12>
            <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
<!-- napravi api za ove podatke i neke fake zurnale -->
<!-- v bind the index in the home page v-for to transfer -->
</template>

<script>
export default {
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

img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}


</style>
