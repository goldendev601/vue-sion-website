<template lang="pug">
  .person
    .person__image.mr-lg-5.mr-md-3(:style="{backgroundImage: `url(${person.image_url})`}")
    .person__info
      .person__name {{person.name}}
      .person__title.mb-3 {{person.title}}
      .person__description {{person.description}}
    
  
</template>

<script>
export default {
  name: 'Person',
  props: {
    person: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';
$image-size: 166px;
$image-size-xl: 166px;
$image-size-lg: 126px;
$image-size-md: 106px;


.person {
  display: flex;
  align-items: center;
  margin-right: 3rem;
  @include media-breakpoint-down(md) {
    flex-direction: column;
    margin-right: 0;
  }
  &__info {
    @include media-breakpoint-down(md) {
      text-align: center;
    }
  }

  &__image {
    flex-shrink: 0;
    width: $image-size;
    height: $image-size;
    background-color: color('text-gray');
    border-radius: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  
    @include media-breakpoint-down(xl) {
      width: $image-size-xl;
      height: $image-size-xl;
    }
    @include media-breakpoint-down(lg) {
      width: $image-size-lg;
      height: $image-size-lg;
    }
    @include media-breakpoint-down(md) {
      margin-bottom: 1rem;
      width: $image-size-md;
      height: $image-size-md;
    }

  }
  &__name {
    font-size: 24px;
    font-weight: bold;
    color: color('primary');
    @include media-breakpoint-down(md) {
      font-size: 20px;
    }
  }
  &__title {
    color: color('text-gray');
    font-size: 20px;
    line-height: 1.2;
    @include media-breakpoint-down(md) {
      font-size: 16px;
    }
  }
  &__description {
    color: color('text-gray');
    @include media-breakpoint-down(md) {
      font-size: 12px;
      padding: 0 $spacer;
    }
  }
}
</style>
