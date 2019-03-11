<template>
  <div class="row bugform">
    <div class="col">
      <form @submit.prevent="addBug">
        <input v-model="bugForm.title" type="text" placeholder="Enter Bug Here" required> <br>
        <input v-model="bugForm.description" type="text" placeholder="Bug Description" required><br>
        <input v-model="bugForm.creator" type="text" placeholder="Username" required><br>
        <button type="submit"><i class="fas fa-spider"></i></button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bugs',
    props: {
      msg: String
    },
    data() {
      return {
        bugForm: {},
        bugs: []
      }
    },
    components: {},
    methods: {
      addBug() {
        this.$store.dispatch('createBug', this.bugForm)
      }
    },
    computed: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    margin: 20px;
  }

  button {
    border: 0;
  }

  input {
    min-width: 300px;
    margin-bottom: 10px;
  }
</style>