<template lang="pug">
  footer.footer
    cta-section

    .container
      .row
        .col
          logo.footer__logo
        .col
          // Mobile social
          .footer__social.d-md-none
            g-link(v-for="item in social"  :key="item.id" :href="item.url")
              component.footer__social-icon(:is="item.icon")

    .container.mb-4
      .row
        .col-md-8
          g-link.footer__link.mr-md-5.mr-3(v-for="link in links" :key="link.path" :to="link.path") {{link.title}}
        .col-4
          // Tablet - desktop social
          .footer__social.d-none.d-md-flex
            g-link(v-for="item in social"  :key="item.id" :href="item.url")
              component.footer__social-icon(:is="item.icon")
    .footer__disclaimer
      .container
        div &copy; Copyright 2020 SION Inc. All rights reserved. Various trademarks held by their respective owners.
        .footer__version Version: {{version}}
</template>

<script>
import CtaSection from '~/components/CtaSection';
import Logo from '~/assets/svg/logo.svg';
import Facebook from '~/assets/svg/facebook.svg';
import Instagram from '~/assets/svg/instagram.svg';
import LinkedIn from '~/assets/svg/linkedin.svg';
import Youtube from '~/assets/svg/youtube.svg';

export default {
  name: 'Footer',
  components: { CtaSection, Logo },
  computed: {
    appEmail() {
      return process.env.GRIDSOME_APP_EMAIL;
    }
  },
  data() {
    return {
      version: process.env.GRIDSOME_APP_VERSION || 'local',
      links: [
        // { title: 'Privacy & Terms', path: '/terms/' },
        // { title: 'FAQs', path: '/faq/' },
        { title: 'Contact Us', path: '/contact/' }
      ],
      social: [
        // {
        //   id: 'fb',
        //   alt: 'Sion Facebook',
        //   url: 'https://facebook.com',
        //   icon: Facebook
        // },
        // {
        //   id: 'yt',
        //   alt: 'Sion Youtube',
        //   url: 'https://youtube.com',
        //   icon: Youtube
        // },
        {
          id: 'lin',
          alt: 'Sion LinkedIn',
          url: 'https://www.linkedin.com/company/sion-for-commissions/',
          icon: LinkedIn
        }
        // {
        //   id: 'insta',
        //   alt: 'Sion Instagram',
        //   url: 'https://facebook.com',
        //   icon: Instagram
        // }
      ]
    };
  }
};
</script>

<style lang="scss">
@import 'mixins';

$logo-color: color('primary');
$disclaimer-bg: #f5f5f5;
$disclaimer-text: #656565;
$social-size: 18px;
$social-size-sm: 16px;
.footer {
  &__logo {
    width: 89px;
    fill: $logo-color;
    margin: $spacer * 4 0;
    @include media-breakpoint-down(md) {
      margin-top: $spacer * 2;
    }
    @include media-breakpoint-down(sm) {
      width: 55px;
      margin: $spacer * 1.5 0;
    }
  }
  &__disclaimer {
    background: $disclaimer-bg;
    color: $disclaimer-text;
    font-size: 14px;
    padding: $spacer 0;
    @include media-breakpoint-down(sm) {
      font-size: 10px;
    }
  }
  &__link {
    font-weight: 500;
    color: $disclaimer-text;
    @include media-breakpoint-down(sm) {
      font-size: 14px;
    }
  }
  &__social {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    &-icon {
      width: $social-size;
      height: $social-size;
      margin-left: $spacer;
      fill: color('text-gray');
      transition: fill 0.5s;
      &:hover {
        fill: darken(color('text-gray'), 6%);
      }
    }
    @include media-breakpoint-down(sm) {
      margin: $spacer * 1.5 0;
    }
  }
  &__version {
    opacity: 0.3;
  }
}
</style>
