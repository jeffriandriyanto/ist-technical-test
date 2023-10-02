<template>
  <div id="loginApp" class="d-flex align-center justify-center" style="height: 100%">
    <v-card class="pa-4 ma-4" flat>
      <div class="mb-6 d-flex justify-space-between align-center">
        <section>
          <div class="text-h5 font-weight-bold">Welcome</div>
          <div class="text-body-1">Login to Your Account</div>
        </section>
        <section>
          <div class="d-flex justify-center gap1 logo-header">
            <!-- <img src="@/assets/logo.png" width="55" /> -->
          </div>
        </section>
      </div>

      <v-form
        v-model="validLogin"
        ref="loginForm"
        lazy-validation
        @submit.prevent="loginHandler()"
      >
        <v-row dense class="mb-2">
          <v-col cols="12">
            <v-text-field
              v-model="form.username"
              label="Username"
              filled
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.password"
              :rules="rules.password"
              :type="showPwd || 'password'"
              :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              filled
              @click:append="togglePassword"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn type="submit" block x-large depressed color="secondary">Masuk</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "default",
  head: {
    title: "Login Page",
    meta: [
      {
        hid: "login-description",
        name: "description",
        content: "Login page for application",
      },
    ],
  },
  data() {
    return {
      validLogin: false,
      errLogin: false,
      showPwd: false,
      rules: {
        password: [
          (v) => !!v || "Password mohon diisi",
          (v) => (v && v.length >= 6) || "Password minimal 6 karakter",
        ],
      },
      form: {
        username: "kminchelle",
        password: "0lelplR",
      },
    };
  },
  created() {
    if (this.$auth.loggedIn) {
      this.$router.push("/home");
    }
  },
  methods: {
    togglePassword() {
      this.showPwd = !this.showPwd;
    },
    async loginHandler() {
      if (this.$refs.loginForm.validate()) {
        this.$store.commit("app/loading", true);
        try {
          const res = await this.$auth.loginWith("local", {
            data: this.form,
          });

          if (res) {
            this.$router.push("/home");
          }
          this.$store.commit("app/loading");
        } catch (error) {
          $nuxt.$cDialog.error({
            errCode: error?.response?.status,
            text: error?.response?.data?.message,
          });
          this.$store.commit("app/loading");
        }
      }
    },
  },
};
</script>

<style lang="scss">
#loginApp {
  background: linear-gradient(-45deg, #E31E23, #B79164, #FFFFFF, #E31E23);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  // background: #f0f0f1;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
