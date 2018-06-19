var app = new Vue({
  el: '#app',
  data: {
    show: true,
    show2: 'ready',
    message: 'Hello World',
    int1: 1,
    int2: 2,
    result: null
  },
  computed: {
    sum() {
      return this.int1 + this.int2;
    }
  },
  methods: {
    sumProcess(int3) {
      return this.result = this.int1 + this.int2 + int3;
    }
  }
})
