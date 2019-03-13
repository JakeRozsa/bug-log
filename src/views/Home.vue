<template>
  <div class="container-fluid home">
    <div class="row homer">
      <div class="col">
        <h1><img class="vue-logo" alt="Vue logo" src="../assets/logo.png">ery Buggy</h1>
      </div>
    </div>
    <bugs />
    <div class="row">
      <div @click="setActiveBug" class="col-8 offset-2 text-center card" v-for="bug in bugs"
        :class="{'bg-info' : !bug.closed, 'bg-danger' : bug.closed}">
        <router-link :to="'/buggy/'+bug._id" class="router">
          <p>{{bug.title}} ~ <b>{{bug.creator}}</b> <br> {{bug.description}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Bugs from '@/components/Bugs.vue'

  export default {
    name: 'home',
    data() {
      return {
      }
    },
    components: {
      Bugs
    },
    mounted() {
      this.$store.dispatch('getBugs')
    },
    methods: {
      setActiveBug(bug) {
        this.$store.dispatch('setActiveBug', bug)
      },
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 35px;
  }

  .vue-logo {
    max-height: 35px;
  }

  button {
    max-width: 85px;
  }

  .homer {
    margin-top: 70px;
  }

  .router {
    color: rgb(255, 255, 255);
  }

  .router:hover {
    color: black;
  }
</style>