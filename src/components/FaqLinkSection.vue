<template lang="pug">
  section.faq-link
    .container
      .row.align-items-center
        // mobile
        .col-md-4.offset-md-1.d-block.d-md-none.text-center.mb-5
          Icon.faq-link__icon
        
        .col-md-4.offset-md-2.text-center.text-md-left
          .faq-link__title Visit our FAQs
          .faq-link__description Get instant help and find answers quickly.
          g-link(to="/faq/").btn.btn-primary.btn-block.mt-3 Visit FAQs
        // tablet/desktop
        .col-md-4.offset-md-1.d-none.d-md-block
          Icon.faq-link__icon
</template>

<script>
import Icon from '~/assets/svg/icon-faq.svg';

export default {
  name: 'FaqLinkSection',
  components: { Icon }
};
</script>

<style lang="scss">
@import 'mixins';

.faq-link {
  &__title {
    font-size: 35px;
    font-weight: bold;
    @include media-breakpoint-down(md) {
      font-size: 30px;
    }
  }
  &__description {
    color: color('text-gray');
  }
  &__icon {
    width: 170px;
  }
}
</style>
