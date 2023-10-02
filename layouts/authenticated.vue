<template>
  <v-app>
    <AppLoading />
    <cDialog />

    <!-- <v-system-bar height="40" app window color="dark" dark> Iki kanggo pengumuman </v-system-bar> -->
    <v-app-bar app flat clipped-left color="white">
      <v-app-bar-nav-icon
        v-if="smD"
        class="mr-2"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <img :src="user?.image" height="38px" class="mr-4" />
      <div class="text-h6 font-weight-bold">{{ user?.company?.name }}</div>

      <v-spacer />

      <div class="d-flex gap10">
        <NuxtLink to="/home" class="link">Home</NuxtLink>
        <NuxtLink to="/about" class="link">About</NuxtLink>
        <NuxtLink to="/contact" class="link">Contact</NuxtLink>
        <NuxtLink to="/products" class="link">Products</NuxtLink>
      </div>

      <v-spacer />
      <b v-if="!smD" class="clock-wrapper primary--text">
        <digitalClock :blink="true" />
      </b>

      <span v-if="!smD" class="mx-2">|</span>

      <!-- Menu Profile -->
      <b v-if="!smD" class="mr-2">{{ user?.person?.name }}</b>

      <v-menu
        class="profile-menu-wrapper"
        close-on-click
        :nudge-bottom="50"
        style="z-index: 1000"
      >
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="d-flex align-center text-body-2">
            <div style="max-width: 100px" class="text-truncate mr-2">
              {{ user?.firstName }}
            </div>
            <v-avatar v-if="user?.image" size="34">
              <img :src="user.image" :alt="user.email" />
            </v-avatar>
            <v-icon v-if="!smD" class="ml-1">mdi-chevron-down</v-icon>
          </div>
        </template>

        <v-list>
          <v-list-item @click="logoutHandler">
            <v-list-item-icon class="mr-3"
              ><v-icon>mdi-logout-variant</v-icon></v-list-item-icon
            >
            <v-list-item-subtitle>Logout</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- <AppAuthenticatedNav
      :drawer="drawer"
      :closeDrawer="() => (drawer = false)"
    /> -->

    <v-main>
      <div class="authenticated-bg pa-4">
        <v-container>
          <nuxt />
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import breakpoints from "~/mixins/breakpoints";
import DigitalClock from "vue-digital-clock";

export default {
  mixins: [breakpoints],
  components: {
    DigitalClock,
  },
  data() {
    return {
      drawer: false,
      showChangePwd: false,
    };
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  // mounted() {
  //   if (!this.$auth.user) this.$router.push("/home");
  // },
  methods: {
    async logoutHandler() {
      this.$store.commit("app/loading", true);
      await this.$auth.logout();
      this.$store.commit("app/loading", false);
    },
  },
};
</script>

<style lang="scss">
.clock-wrapper {
  .clock__colon {
    margin: 0 2px;
  }
}

.authenticated-bg {
  min-height: calc(100vh - 65px);
  background: #f0f0f1;
  background-size: 150px 150px;
  background-repeat: repeat;
}
</style>
