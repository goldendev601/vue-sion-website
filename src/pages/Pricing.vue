<template lang="pug">
  layout
    pricing-section(key="pricing")
      .container
        .row
          .col.offset-lg-0
            page-title(title="You only pay what you need." breadcrumb="Pricing")

</template>

<script>
import PricingSection from '~/components/PricingSection';
import PageTitle from '~/components/PageTitle';

export default {
  name: 'PricingPage',
  metaInfo: {
    title: 'Pricing'
  },
  components: { PricingSection, PageTitle }
};
</script>

<style lang="css" scoped></style>
