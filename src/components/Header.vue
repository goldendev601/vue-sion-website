<template lang="pug">
  header.header
    g-link.mr-3(to="/")
      logo.header__logo
    // desktop-tablet
    nav.header__nav.d-none.d-md-flex
      g-link.header__link(:to="link.path" v-for="link in links" :key="link.path") {{link.title}}
    .header__actions.d-none.d-lg-block
      a.btn.btn-link.btn-sm.mr-4(:href="loginURL") Login
      a.btn.btn-primary.btn-sm(:href="signUpUrl" target="_blank" style="min-width: 120px; font-weight:300;") Sign up
    // mobile
    hamburger.header__hamburger.d-block.d-md-none(@click="open ")

    .mobile-menu(v-if="mobileMenu")
      .mobile-menu__header
        .mobile-menu__close(@click="close()") &times;
      .mobile-menu__content
        g-link.mobile-menu__link(:to="link.path" v-for="link in links" :key="`mobile-${link.path}`" @click="close()") {{link.title}}
        // buttons
        a.btn.btn-primary.mb-2.mt-5.btn-block.d-none.d-md-block(:href="signUpUrl") Sign up
        a.btn.btn-outline-primary.btn-block.d-none.d-md-block(style="font-weight: 500" :href="loginURL") Log in

      .mobile-menu__footer
        logo.mobile-menu__logo.mb-3
        .mobile-menu__disclaimer &copy; Copyright 2020 SION Inc. All rights reserved. Various trademarks held by their respective owners.
</template>

<script>
import debounce from 'lodash/debounce';
import Logo from '~/assets/svg/logo.svg';
import Hamburger from '~/assets/svg/menu.svg';

export default {
  name: 'Header',
  components: { Logo, Hamburger },
  computed: {
    appEmail() {
      return process.env.GRIDSOME_APP_EMAIL;
    },
    loginURL() {
      return `${process.env.GRIDSOME_APP_URL}/login`;
    },
    signUpUrl() {
      return `${process.env.GRIDSOME_APP_URL}/onboarding`;
    },
  },
  data() {
    return {
      lastScroll: null,
      mobileMenu: false,
      links: [
        {
          title: 'About us',
          path: '/about/'
        },
        {
          title: 'Press',
          path: '/press/'
        },
        // {
        //   title: 'Pricing',
        //   path: '/pricing/'
        // },
        // {
        //   title: 'Blog',
        //   path: '/blog/'
        // },
        {
          title: 'Contact',
          path: '/contact/'
        },
        {
          title: 'Schedule a Demo',
          path: '/demo/'
        }
      ]
    };
  },
  mounted() {
    document.addEventListener('scroll', this.scrollListener);
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener);
  },
  methods: {
    open() {
      this.mobileMenu = true;
      const body = document.querySelector('body');
      body.style.overflow = 'hidden';
    },
    close() {
      this.mobileMenu = false;
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
    },
    scrollListener: debounce(function() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
      if (currentScroll > 0 && this.lastScroll <= currentScroll) {
        this.lastScroll = currentScroll;
      } else {
        this.lastScroll = currentScroll;
      }
    }, 100)
  }
};
</script>

<style lang="scss">
@import 'mixins';
$disclaimer-text: #656565;
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  min-height: $header-height;
  a {
    font-weight: 500;
  }
  @include media-breakpoint-down(sm) {
    min-height: $header-height-sm;
  }
  &__nav {
    flex-grow: 1;
    display: flex;
    @include media-breakpoint-down(md) {
      justify-content: flex-end;
    }
  }
  &__logo {
    fill: color('primary');
    width: 90px;
    @include media-breakpoint-down(sm) {
      width: 60px;
    }
  }
  &__hamburger {
    fill: color('text-gray');
    width: 20px;
    cursor: pointer;
    &:active {
      fill: color('primary');
    }
  }
  &__link {
    transition: color 0.5s;
    margin: 0 $spacer * 1.5;
    &.active--exact {
      color: color('primary');
    }
    @include media-breakpoint-down(md) {
      margin-left: $spacer * 3;
      margin-right: 0;
      font-size: 14px;
    }
  }
}

// Animation
@keyframes mobileMenu {
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
  }
}

.mobile-menu {
  position: fixed;
  background: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  top: 0;
  left: 0;
  padding: $spacer $spacer * 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: mobileMenu 0.2s ease-out;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.14);
  &__content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    // justify-content: center;
  }
  &__link {
    font-size: 28px;
    line-height: 2.2;
    display: block;
    font-weight: 300;
    &.active--exact {
      color: color('primary');
    }
  }
  &__close {
    cursor: pointer;
    font-size: 36px;
  }
  &__logo {
    width: 60px;
    fill: color('primary');
  }
  &__disclaimer {
    font-size: 10px;
    color: $disclaimer-text;
  }
}
</style>
