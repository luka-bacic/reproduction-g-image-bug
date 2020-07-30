<template>
  <Layout>
    <p>Open dev tools and go to Network Tab. Reload page.</p>
    <p>You can see the 2 images loaded immediately (<strong>portrait-5378357_640.jpg</strong> and <strong>girl-2696947_640.jpg</strong>).</p> Lazy loading does not work with them.</p>
    <p>The static image below them is lazy loaded only when it comes into the viewport</p>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <DynamicPictures />
    <StaticPictures />
  </Layout>
</template>

<script>
import DynamicPictures from "~/components/DynamicPictures";
import StaticPictures from "~/components/StaticPictures";

export default {
  components: {
    DynamicPictures,
    StaticPictures,
  },
};
</script>

<style>
.spacer {
  min-height: 50vh;
  background: lightblue;
}

.spacer:nth-of-type(2n) {
  background: teal;
}
</style>
