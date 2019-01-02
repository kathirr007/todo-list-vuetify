<template>
  <div>
    <v-dialog max-width="600px" transition="dialog-transition">
      <v-btn flat dark slot="activator" class="teal">Add new project</v-btn>
      <v-card>
        <v-card-title>Add a New Project</v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field name="Title" label="Title" prepend-icon="folder" v-model="title"></v-text-field>
            <v-textarea label="Information" prepend-icon="edit" v-model="content"></v-textarea>
            <v-menu offset-y>
              <v-text-field
                slot="activator"
                :value="formatedDate"
                label="Due Date"
                prepend-icon="date_range"
              ></v-text-field>
              <v-date-picker v-model="due" :landscape="true" :reactive="true"></v-date-picker>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn flat class="success mx-0 mt-3 text-capitalize" @click="submit">Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import format from "date-fns/format";

  export default {
    data() {
      return {
        title: "",
        content: "",
        due: null
      };
    },
    methods: {
      submit() {
        console.log(this.title, this.content);
      }
    },
    computed: {
      formatedDate() {
        return this.due ? format(this.due, "Do MMM YYYY") : "";
      }
    }
  };
</script>

<style scoped>
</style>