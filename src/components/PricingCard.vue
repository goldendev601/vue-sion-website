<template lang="pug">
  .pricing-card
    .mt-3
      .pricing-card__title {{plan.name}}
      .pricing-card__description {{plan.description}}
    
    // With price
    .pricing-card-price__container.my-lg-3.my-md-2.my-3(v-if="plan.value")
      .pricing-card-price__value(v-if="plan.value") <sup>$</sup>{{plan.value}} 
        small /mo
      .pricing-card-price__description {{plan.value_info}}
    
    // With title
    .pricing-card-price__container.my-lg-3.my-md-2.my-3(v-if="plan.title") 
      .pricing-card-price__value.enterprise {{plan.title}}
      .pricing-card-price__description(v-if="!plan.feature_description") 
    
    .pricing-card__feature-description(v-if="plan.feature_description")  
      | {{plan.value_info}}
      br
      br
      | Reach us at <a href="mailto:sales@sioncentral.com">sales@sioncentral.com</a> so we can start building your plan.
    
  

    // Features
    .pricing-card__features.mb-4(v-if="plan.features && plan.features.length")
      .pricing-card-feature.my-2(v-for="feature in plan.features" :key="feature") 
        check.pricing-card-feature__icon.mr-2
        .pricing-card-feature__title {{feature}}
    
    // Footer btn
    .pricing-card__footer.d-sm-none.d-md-none.d-lg-block
      g-link.btn.btn-block(to="/contact" :class="plan.button_class || 'btn-primary'") {{ plan.button_caption || 'Try plan'}}
</template>

<script>
import Check from '~/assets/svg/check.svg';

export default {
  name: 'PricingCard',
  components: { Check },
  props: {
    plan: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';
$radius: 5px;
$card-height: 620px;
$card-height-md: 240px;
$card-height-sm: 250px;

.pricing-card {
  min-height: $card-height;
  box-shadow: 0 26px 32px 0 rgba(0,0,0,0.08);
  border-radius: $radius;
  border-top: 8px solid color('primary');
  padding: $spacer * 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.75s;
  @include media-breakpoint-down(md) { min-height: $card-height-md; }
  @include media-breakpoint-down(sm) { min-height: $card-height-sm; padding: $spacer*1.5;  }

  &:hover {
    box-shadow: 3px 12px 15px 0 rgba(0, 0, 0, 0.214);
  }

  &__title {
    font-size: 30px;
    @include media-breakpoint-down(md) { font-size: 24px; }

    font-weight: bold;
  }
  &__description {
    color: color('text-gray');
    @include media-breakpoint-down(md) { font-size: 14px; }

  }
  &__title2 {
    font-weight: bold;
    @include media-breakpoint-down(md) { font-size: 14px; }
  }
  &__features {
    flex-grow: 1;
  }
  &__feature-description {
    flex-grow: 1;
    font-size: 18px;
  
    @include media-breakpoint-down(md) { font-size: 16px; }

    @include media-breakpoint-down(lg) { font-size: 14px; }

    color: color(text-gray);
    a {
      color: color(primary);
    }
  }
  &__feature {
    line-height: 2;

  }
}
.pricing-card-price {
  &__value {
    font-size: 50px;
    font-weight: bold;
    &.enterprise {
      font-size: 30px;
    }
    @include media-breakpoint-down(lg) { font-size: 30px; }
    @include media-breakpoint-down(md) { font-size: 30px; }

    sup {
      transform: translateY(2px);
      display: inline-block;
      margin-right: 5px;
      font-size: 18px;
    }
    small {
      font-size: 15px;
      margin-left: -5px;
    }
  }
  &__description {
    font-size: 14px;
    color: color('text-gray');
  }
}

.pricing-card-feature {
  &__icon {
    width: 16px;
    fill: color('text-gray');
    display: inline-block;
  }
  &__title {
    display: inline-block;
    font-size: 16px;
    @include media-breakpoint-down(lg) { font-size: 14px; }

  }
}
</style>
