<template>
  <nav>
    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      color="success"
      top
    >Awesome! You've successfully added a Project goal
      <v-btn flat color="white" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar flat app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Dropdown menu -->
      <v-menu offset-y>
        <v-btn color="grey" flat slot="activator">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" route :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="teal darken-4">
      <v-layout column align-center>
        <v-flex class="mt-4">
          <v-avatar size="100">
            <img src="/avatar-2.png">
          </v-avatar>
          <p class="white--text subheading mt-1">Kathirr007</p>
        </v-flex>
        <v-flex class>
          <Popup @projectAdded="snackbar = true"/>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  import Popup from "./Popup";
  export default {
    data() {
      return {
        drawer: false,
        links: [
          { icon: "dashboard", text: "Dashboard", route: "/" },
          { icon: "folder", text: "My Projects", route: "/projects" },
          { icon: "person", text: "Team", route: "/team" }
        ],
        snackbar: false
      };
    },
    components: {
      Popup
    }
  };
</script>

<style>
</style>
