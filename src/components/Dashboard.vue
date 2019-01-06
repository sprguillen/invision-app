<template>
  <div class="dashboard">
    <custom-header />
    <image-form />
    <map-form />
    <custom-footer />
  </div>
</template>

<script>
import CustomHeader from '@/components/Header.vue';
import ImageForm from '@/components/ImageForm.vue';
import CustomFooter from '@/components/Footer.vue';
import MapForm from '@/components/MapForm.vue';

export default {
  name: 'Dashboard',
  components: {
    CustomHeader,
    ImageForm,
    CustomFooter,
    MapForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
