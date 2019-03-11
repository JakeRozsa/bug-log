<template>
  <div class="row Buggy">
    <div class="card main-card col-8 offset-2">
      <b>{{findBug.title}} ~ Author: {{findBug.creator}} </b><br> {{findBug.description}}
      <button @click="deleteBug(findBug._id)" v-show="!findBug.closed"><i class="fas fa-dumpster"></i></button>
    </div>
    <bug-detail></bug-detail>
  </div>
</template>


<script>
  import BugDetail from '@/components/BugDetail.vue'
  export default {
    name: 'Buggy',
    data() {
      return {
      }
    },
    mounted() {
      let id = this.$route.params.id

      this.$router.params.id.dispatch('bug')
      this.$store.dispatch('getBugs')
      this.$store.dispatch('getNotes')
    },
    computed: {
      findBug() {
        let bugID = this.$route.params.id
        let bugs = this.$store.state.bugs
        return bugs.find(bug => {
          return bug._id == bugID
        })
      }
    },
    methods: {
      deleteBug(id) {
        this.$store.dispatch('deleteBug', id)
      }
    },
    components: {
      BugDetail
    }
  }
</script>


<style scoped>
  button {
    min-height: 30px;
    border: 0;
    max-width: 30px;
  }

  .main-card {
    margin-top: 60px;
  }
</style>