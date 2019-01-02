<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row wrap class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-capitalize">Sort by Project Name</span>
          </v-btn>
          <span>Sort by Project name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-capitalize">Sort by person</span>
          </v-btn>
          <span>Sort Projects by Person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :class="`${project.status} white--text my-2 caption`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
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
    methods: {
      sortBy(prop) {
        this.projects.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
      }
    }
  };
</script>

<style lang="stylus">
  .project {
    border-left: 4px solid;

    &.upcoming {
      border-left-color: pink;
    }

    &.ongoing {
      border-left-color: #ffaa2c;
    }

    &.overdue {
      border-left-color: #f83e70;
    }

    &.complete {
      border-left-color: #3cd1c2;
    }
  }

  .v-chip {
    &.upcoming {
      background: pink;
    }

    &.ongoing {
      background: #ffaa2c;
    }

    &.overdue {
      background: #f83e70;
    }

    &.complete {
      background: #3cd1c2;
    }
  }
</style>
