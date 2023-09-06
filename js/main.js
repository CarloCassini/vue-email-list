console.log("okokok");

const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
      // emailsx: [],
      // inserisci le variabili della app
      // slides: []
    };
  },

  methods: {
    // inserisci i metodi
    createMails(total) {
      console.table(total);
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
    this.createMails(10);
    // inserisci app da lanciare all'avvio
  },
}).mount("#app");
