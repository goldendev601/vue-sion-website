<template lang="pug">
  section.people
    .container
      .people__title.mb-5.text-md-center.text-lg-left The people behind Sion.
    .container
      .row
        .col-lg-6.offset-lg-0.col-md-6(v-for="person in people" :key="person.name")
          person.mb-5(:person="person")
</template>

<script>
import Person from './Person';

export default {
  name: 'PeopleSection',
  components: { Person },
  props: {
    people: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';

.people {
  background: $gradient-1;

  &__title {
    font-size: 45px;
    font-weight: bold;
    @include media-breakpoint-down(sm) { font-size: 24px; text-align: center;}

  }
}
</style>
