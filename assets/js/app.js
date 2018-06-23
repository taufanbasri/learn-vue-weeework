var app = new Vue({
  el: '#app',
  data: {
    content: '',
    vehicles: ['car', 'motorcycle', 'bike']
  },
  methods: {
    addVehicle() {
      this.vehicles.push(this.content);
      this.content = '';
    },
    removeVehicle(index) {
      this.vehicles.splice(index,1);
    }
  }
})
