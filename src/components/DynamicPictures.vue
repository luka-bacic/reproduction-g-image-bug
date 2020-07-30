<template>
  <div>
    <h2>
      Dynamic g-images - they're loaded before they're intersecting the viewport
    </h2>
    <div v-for="(photo, i) in photos" :key="i" class="photo">
      <g-image :src="photo.pfp.file.url" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [],
    };
  },

  async mounted() {
    console.log(this.$static);
    this.photos = this.$static.allContentfulPerson.edges.map(
      (edge) => edge.node
    );
  },
};
</script>

<style></style>

<static-query>
query {
  allContentfulPerson {
    edges {
      node {
        pfp {
          file {
            url
          }
        }
      }
    }
  }
}
</static-query>
