<template>
  <div class="col-12 bugdetail">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="addNote">
          <input v-model="noteForm.creator" type="text" placeholder="Username" required>
          <input v-model="noteForm.content" type="text" placeholder="Note Info" required>
          <button type="submit">Submit Note</i></button>
        </form>
      </div>
      <div class=" text-center card col-3" v-for="note in notes">
        <p>Note Author: {{note.creator}}</p>
        <p>Note: {{note.content}}</p>
        <button @click="deleteNote">Change Status</button>
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
      'id'
    ],
    data() {
      return {
        noteForm: {},
        note: []
      }
    },
    computed: {
      notes() {
        return this.$store.state.notes.filter(note => {
          return note.bug == this.$route.params.id
        })
      }
    },
    methods: {
      addNote() {
        this.noteForm.bug = this.$route.params.id
        this.note.bug = this.$route.params.id
        this.$store.dispatch('createNote', this.noteForm)
      },
      deleteNote(id) {
        this.$store.dispatch('deleteNote', id)
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