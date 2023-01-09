<template lang="pug">
  section.pricing
    slot
    // Cards
    .container
      .row
        .col-lg-4.offset-lg-0.mb-5.col-md-10.offset-md-1.mb-md-5(v-for="plan in plans" :key="plan.name")
          pricing-card(:plan="plan")
      
</template>

<static-query>
{
  plans:yaml(path:"/data/plans/") {
    data {
      name
      description
      title
      value
      value_info
      features
      feature_description
      button_link
      button_class
      button_caption
    }
  }
}
</static-query>

<script>
import get from 'lodash/get';
import PricingCard from '~/components/PricingCard';

export default {
  name: 'PricingSection',
  components: { PricingCard },
  computed: {
    plans() {
      return get(this, '$static.plans.data', []);
    }
  }
};
</script>

<style lang="scss"></style>
