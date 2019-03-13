<template>
  <div class="col-12 bugdetail">
    <div class="row">
      <div class="col-12">
        <!-- CHECK THE V SHOW -->
        <form @submit.prevent="addNote" v-if="!findBug.closed">
          <input v-model="noteForm.creator" type="text" placeholder="Username" required>
          <input v-model="noteForm.content" type="text" placeholder="Note Info" required>
          <button type="submit">Submit Note</i></button>
        </form>
      </div>
      <div class=" text-center card col-3" v-for="note in notes"
        :class="{'bg-info' : !note.closed, 'bg-danger' : note.closed}">
        <p>Note Author: {{note.creator}}</p>
        <p>Note: {{note.content}}</p>
        <i class="fas fa-dumpster" @click="deleteNote(note._id)"></i>
      </div>
    </div>
  </div>
</template>
<!-- var note = new Schema({
content: { type: String, required: true },
bug: { type: ObjectId, ref: 'Bug' required: true },
creator: { type: String, required: true } //The provided name for who made the note
user: { type: String, required: true },
flagged: { type: String, enum: ["pending", "completed", "rejected"] }
}, { timestamps: true }) -->

<script>
  export default {
    name: 'bugdetail',
    props: [
      'id',
      'findBug'
    ],
    data() {
      return {
        noteForm: {},
        note: []
      }
    },
    mounted() {
      this.$store.dispatch('getNotes', this.$route.params.id)
      this.$store.dispatch('getBugs', this.$route.params.id)
    },
    computed: {
      notes() {
        return this.$store.state.notes.filter(note => {
          return note.bug == this.$route.params.id
        })
      },
      bug() {
        return this.$store.state.activeBug
      },
      activeNote() {
        return this.$store.state.activeNote
      },
      findNote() {
        let noteID
      }
    },
    methods: {
      addNote() {
        this.noteForm.bug = this.$route.params.id
        this.note.bug = this.$route.params.id
        this.$store.dispatch('createNote', this.noteForm)
      },
      deleteNote(id) {
        this.$store.dispatch('deleteNote', { bug: this.$route.params.id, id: id })
      }
    },

    components: {}
  }
</script>


<style scoped>
  button {
    max-width: 150px;
  }
</style>