<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="project in myProject" :key="project.title">
            <div slot="header">{{ project.title }}</div>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weigh-bold">Due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            title: "Design a new website",
            person: "The Net Ninja",
            due: "1st Jan 2019",
            status: "ongoing",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
          },
          {
            title: "Plan for new website",
            person: "Kathirr007",
            due: "24th March 2019",
            status: "upcoming",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi detates porro molestias non sequi animi!"
          },
          {
            title: "Wireframe for new design",
            person: "Kathirr007",
            due: "21st Feb 2019",
            status: "ongoing",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
          },
          {
            title: "Code up the homepage",
            person: "Chun Li",
            due: "10th Jan 2019",
            status: "complete",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
          },
          {
            title: "Design video thumbnails",
            person: "Ryu",
            due: "20th Dec 2018",
            status: "complete",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
          },
          {
            title: "Create a community forum",
            person: "Gouken",
            due: "20th Oct 2018",
            status: "overdue",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
          }
        ]
      };
    },
    computed: {
      myProject() {
        return this.projects.filter(project => {
          return project.person === "Kathirr007";
        });
      }
    }
  };
</script>
