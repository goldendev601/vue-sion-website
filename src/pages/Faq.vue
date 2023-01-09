<template lang="pug">
  layout
    .container(key="faq-page")
      .row
        .col-lg-12.offset-lg-0.col-md-10.offset-md-1
          .faqs
            .faqs__title Frequently Asked Questions
            faq-item(v-for="faq in faqs" :faq="faq" :key="faq.id")
</template>

<static-query>
{
  faqs:yaml(path:"/data/faq/") {
    data {
      id
      question
      answer
    }
  }
}
</static-query>

<script>
import get from 'lodash/get';
import FaqItem from '~/components/FaqItem';

export default {
  name: 'FaqPage',
  metaInfo: {
    title: 'Frequently Asked Questions'
  },
  components: { FaqItem },
  computed: {
    faqs() {
      return get(this, '$static.faqs.data', []);
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';

.faqs {
  margin: $spacer * 4 0;
  &__title {
    font-size: 45px;
    margin-bottom: $spacer * 4;
    font-weight: bold;
    @include media-breakpoint-down(md) { font-size: 30px; margin-bottom: $spacer *2; }
    @include media-breakpoint-down(sm) { font-size: 24px; margin-bottom: $spacer *2; }

  }
}
</style>
