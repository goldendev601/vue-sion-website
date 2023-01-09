<template lang="pug">
  section.hero
    video.hero__video.d-none.d-lg-block(autoplay loop muted playsinline)
      source(type="video/mp4" :src="videoUrl")
    .container
      .row.text-center
        .col-lg-8.offset-lg-2.col-md-10.offset-md-1
          .hero__title.mb-4.mb-md-4
            | The Simplest Way to Track and
            br
            | Manage Travel Commissions         

          .hero__cta.d-none.d-md-block
            a.btn.btn-primary.mb-2.mb-md-0(style="min-width: 180px;" :href="signUpUrl") Free 30 Day Trial
            //- a.btn.btn-outline-primary(style="min-width: 140px; font-weight: 500" :href="loginURL") Log in
          //- p.hero__description.mb-5
          //-   | Meet SION&mdash;the simplest way to track </br>and manage travel.
          p.hero__description.mb-5
            | No Credit Card Required
</template>

<script>
export default {
  name: "HeroSection",
  computed: {
    loginURL() {
      return `${process.env.GRIDSOME_APP_URL}/login`;
    },
    signUpUrl() {
      return `${process.env.GRIDSOME_APP_URL}/onboarding`;
    }
  },
  data() {
    return {
      videoUrl: `/video/hero-desktop-v5.mp4`
    };
  }
};
</script>

<style lang="scss">
@import "mixins";

$section-height: 80vh;
section.hero {
  // min-height: $section-height;
  position: relative;
}
.hero {
  background-size: cover;
  background-position: right;
  &__video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    // min-height: $section-height;
    width: 100%;
    // height: $section-height;
  }
  @include media-breakpoint-down(md) {
    background-position: center;
    background-image: url("/images/hero/hero-tablet-alt.gif");
  }
  @include media-breakpoint-down(sm) {
    background-position: center;
    background-image: url("/images/hero/hero-mobile-alt.gif");
  }
  &__title {
    font-size: 40px;
    margin-top: 50px;
    line-height: 1.2;
    font-weight: bold;
    letter-spacing: 0.3px;
    @include media-breakpoint-up(lg) {
      font-size: 42px;
    }
    @include media-breakpoint-up(xl) {
      font-size: 54px;
    }
    @include media-breakpoint-down(md) {
      font-size: 40px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 22px;
    }
  }
  &__description {
    font-size: 10px;
    text-align: center;
    margin-top: 15px;
    @include media-breakpoint-down(md) {
      font-size: 9px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 9px;
    }
  }
  &__cta button {
    @include media-breakpoint-down(sm) {
      width: 100%;
    }
  }
}
</style>
