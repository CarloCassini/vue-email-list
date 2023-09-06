console.log("okokok");

const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
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
            console.table(this.emails);
          });
      }
    },
  },

  created() {
    this.createMails(10);
    // inserisci app da lanciare all'avvio
  },
}).mount("#app");
