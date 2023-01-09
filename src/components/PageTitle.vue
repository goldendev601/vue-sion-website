<template lang="pug">
  .page-title
    .page-title__breadcrumb {{breadcrumb}}
    .page-title__title.my-1.my-md-3 {{title}}
    .page-title__content
      slot
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    breadcrumb: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';

.page-title {
  margin-bottom: $spacer*4;
  @include media-breakpoint-down(md) { text-align: center;}
  @include media-breakpoint-down(sm) { margin-bottom: $spacer*2; text-align: left; }

  &__breadcrumb { 
    color: color("text-gray");
    font-weight: bold;
  }
  &__title {
    font-size: 45px;
    font-weight: bold;
    line-height: 1.2;
    @include media-breakpoint-down(md) { font-size: 36px; }
    @include media-breakpoint-down(sm) { font-size: 24px; }

  }
}

</style>
