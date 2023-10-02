const breakpoints = {
  computed: {
    xs() {
      return this.$vuetify.breakpoint.xsOnly
    },
    sm() {
      return this.$vuetify.breakpoint.smOnly
    },
    smD() {
      return this.$vuetify.breakpoint.smAndDown
    },
    smU() {
      return this.$vuetify.breakpoint.smAndUp
    },
    md() {
      return this.$vuetify.breakpoint.mdOnly
    },
    mdD() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    mdUp() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    lg() {
      return this.$vuetify.breakpoint.lgOnly
    },
    lgD() {
      return this.$vuetify.breakpoint.lgAndDown
    },
    lgU() {
      return this.$vuetify.breakpoint.lgAndUp
    },
    xl() {
      return this.$vuetify.breakpoint.xlOnly
    },
    xl() {
      return this.$vuetify.breakpoint.xlOnly
    },
    bpWidth() {
      return this.$vuetify.breakpoint.width
    },
    bpHeight() {
      return this.$vuetify.breakpoint.height
    },
    bpScrollBarWidth() {
      return this.$vuetify.breakpoint.scrollBarWidth
    }
  }
}

export default breakpoints;