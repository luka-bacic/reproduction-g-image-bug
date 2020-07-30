<template>
  <Layout>
    <p>
      On this page the same 2 images are generated dynamically with
      v-lazy-image. Lazy loading works correctly.
    </p>
    <div class="spacer-2"></div>
    <div class="spacer-2"></div>
    <div class="spacer-2"></div>

    <VLazyImageDynamicPictures />
  </Layout>
</template>

<script>
import VLazyImageDynamicPictures from "~/components/VLazyImageDynamicPictures";

export default {
  components: {
    VLazyImageDynamicPictures,
  },
};
</script>

<style>
.spacer-2 {
  height: 50vh;
  background: plum;
}

.spacer-2:nth-of-type(2n) {
  background: powderblue;
}
</style>
