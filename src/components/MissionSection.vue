<template lang="pug">
  section.mission
    slot
    .container
      .row
        .col-lg-8.offset-lg-0.col-md-8.offset-md-1
          p Back in 2012, we were new to the travel world, and it didn’t take long to realize that something had to change. 
          p SION was born out of a travel agent’s belief that commission tracking can be simple, efficient, and even enjoyable. 
          p We launched our private beta in June 2019 and the industry immediately took notice. SION is proud to be part of the Virtuoso Travel Technology Incubator and Amadeus for Startups.

</template>

<script>
import Icon from '~/assets/svg/bullet-icon.svg';

export default {
  name: 'MissionSection',
  components: { Icon }
};
</script>

<style lang="scss">
@import 'mixins';
section.mission {
  background: url('/images/hero/hero-about.jpg');
  background-size: cover;
  background-position: bottom right;
  padding-bottom: 20rem;
  background-size: 100%;
  background-repeat: no-repeat;


  @include media-breakpoint-down(md) {
    background-position: bottom right;
    background-size: contain;
    background-size: 150%;
    padding-bottom: 22rem;
  }
  @include media-breakpoint-down(sm) {
    padding-bottom: 20rem;
  }
}
.mission {
  p {
    font-size: 20px;
    color: color('text-gray');
    @include media-breakpoint-down(sm) { font-size: 14px; }
  }
}
</style>
