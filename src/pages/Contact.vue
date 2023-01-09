<template lang="pug">
  layout.contact-page
    // FORM
    contact-form(key="contact")
      .container
        page-title.contact-page__title(title="Get in Touch" breadcrumb="Contact us")
        .contact-page__description Use the form below or email us at {{ email }}
    .container(key="separator")
      hr
    //- faq-link(key="faqlink")

</template>


<script>
import PageTitle from '~/components/PageTitle';
import ContactForm from '~/components/ContactForm';
import FaqLink from '~/components/FaqLinkSection';

export default {
  name: 'ContactPage',
  metaInfo: {
    title: 'Contact'
  },
  components: { PageTitle, ContactForm, FaqLink },
  computed: {
    email() {
      return process.env.GRIDSOME_APP_EMAIL;
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';

.contact-page {
  hr {
    border-bottom: 0;
    border: 1px solid #eee;
    background: none;
  }

  &__title {
    margin-bottom: 0;
  }
  &__description {
    font-size: 20px;
    color: color('text-gray');
    margin-bottom: $spacer * 3;
    @include media-breakpoint-down(md) {
      text-align: center;
      font-size: 18px;
    }
    @include media-breakpoint-down(sm) {
      text-align: left;
      font-size: 14px;
    }
  }
}
</style>
