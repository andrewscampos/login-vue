<template>
  <v-app id="inspere">
      <SiderBar />
      <v-container>
          <v-app-bar color="rgb(0,0,0,0)" flat>
               <div lass="pt-5" style=" top: 3px; position: absolute;  right:0; text-align:center">
                <v-btn text>
                    <v-icon color="#1dc4e9">
                        fas fa-sign-out-alt
                    </v-icon>
                </v-btn>
            </div>
          </v-app-bar>
          <v-app-bar color="rgb(0,0,0,0)" flat>
              <v-text-field label="Search..." class="pt-5" filled prepend-inner-icon="mdi-magnify" dense solo flat background-color="grey lighten-4" rounded>
              </v-text-field>
          </v-app-bar>
         
      </v-container>

  </v-app>
</template>

<script>
import SiderBar from './SiderBar.vue'
export default {
    data: () => ({
        select: {state: 'EN'},
        itens: ['EN','ES','DZ'],
        text: 'weekly',
        width:2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        value: [0,2,5,9,5,10,3,5,0,0,18,2,9,0],
        fill: false,
        type: 'trend',
        autoLineWidth: false,
        slider:[
            {
                src: require('../assets/logo.png')
            },
            {
                src: require('../assets/logo.png')
            },
            {
                src: require('../assets/logo.png')
            },
            {
                src: require('../assets/logo.png')
            },
            {
                src: require('../assets/logo.png')
            }
        ]

    }),
    components:{
        SiderBar
    }
}
</script>

<style>

</style>