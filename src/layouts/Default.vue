<template lang="pug">
  .layout
    .layout__header
      .container
        main-header
    transition-group(name="fade" appear)
      slot
    main-footer
</template>

<script>
import MainHeader from '~/components/Header';
import MainFooter from '~/components/Footer';

export default {
  name: 'Defaultlayout',
  components: { MainHeader, MainFooter }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import 'mixins';

.layout {
  &__header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    margin: auto;
    background: rgba(255,255,255,0.9);
    z-index: 10;
  }
  // Fixed header space
  margin-top: $header-height;
  @include media-breakpoint-down(sm) {
    margin-top: $header-height;
  }
}

.nav__link {
  margin-left: 20px;
}

// Animation
.fade-enter-active {
  transition: opacity .75s;
}

.fade-enter {
  opacity: 0;
}
</style>
