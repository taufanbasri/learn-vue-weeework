var app = new Vue({
  el: '#app',
  data: {
    message: ''
  },
  methods: {
    escKey() {
      this.message = 'You pressing esc key'
    },
    spaceKey() {
      this.message = 'You pressing space key'
    },
    upKey() {
      this.message = 'You pressing up key'
    },
    downKey() {
      this.message = 'You pressing down key'
    },
    aKey() {
      this.message = 'You pressing a key'
    },
  }
})
