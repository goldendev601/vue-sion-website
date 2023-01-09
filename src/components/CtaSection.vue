<template lang="pug">
  section.cta
    .container
      .row.align-items-center
        .col-lg-8.offset-lg-0.col-md-10.offset-md-1
          .cta__title.mb-3.mb-md-0 Finally, take the stress out of getting paid
          .cta__description.mb-3.mb-md-0 With SION’s powerfully simple commission management tools.
        .col-lg-4.offset-lg-0.col-md-10.offset-md-1
          a.btn.btn-light.btn-lg.mt-md-5.mt-lg-0.d-md-block.d-none(:href="signUpUrl" style="min-width: 230px;") Sign up now
</template>

<script>
export default {
  name: 'CtaSection',
  computed: {
    signUpUrl() {
      return `${process.env.GRIDSOME_APP_URL}/onboarding`;
    }
  },
};
</script>

<style lang="scss">
@import 'mixins';

section.cta {
  background: linear-gradient(-39deg, #00c4b0 0%, #15e0ba 100%);
  background-size: 120%;
  color: color('white');
  @include media-breakpoint-down(md) {
    text-align: center;
  }
}
.cta {
  &__title {
    font-size: 35px;
    font-weight: bold;
    @include media-breakpoint-down(md) {
      font-size: 28px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 24px;
    }
  }
  &__description {
    font-size: 20px;
    @include media-breakpoint-down(md) {
      font-size: 18px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 18px;
    }
  }
}
</style>
