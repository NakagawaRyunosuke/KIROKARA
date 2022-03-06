<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="orange lighten-5"
    >
      <v-list-item class="orange lighten-3">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            MENU
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="orange lighten-3">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-h4 mx-auto pad" @click="moveHome">KIROKARO</v-toolbar-title>
    </v-app-bar>

    <v-main class="orange lighten-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer:null,
    items:[
      {icon:"mdi-home",title:"HOME",to:"/"},
      {icon:"mdi-camera",title:"撮影",to:"/snap"},
      {icon:"mdi-book-outline",title:"記録",to:"/memo"},
      {icon:"mdi-chart-line",title:"今月の推移",to:"/chart"}
    ],
  }),
  methods:{
    moveHome(){
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.pad{
  padding-right: 48px;
}
</style>