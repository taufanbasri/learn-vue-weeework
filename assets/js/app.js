var app = new Vue({
  el: '#app',
  data: {
    show: true,
    show2: 'ready',
    message: 'Hello World',
    int1: 1,
    int2: 2,
    result: null,
    km: 0,
    m: 0
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
  },
  watch: {
    km(val) {
      this.km = val;
      this.m = val * 1000;
    },
    m(val) {
      this.km = val / 1000;
      this.m = val;
    }
  }
})
