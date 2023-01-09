<template lang="pug">
  .carousel-card
    .container-fluid(style="padding:0")
      .row.no-gutters.text-left
        .col-12.col-md-12.col-lg-4
          .carousel-card__img(:style="{backgroundImage: `url(${testimonial.image_url})`}")
        .col-12.col-md-12.col-lg-8
          .carousel-card-content
            div
              .carousel-card-content__text "{{testimonial.text}}"
              .carousel-card-content__footer
                .carousel-card-content__author
                  .carousel-card-content__authorname {{testimonial.author_name}}
                  .carousel-card-content__authortitle {{testimonial.author_title}}
                img.carousel-card-content__logo(:src="testimonial.logo_url")

</template>

<script>
export default {
  name: 'CarouselCard',
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';

$card-height: 330px;
$card-height-md: 430px;
$card-height-sm: 600px;

$radius: 6px;
.carousel-card {
  margin: 0 3rem;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.14);
  border-radius: $radius;
  background: #fff;
  max-width: 90%;
  margin: auto;
  @include media-breakpoint-down(md) {
    max-width: 90%;
  }
  @include media-breakpoint-down(sm) {
    max-width: 90%;
  }

  // border: 1px solid red;
  &__img {
    background: #eee;
    min-height: $card-height;
    background-size: cover;
    @include media-breakpoint-down(md) {
      min-height: 200px;

    }


    @include media-breakpoint-down(sm) {
      min-height: 150px;
    }
  }

  &-content {
    height: $card-height;
    padding: $spacer * 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @include media-breakpoint-down(md) {
      min-height: 400px;
    }
    @include media-breakpoint-down(sm) {
      min-height: $card-height-sm;
    }
    &__footer {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__logo {
      width: 80px;
      @include media-breakpoint-down(sm) {
        display: none;
      }
    }

    &__text {
      @include media-breakpoint-down(sm) {
        font-size: 14px;
      }
    }
    &__authorname {
      color: color('primary');
      font-weight: bold;
      @include media-breakpoint-down(lg) {
        font-size: 18px;
      }
      @include media-breakpoint-down(sm) {
        font-size: 15px;
      }
    }
    &__authortitle {
      color: color('text-gray');
      font-size: 15px;

    }
  }
}
</style>
