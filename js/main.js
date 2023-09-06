console.log("okokok");

const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
      quante: 0,
      // emailsx: [],
      // inserisci le variabili della app
      // slides: []
    };
  },

  methods: {
    // inserisci i metodi
    createMails(total) {
      for (let i = 1; i <= total; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.emails.push(response.data.response);
          });
      }
    },
  },

  created() {
    this.quante = prompt("quante mail vuoi generare?");

    this.createMails(this.quante);
    // inserisci app da lanciare all'avvio
  },
}).mount("#app");
