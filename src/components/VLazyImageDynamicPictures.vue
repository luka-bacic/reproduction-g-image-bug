<template>
  <div>
    <h2>
      Dynamic image with
      <a
        href="https://github.com/alexjoverm/v-lazy-image"
        target="_blank"
        rel="noopener"
        >v-lazy-image</a
      >, a different Vue lazy loader - works correctly with dynamic images
    </h2>

    <div v-for="(photo, i) in photos" :key="i" class="photo">
      <v-lazy-image :src="photo.pfp.file.url" />
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage,
  },

  data() {
    return {
      photos: [],
    };
  },

  async mounted() {
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
