<template lang="pug">
  section.testimonials
    .container.text-center
      .row
        .col-lg-12.offset-lg-0.col-md-8.offset-md-2
          .testimonials__title Our users love us…
          .testimonials__description Companies of every size and shape have already made us their #1 app.
    
    .container.text-center.mt-3
      .testimonials__carousel
        vueper-slides(
          class="no-shadow"
          :transition-speed="250"
          :arrows-outside="true"
          :bullets-outside="true"
          :parallax="false"
          :breakpoints="breakpoints"
        )
          vueper-slide.testimonials__slide(v-for="testimonial in testimonials" :key="testimonial.id")
            carousel-card(slot="content" :testimonial="testimonial")
          //- template(slot="arrow-left")
          //-   arrow.carousel__nav(style="transform: rotate(-180deg);")
          //- template(slot="arrow-right")
          //-   arrow.carousel__nav


    .container.text-center
      .row.justify-content-center
        .col-lg-2.col-md-3.col-4.mb-3(v-for="(logo, $i) in logos" :key="$i")
          img.testimonials__logo(:src="logo")
      
    .container.text-center.mt-5
      .row
        .col-lg-12.offset-lg-0.col-md-8.offset-md-2
          .testimonials__title Our partners
      .row.justify-content-center.mt-4
        .col-lg-2.col-md-3.col-4.mb-3(v-for="(logo, $i) in partnerLogos" :key="$i")
          img.testimonials__logo(:src="logo")
        
</template>

<static-query>
  {
    testimonials:yaml(path:"/data/testimonials/") {
      data {
        id
        image_url
        logo_url
        text
        author_name
        author_title
      }
    }
  }
</static-query>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import get from "lodash/get";
import CarouselCard from "~/components/CarouselCard";
import Arrow from "~/assets/svg/chevron.svg";

import "vueperslides/dist/vueperslides.css";

export default {
  name: "TestimonialsSection",
  components: {
    CarouselCard,
    VueperSlides,
    VueperSlide,
    Arrow
  },
  data() {
    return {
      breakpoints: {
        4000: { slideRatio: 1 / 3.5 },
        2400: { slideRatio: 1 / 3.5 },
        1600: { slideRatio: 1 / 2.5 },
        1200: { slideRatio: 1 / 2.2 },
        1024: { slideRatio: 1 / 1.5 },
        900: { slideRatio: 1 / 1 },
        600: { slideRatio: 1 / 0.32 }
      },
      logos: [
        "/images/testimonials/logo-smartflyer.png",
        "/images/testimonials/logo-cadence.png",
        "/images/testimonials/logo-skylark.png",
        "/images/testimonials/logo-intheknow.png",
        "/images/testimonials/logo-tafari.png",
        "/images/testimonials/logo-quintessentially.png"
      ],
      partnerLogos: [
        "/images/partners/logo-sabre.png",
        "/images/partners/logo-amadeus.png",
        "/images/partners/logo-virtuoso.png",
        "/images/partners/logo-ccra.png",
        "/images/partners/logo-iata.png"
      ]
    };
  },
  computed: {
    testimonials() {
      return get(this, "$static.testimonials.data", []);
    }
  }
};
</script>

<style lang="scss">
@import "mixins";
$bg: $gradient-1;
$bullet-color: #bcc4c3;
section.testimonials {
  background: $bg;
}
.testimonials {
  &__title {
    font-size: 45px;
    font-weight: bold;
    @include media-breakpoint-down(md) {
      font-size: 31px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 24px;
      margin-bottom: $spacer;
    }
  }
  &__description {
    font-size: 20px;
    color: color("text-gray");
    @include media-breakpoint-down(md) {
      font-size: 18px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 14px;
    }
  }
  &__carousel {
    padding: $spacer * 4 0;
    max-width: 80%;
    margin: auto;
    @include media-breakpoint-down(md) {
      max-width: 95%;
    }
    @include media-breakpoint-down(sm) {
      padding: 0 0;
      max-width: 85%;
    }
  }
  &__logo {
    max-width: 60%;
    @include media-breakpoint-down(md) {
      max-width: 80%;
    }
  }

  // vueper slides
  .vueperslides {
    &__arrows {
      color: color("primary");
    }
    &__arrow svg {
      @include media-breakpoint-down(sm) {
        width: 2.5rem;
      }
    }
    &__bullet {
      color: $bullet-color;
      margin: 1.5rem 0.25rem;
      .default {
        box-shadow: none;
      }
    }
  }
}
</style>
