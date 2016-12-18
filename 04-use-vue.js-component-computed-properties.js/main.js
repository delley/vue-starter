var card = new Vue({
  el: "#card",
  data: {
    title: "Dinosaurs",
    totalDinos: 0,
    totalSpecies: 0,
    dinosUpdated: 0,
    speciesUpdated: 0,
    dinos: [
      { text: "Velociraptor", quantity: 5 },
      { text: "Triceratops", quantity: 3 },
      { text: "Stegosaurus", quantity: 6 }
    ]
  },
  methods: {
    addDino: function () {
      var input = document.getElementById('dinoForm');
      if (input.value !== '') {
        this.dinos.push({
          text: input.value,
          quantity: 1
        });
        input.value = "";
      }
    },
    removeDino: function (index) {
      this.dinos.splice(index, 1);
    }
  },
  computed: {
    totalDinos: function () {
      this.dinosUpdated += 1;
      var sum = 0;
      var dinos = this.dinos;

      for(var i in dinos) {
        sum += dinos[i].quantity;
      }
      return sum;
    },
    totalSpecies: function () {
      this.speciesUpdated += 1;
      return this.dinos.length;
    }
  }
})
