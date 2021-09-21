<template>
 
  <v-app>

    <alert/>

    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item v-if="!guest">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Taufik Hidayat</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
        
        <div class="pa-2" v-if="guest">
          <v-btn block color="primary" class="mb-1">
            <v-icon left>mdi-lock</v-icon>
            Login
          </v-btn>
          <v-btn block color="success">
            <v-icon left>mdi-account</v-icon>
              Register
            </v-btn>
          </div>

          <v-divider></v-divider>

          <v-list-item
            v-for="(item, index) in menus"
            :key="`menu-`+index"
            :to="item.route"
            >
            <v-list-item-icon>
              <v-icon left>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>

      <template v-slot:append v-if="!guest">
        <div class="pa-2">
          <v-btn block color="red" dark >
            <v-icon left>mdi-lock</v-icon>
            logout
          </v-btn>
        </div>
        </template>

    </v-navigation-drawer>

    <v-app-bar app color="success" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title>SanbercodeApp</v-toolbar-title>


      <v-spacer></v-spacer>
      
    </v-app-bar>

    
    <v-main>     
      <v-container fluid>
          <v-slide-y-transition>
            <router-view></router-view>
          </v-slide-y-transition>
      </v-container>
    </v-main>

    <v-footer app>
      @sanbercode | vueJS
    </v-footer>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
import Alert from '/component/Alert.vue';


export default {
  component: {Alert},

  name: 'App',

  data: () => ({
    drawer : true,
    menus : [
      { title : 'Home', icon : 'mdi-home' , route : '/'},
      { title : 'Blogs', icon : 'mdi-note' , route : '/blogs'},
    ],
    guest : true ,
    snackbarstatus : false ,
    snackbartext : 'Anda berhasil logout',
    }),
  methods : {
    logout() {
      this.guest = true,
      this.setAlert({
      color : 'success',
      text : 'Anda berhasil logout',
      })
  },
    login () {
      this.guest = falsethis.setAlert({
        status : true,
        color : 'success',
        text : 'Anda berhasil login',
      })
    },
    ...mapActions ({
      setAlert :'alert/set'
    })
},
mounted(){
  this.snackbarstatus = true
}
};
</script>
