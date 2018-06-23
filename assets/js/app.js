Vue.component('greeting', {
  template: '<b>Hello, Vue!</b>'
})

Vue.component('button-counter', {
  data() {
    return {
      count: 0
    };
  },
  template: '<button @click="count++">Clicked {{ count }} times</button>'
})

var app = new Vue({
  el: '#app'
})
