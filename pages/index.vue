<template>
  <div></div>
</template>

<script>
export default {
  created() {
    if (this.$auth.loggedIn) {
      this.$router.push("/home");
    } else {
      this.$router.push("/login");
    }
  },
};
</script>
