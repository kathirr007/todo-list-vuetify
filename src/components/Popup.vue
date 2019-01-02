<template>
  <div>
    <v-dialog max-width="600px" transition="dialog-transition" v-model="dialog">
      <v-btn flat dark slot="activator" class="teal">Add new project</v-btn>
      <v-card>
        <v-card-title>Add a New Project</v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              name="Title"
              label="Title"
              prepend-icon="folder"
              v-model="title"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              label="Information"
              prepend-icon="edit"
              v-model="content"
              :rules="inputRules"
            ></v-textarea>
            <v-menu offset-y>
              <v-text-field
                slot="activator"
                :value="formatedDate"
                label="Due Date"
                prepend-icon="date_range"
                :rules="inputRules"
              ></v-text-field>
              <v-date-picker v-model="due" :landscape="true" :reactive="true"></v-date-picker>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn
              flat
              :loading="loading"
              class="success mx-0 mt-3 text-capitalize"
              @click="submit"
            >Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import format from "date-fns/format";
  import db from "@/fb";

  export default {
    data() {
      return {
        title: "",
        content: "",
        due: null,
        inputRules: [v => v.length >= 3 || "Minimum length is 3 Characters"],
        loading: false,
        dialog: false
      };
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          this.loading = true;
          const project = {
            title: this.title,
            content: this.content,
            due: format(this.due, "Do MMM YYYY"),
            person: "Kathirr007",
            status: "ongoing"
          };

          db.collection("projects")
            .add(project)
            .then(() => {
              console.log("Added to DB");
              this.loading = false;
              this.dialog = false;
            });
        }
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