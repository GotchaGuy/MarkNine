<template>
    
    <v-container fluid>
        <v-layout wrap justify-center>
            <v-flex xs6 offset-md3 >
                <div class="entryPopUp">
                  <div class="uno">
                    <h2>{{ this.entries.title }}</h2>
                    <h3>{{ this.entries.date }}</h3>
                    <p>{{ this.entries.text }}</p>
                    </div>
                    <div class="optional">
                        <!-- img will be here -->
                    </div>
                </div>

            </v-flex>
        </v-layout>
    </v-container>

</template>


<script>
export default {
    props: [
        
    ],
    data() {
        return{
            entries: [
                {
                    title: "Welcome to Journally",
                    // how to limit display of text
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. V",
                //    ask him bout this time stuff n img uploads
                   date: "shenbruary 7th 2019",
                    imagesSrc: ["../assets/storage/hello.jpg"],
                }
            ]
        }
    }
}
</script>

<style lang="scss" >
    div.entryPopUP {
        height: 100%;
        width: 100%;
        background-color: rgb(26, 26, 66);
        color: rgb(255, 187, 0);
        border: 1px solid rgb(255, 187, 0);
        box-sizing: border-box;
    }


</style>
